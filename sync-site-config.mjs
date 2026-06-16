import fs from "node:fs";

const jsonPath = new URL("site-config.json", import.meta.url);
const jsPath = new URL("site-config.js", import.meta.url);
const config = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const js = `window.SITE_CONFIG = ${JSON.stringify(config, null, 2)};\n`;

fs.writeFileSync(jsPath, js, "utf8");
console.log("Updated site-config.js from site-config.json");
