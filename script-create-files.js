console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌")
console.log("▐ ░▀▀█░█▀█░█░█░▀█▀░█▀▄░█▀█░█▄█░█▀█░█▀▀░█░░░█▀█░█▀▄  ▌")
console.log("▐ ░░░█░█▀█░▀▄▀░░█░░█▀▄░█▀█░█░█░█░█░▀▀█░█░░░█▀█░█▀▄  ▌")
console.log("▐ ░▀▀░░▀░▀░░▀░░▀▀▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░  ▌")
console.log("▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌")
console.log("Javier Ramos Nistal @JaviRamosLab                    ")
console.log("Website - https://JaviRamosLab.com                   ")
console.log("Github - https://www.github.com/JaviRamosLab         ")
console.log("YouTube - https://www.youtube.com/@JaviRamosLab      ")
console.log("Facebook - https://www.facebook.com/JaviRamosLab     ")
console.log("Telegram - https://telegram.me/JaviRamosLab          ")
console.log("Email - co2mm.esperanto@gmail.com                    ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log("start Creating files")

import fs from 'fs'
import path from 'path'

// Specify the target directory here
const targetDir = "E:\\@GitHub__WikiAgoraSocial__44__\\test-WikiAgora\\controllers";

// Specify the files here
const fileNames = [
    'audios.controllers.js',
    'news.controllers.js'
]

let successCount = 0;
let errorCount = 0;
let skippedCount = 0;

fileNames.forEach(fileName => {
    const filePath = path.join(targetDir, fileName);

    try {
        // Check if file already exists
        if (fs.existsSync(filePath)) {
            console.log(`Skipped: ${fileName} (already exists)`);
            skippedCount++;
        } else {
            // Create empty file
            fs.writeFileSync(filePath, '');
            console.log(`Created: ${fileName}`);
            successCount++;
        }
    } catch (error) {
        console.error(`Error creating ${fileName}:`, error.message);
        errorCount++;
    }
});

console.log("-------------------------------------------")
console.log("creation process completed.")
console.log("")
console.log("Summary:")
console.log(`  Success: ${successCount}`)
console.log(`  Errors:  ${errorCount}`)
console.log(`  Skipped: ${skippedCount}`)
console.log("-------------------------------------------")
