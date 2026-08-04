const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const urls = [
  "https://mantrakaar.com/design/",
  "https://mantrakaar.com/development/",
  "https://mantrakaar.com/marketing/",
  "https://mantrakaar.com/consultancy/"
];

async function scrape() {
  const data = {};
  for (const url of urls) {
    console.log("Fetching", url);
    const slug = url.split("/").filter(Boolean).pop();
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;
    
    // Extract Hero Title
    const heroTitle = document.querySelector(".hero-title")?.textContent.trim() || "";
    
    // Extract Section Titles & Leads
    const sections = Array.from(document.querySelectorAll(".section-header")).map(header => {
      const title = header.querySelector(".section-title")?.textContent.trim();
      const lead = header.querySelector(".lead")?.textContent.trim();
      return { title, lead };
    }).filter(s => s.title || s.lead);

    // Extract Service Columns (Features)
    const features = Array.from(document.querySelectorAll(".ut-service-column")).map(col => {
      const title = col.querySelector("h3")?.textContent.trim();
      const desc = col.querySelector("p")?.textContent.trim();
      return { title, desc };
    }).filter(f => f.title);

    // Extract Text Blocks
    const paragraphs = Array.from(document.querySelectorAll(".wpb_wrapper > p, .wpb_text_column p")).map(p => p.textContent.trim()).filter(p => p.length > 20);

    data[slug] = { heroTitle, sections, features, paragraphs };
  }
  
  fs.writeFileSync("services-data.json", JSON.stringify(data, null, 2));
  console.log("Saved to services-data.json");
}

scrape().catch(console.error);
