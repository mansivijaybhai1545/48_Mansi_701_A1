console.log("=== Global Object Metadata ===");
console.log(`Current Directory Path (__dirname): ${__dirname}`);
console.log(`Current File Path (__filename): ${__filename}`);
console.log(`Current Process ID: ${process.pid}`);
console.log(`Node Engine Platform: ${process.platform}`);

console.log("\n=== Command Line Arguments (process.argv) ===");
// process.argv contains: [0] Node engine path, [1] Script path, [2+] custom user strings
const argumentsPassed = process.argv.slice(2);

if(argumentsPassed.length === 0) {
    console.log("No arguments passed. Try running: node globals.js Mansi 701");
} else {
    argumentsPassed.forEach((arg, index) => {
        console.log(`Argument [${index + 1}]: ${arg}`);
    });
}