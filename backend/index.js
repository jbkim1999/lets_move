const express = require('express');
const { exec } = require('child_process');
const cors = require('cors'); // add this line
const app = express();
const port = 3000;

app.use(cors()); // add this line

app.get('/run-script', (req, res) => {
    exec('sh /Users/changjunlee/Desktop/hackathon/lets_move/backend/test.sh', (error, stdout, stderr) => {
        if (error) {
            console.warn(error);
            res.status(500).send(error);
        }
        res.send(stdout ? stdout : stderr);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
