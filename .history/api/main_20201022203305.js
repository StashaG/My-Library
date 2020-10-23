//create express routes
const express = require('express');

//Express method router
const router = express.Router()

router.get('/home', (req, res) => {
    res.json({
        location: "home"
    })
});

//export so server.js knows where to get the file
