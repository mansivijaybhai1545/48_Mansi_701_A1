const fs = require('fs');
const path = require('path');

const fileA = path.join(__dirname, 'demo.txt');
const fileB = path.join(__dirname, 'renamed_demo.txt');

// 1. Write file
fs.writeFileSync(fileA, 'Line 1: Hello World.\n');
console.log('File created.');

// 2. Append file
fs.appendFileSync(fileA, 'Line 2: Appended Content.\n');
console.log('Content appended.');

// 3. Read file
const contents = fs.readFileSync(fileA, 'utf8');
console.log('--- Current File Contents ---');
console.log(contents);

// 4. Rename file
fs.renameSync(fileA, fileB);
console.log('File successfully renamed to renamed_demo.txt');