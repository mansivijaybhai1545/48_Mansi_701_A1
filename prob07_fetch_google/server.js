const express = require('express');
const app = express();
const PORT = 8000;

app.get('/google', async (req, res) => {
    try {
        // Fetch raw HTML data from google using native fetch
        const response = await fetch('https://www.google.com');
        const htmlData = await response.text();
        
        // Return Google's markup as our server response
        res.send(htmlData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch data from Google.');
    }
});

app.listen(PORT, () => {
    console.log(`Server handling fetch runs at http://localhost:${PORT}/google`);
});