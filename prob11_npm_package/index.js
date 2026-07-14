// A mathematical string formatter package utility
function formatCurrency(amount) {
    return `₹${parseFloat(amount).toFixed(2)}`;
}

function greetUser(name) {
    return `Welcome back to the development console, ${name}!`;
}

module.exports = { formatCurrency, greetUser };