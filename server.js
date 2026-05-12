const express = require('express');
const path = require('path');
const app = express();
const port = 7860;

app.get('/', (req, res) => {
    res.send(`
        <body style="background:#0d0d0d; color:#ff0000; font-family:sans-serif; display:flex; justify-content:center; align-items:center; height:100vh; margin:0;">
            <div style="text-align:center; border:1px solid #ff0000; padding:50px; border-radius:20px; background:rgba(255,0,0,0.05); backdrop-filter:blur(10px);">
                <h1>SLAX HUB</h1>
                <p style="color:#888;">Project is Live on Hugging Face</p>
            </div>
        </body>
    `);
});

app.listen(port, '0.0.0.0', () => console.log('SLAX HUB Running!'));
