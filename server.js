const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.post('/check', (req, res) => {
    const {password, hash} = req.body;
    bcrypt.compare(password, hash, (err, result) => {
        if (err) {
            return res.status(500).send('Error comparing passwords');
        }
        res.status(200).send({match: result});
    });
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
