import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export interface SunsetHeroProps {
  /** Override height. Default is full-screen height (h-screen) */
  height?: string;
  /** Custom classes for outer container */
  className?: string;
  /** Accessibility label describing the animated scene */
  ariaLabel?: string;
  /** Programmatically pause animations */
  pause?: boolean;
  /** Mark as decorative to screen readers (sets aria-hidden="true") */
  isDecorative?: boolean;
}

// 1. VERTEX SHADER: Pass coordinates to fragment shader
const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// 2. FRAGMENT SHADER: High-fidelity texture distortion shader for water waves
const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform sampler2D u_texture;
  varying vec2 vUv;

  // Calculates UV coordinates for mapping texture like CSS "object-fit: cover"
  vec2 getCoverUV(vec2 uv, vec2 res, vec2 texRes) {
    float screenRatio = res.x / res.y;
    float texRatio = texRes.x / texRes.y;
    vec2 scale = vec2(1.0);
    vec2 offset = vec2(0.0);
    
    if (screenRatio > texRatio) {
      scale.y = texRatio / screenRatio;
      offset.y = 0.5 * (1.0 - scale.y);
    } else {
      scale.x = screenRatio / texRatio;
      offset.x = 0.5 * (1.0 - scale.x);
    }
    
    return uv * scale + offset;
  }

  void main() {
    // 1.5 aspect ratio for 3:2 landscape photos
    vec2 coverUV = getCoverUV(vUv, u_resolution, vec2(1.5, 1.0));
    vec2 uvDistort = coverUV;
    
    // Horizon line in cover-mapped UV coordinates
    float horizon = 0.465;
    
    if (coverUV.y < horizon) {
      // Scale displacement: wave ripples are larger in the foreground and fade to 0 at the horizon
      float scale = (horizon - coverUV.y) / horizon;
      
      // Perspective compression for wave frequencies (smaller waves near horizon, larger in foreground)
      float yFreq = 35.0 / (0.12 + scale * 0.88);
      
      // Wave ripple formulas propagating from left to right (using kx - omega*t)
      float wave1 = sin(coverUV.x * 45.0 - u_time * 2.2 + coverUV.y * yFreq) * 0.5;
      float wave2 = sin((coverUV.x - coverUV.y * 0.4) * 35.0 - u_time * 1.6) * 0.25;
      float wave3 = cos((coverUV.x + coverUV.y * 0.4) * 65.0 - u_time * 2.8) * 0.25;
      
      float waveCombined = wave1 + wave2 + wave3;
      
      // 1. Subtly distort the texture coordinates (keeps base image aligned with waves)
      uvDistort.x += waveCombined * 0.0035 * scale;
      uvDistort.y += (wave2 + wave3) * 0.0018 * scale;
      
      // Sample texture with slightly distorted UV coordinates
      vec3 color = texture2D(u_texture, uvDistort).rgb;
      
      // 2. Overlay moving procedural light and shadow highlights to simulate volumetric wave motion
      // Define reflection column centered horizontally (around 0.495)
      float reflectionCol = exp(-pow((coverUV.x - 0.495) * 5.5, 2.0));
      
      // Sharp sun glint/sparkle highlights on wave crests
      float sparkle = pow(smoothstep(0.25, 0.75, waveCombined), 2.5);
      vec3 goldenHighlight = vec3(1.0, 0.75, 0.40) * sparkle * reflectionCol * 0.5;
      
      // Sky blue reflection on the sides of the reflection column
      float skyReflection = smoothstep(0.0, 0.6, waveCombined) * (1.0 - reflectionCol);
      vec3 blueHighlight = vec3(0.42, 0.62, 0.88) * skyReflection * 0.08;
      
      // Wave troughs (shadows) to create depth
      float trough = smoothstep(0.0, -0.6, waveCombined);
      vec3 shadow = vec3(0.05, 0.08, 0.12) * trough * 0.15;
      
      // Apply highlights and shadows scaled by depth
      color += (goldenHighlight + blueHighlight - shadow) * scale;
      
      gl_FragColor = vec4(color, 1.0);
    } else {
      // Scale sky displacement: increases away from the horizon towards the top of the viewport
      float skyScale = (coverUV.y - horizon) / (1.0 - horizon);
      float scale = pow(max(0.0, skyScale), 1.3);
      
      // Extremely slow horizontal drift (wind movement over a long period)
      float windDrift = sin(u_time * 0.02) * 0.012;
      
      // Low-frequency organic warping for cloud morphing
      float warp1 = sin(coverUV.x * 3.0 + u_time * 0.08) * 0.007;
      float warp2 = cos(coverUV.y * 4.0 - u_time * 0.06) * 0.005;
      float warp3 = sin((coverUV.x - coverUV.y) * 2.0 + u_time * 0.04) * 0.003;
      
      // Displace sky/cloud coordinates
      uvDistort.x += (windDrift + warp1 + warp2) * scale;
      uvDistort.y += (warp2 + warp3) * scale * 0.4;
      
      // Sample texture with distorted UV coordinates
      vec3 color = texture2D(u_texture, uvDistort).rgb;
      
      gl_FragColor = vec4(color, 1.0);
    }
  }
`;

// 3. SCREEN QUAD COMPONENT
const ScreenQuad: React.FC<{ pause: boolean }> = ({ pause }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const timeRef = useRef(0);
  const reducedMotionRef = useRef(false);

  // Load texture
  const texture = useLoader(THREE.TextureLoader, './sunset-bg.jpg');

  // Configure texture wrapping and filtering
  useEffect(() => {
    if (texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
    }
  }, [texture]);

  // Handle media queries
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mediaQuery.matches;

    const listener = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const frameCountRef = useRef(0);
  useFrame((_, delta) => {
    if (!materialRef.current) return;

    if (!pause) {
      timeRef.current += delta;
    }

    materialRef.current.uniforms.u_time.value = timeRef.current;
    materialRef.current.uniforms.u_resolution.value.set(
      window.innerWidth * (window.devicePixelRatio || 1),
      window.innerHeight * (window.devicePixelRatio || 1)
    );

    frameCountRef.current++;
    if (frameCountRef.current % 120 === 0) {
      console.log(`[SunsetHero] Frame loop active. u_time = ${timeRef.current.toFixed(2)}, paused = ${pause}, prefersReducedMotion = ${reducedMotionRef.current}`);
    }
  });

  const uniforms = useRef({
    u_texture: { value: texture },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_time: { value: 0 }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms.current}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

// 4. MAIN EXPORT COMPONENT
export const SunsetHero: React.FC<SunsetHeroProps> = ({
  height = 'h-screen',
  className = '',
  ariaLabel = 'Cinematic ocean sunset background with flowing wave motion',
  pause = false,
  isDecorative = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0c1a2e] ${height} ${className}`}
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : ariaLabel}
      aria-hidden={isDecorative ? 'true' : undefined}
    >
      {/* React Three Fiber Canvas Renderer */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#0c1a2e]" />}>
        <Canvas
          gl={{ antialias: true, depth: false, stencil: false, alpha: false }}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        >
          <ScreenQuad pause={pause} />
        </Canvas>
      </Suspense>

      {/* Subtle overlay gradient to frame and enhance text readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.28))'
        }}
      />
    </div>
  );
};

export default SunsetHero;
