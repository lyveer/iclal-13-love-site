const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory and subdirectories
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`❤️  "13" İclal Aşk Sitesi Sunucusu Başlatıldı! ❤️`);
    console.log(`🔗 Lokal Adres: http://localhost:${PORT}`);
    console.log(`===============================================`);
});
