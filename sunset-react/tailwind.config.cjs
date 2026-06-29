/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'sky-shift': 'skyShift 40s ease-in-out infinite',
        'sun-float': 'sunFloat 12s ease-in-out infinite',
        'cloud-drift-slow': 'cloudDriftSlow 120s linear infinite',
        'cloud-drift-fast': 'cloudDriftFast 80s linear infinite',
        'wave-parallax-1': 'waveParallax1 45s linear infinite',
        'wave-parallax-2': 'waveParallax2 30s linear infinite',
        'wave-parallax-3': 'waveParallax3 20s linear infinite',
        'wave-bob-1': 'waveBob1 6s ease-in-out infinite',
        'wave-bob-2': 'waveBob2 8s ease-in-out infinite',
        'sparkle-fast': 'sparkleFast 2.5s ease-in-out infinite',
        'sparkle-slow': 'sparkleSlow 4s ease-in-out infinite',
      },
      keyframes: {
        skyShift: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '0% 100%' },
        },
        sunFloat: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.04)' },
        },
        cloudDriftSlow: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        cloudDriftFast: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        waveParallax1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-800px)' },
        },
        waveParallax2: {
          '0%': { transform: 'translateX(-800px)' },
          '100%': { transform: 'translateX(0)' },
        },
        waveParallax3: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-400px)' },
        },
        waveBob1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        waveBob2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        sparkleFast: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleX(0.7) translateX(-2px)' },
          '50%': { opacity: '0.95', transform: 'scaleX(1.25) translateX(2px)' },
        },
        sparkleSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.8) translateX(2px)' },
          '50%': { opacity: '0.85', transform: 'scaleX(1.1) translateX(-2px)' },
        },
      },
    },
  },
  plugins: [],
}
