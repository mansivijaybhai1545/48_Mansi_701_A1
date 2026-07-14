const fs = require("fs");
const path = require("path");

const targetFile = path.join(__dirname, "temp.txt");

fs.writeFileSync(targetFile, "Temporary data to be deleted");

const deleteFileAsync = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(targetFile, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("file deleted successfully via custome promise");
            }
        });
    });
};

deleteFileAsync()
    .then((message) => 
        console.log(message))
    .catch((err) => 
        console.error("Error deleting file:", err)
    );

