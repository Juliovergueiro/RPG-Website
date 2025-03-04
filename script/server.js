const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, "..")));

// Route to serve index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});