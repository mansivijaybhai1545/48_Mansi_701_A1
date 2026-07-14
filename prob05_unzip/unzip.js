const fs = require("fs");   
const unzipper = require("unzipper");
const path = require("path");

const zipFilePath = path.join(__dirname, "MyFolder.zip");
const outputDir = path.join(__dirname, "MyFolder");

if(!fs.existsSync(zipFilePath)) {
    console.log("Please copy a valid 'output.zip' into this folder first to test extraction.");
    process.exit(0);
}

fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: outputDir }))
    .on("close", () => {
        console.log("ZIP extracted successfully!");
    });