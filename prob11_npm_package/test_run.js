// Import the package locally using a relative path line definition
const myPackage = require('./index.js');

// Call and print the package functions
console.log(myPackage.greetUser("Mansi"));
console.log(`Formatted Invoice Amount: ${myPackage.formatCurrency(25000)}`);