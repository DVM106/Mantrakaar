const fs = require('fs');

// Extract header and footer from an existing rebuilt page
const templateHtml = fs.readFileSync('design.html', 'utf8');
const headerContent = templateHtml.split('<main id="main-content">')[0];
let footerContent = templateHtml.split('</main>')[1];

// Make sure contact.html is highlighted in the header (if we implemented active states based on path)
// (update-links.js handles active states, so we don't need to do it here)

let nativeBody = `
<div class="grid-container" style="padding: 100px 15px 150px; max-width: 1200px;">
  
  <div style="text-align: center; margin-bottom: 80px;">
    <h2 style="font-size: clamp(40px, 6vw, 60px); color: var(--text-heading); margin-bottom: 15px;">Contact Us</h2>
    <p style="font-size: 20px; color: var(--text-body); max-width: 600px; margin: 0 auto; opacity: 0.8;">Let's build something extraordinary together. Reach out to our offices below or send us a message.</p>
  </div>

  <div style="display: flex; flex-wrap: wrap; gap: 40px; justify-content: space-between;">
    
    <!-- Contact Info Cards -->
    <div style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 30px;">
      
      <!-- India Office -->
      <div style="background: rgba(255,255,255,0.02); border-radius: 20px; padding: 40px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.3); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
        <h3 style="color: var(--text-heading); font-size: 24px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
          <i class="fa-solid fa-building" style="color: #aa00d3;"></i> India Office
        </h3>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 15px; display: flex; gap: 15px; align-items: flex-start;">
          <i class="fa-solid fa-map-location-dot" style="color: var(--text-accent); margin-top: 5px; opacity: 0.8;"></i>
          <span>D/8, Jai Sai Dham, Sodawala Lane,<br>Borivali (West), Mumbai 400092</span>
        </p>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 15px; display: flex; gap: 15px; align-items: center;">
          <i class="fa-solid fa-phone" style="color: var(--text-accent); opacity: 0.8;"></i>
          <a href="tel:+919091091903" style="color: var(--text-body); text-decoration: none;">+91 9091091903</a>
        </p>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 0; display: flex; gap: 15px; align-items: center;">
          <i class="fa-solid fa-envelope" style="color: var(--text-accent); opacity: 0.8;"></i>
          <a href="mailto:parag@mantrakaar.com" style="color: var(--text-body); text-decoration: none;">parag@mantrakaar.com</a>
        </p>
      </div>

      <!-- UK Office -->
      <div style="background: rgba(255,255,255,0.02); border-radius: 20px; padding: 40px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.3); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
        <h3 style="color: var(--text-heading); font-size: 24px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
          <i class="fa-solid fa-building" style="color: #aa00d3;"></i> UK Office
        </h3>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 15px; display: flex; gap: 15px; align-items: flex-start;">
          <i class="fa-solid fa-map-location-dot" style="color: var(--text-accent); margin-top: 5px; opacity: 0.8;"></i>
          <span>3, Barncluith Road,<br>Hamilton ML3 7DQ</span>
        </p>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 15px; display: flex; gap: 15px; align-items: center;">
          <i class="fa-solid fa-phone" style="color: var(--text-accent); opacity: 0.8;"></i>
          <a href="tel:+447411334480" style="color: var(--text-body); text-decoration: none;">+44 7411334480</a>
        </p>
        <p style="color: var(--text-body); font-size: 16px; margin-bottom: 0; display: flex; gap: 15px; align-items: center;">
          <i class="fa-solid fa-envelope" style="color: var(--text-accent); opacity: 0.8;"></i>
          <a href="mailto:dipesh@mantrakaar.com" style="color: var(--text-body); text-decoration: none;">dipesh@mantrakaar.com</a>
        </p>
      </div>

    </div>

    <!-- Contact Form -->
    <div style="flex: 1.5; min-width: 300px; background: rgba(255,255,255,0.02); border-radius: 20px; padding: 50px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 30px 60px rgba(0,0,0,0.5);">
      <h3 style="color: var(--text-heading); font-size: 28px; margin-bottom: 30px;">Send a Message</h3>
      <form style="display: flex; flex-direction: column; gap: 25px;" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
        
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 200px;">
            <label style="display: block; color: var(--text-body); font-size: 14px; margin-bottom: 8px;">Your Name (Required)</label>
            <input type="text" required style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 15px 20px; border-radius: 8px; color: #fff; font-size: 16px; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#aa00d3'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
          <div style="flex: 1; min-width: 200px;">
            <label style="display: block; color: var(--text-body); font-size: 14px; margin-bottom: 8px;">Email Address (Required)</label>
            <input type="email" required style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 15px 20px; border-radius: 8px; color: #fff; font-size: 16px; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#aa00d3'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
        </div>

        <div>
          <label style="display: block; color: var(--text-body); font-size: 14px; margin-bottom: 8px;">Phone Number (Required)</label>
          <input type="tel" required style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 15px 20px; border-radius: 8px; color: #fff; font-size: 16px; outline: none; transition: border-color 0.3s;" onfocus="this.style.borderColor='#aa00d3'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
        </div>

        <div>
          <label style="display: block; color: var(--text-body); font-size: 14px; margin-bottom: 8px;">Message</label>
          <textarea rows="5" placeholder="Write your message here..." required style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 15px 20px; border-radius: 8px; color: #fff; font-size: 16px; outline: none; resize: vertical; transition: border-color 0.3s;" onfocus="this.style.borderColor='#aa00d3'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'"></textarea>
        </div>

        <button type="submit" style="margin-top: 10px; background: #360655; color: #fff; border: none; padding: 18px 45px; border-radius: 40px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; align-self: flex-start;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(54,6,85,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
          Send Message
        </button>
      </form>
    </div>

  </div>
</div>
`;

let finalHtml = headerContent + '<main id="main-content">\n' + nativeBody + '\n</main>' + footerContent;

// Replace title
finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>Contact Us — Mantrakaar</title>');

// We don't include the "Get Started" CTA at the bottom since they are already on the contact page.
// The footer content from design.html actually DOES include the "Get Started" CTA because I appended it BEFORE </main> in native-build.js!
// Wait! `native-build.js` appends the CTA *inside* `<main>`. 
// Since `footerContent` is everything *after* `</main>`, the CTA is NOT in `footerContent`! 
// This is perfect, because we don't want the CTA on the contact page.

fs.writeFileSync('contact.html', finalHtml);
console.log('Successfully generated contact.html');
