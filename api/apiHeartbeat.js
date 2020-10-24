const express = require("express");
const router = express.Router(); //router is a built in method that comes with express

router.get("/", (req, res) => {
    res.json({
      is: "working",
    });
  });

module.exports = router 