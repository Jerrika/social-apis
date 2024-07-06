const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});