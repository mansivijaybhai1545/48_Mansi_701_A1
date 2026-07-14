const fs = require("fs");
const { ZipArchive } = require("archiver");

const output = fs.createWriteStream("MyFolder.zip");
const archive = new ZipArchive({
    zlib: { level: 9 }
});

archive.on("warning", (err) => {
    if (err.code !== "ENOENT") {
        throw err;
    }
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);

archive.directory("MyFolder", false);

archive.finalize();

output.on("close", () => {
    console.log("ZIP created successfully!");
});