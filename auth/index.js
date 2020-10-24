const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
      data: "trying to login",
    });
  });

  module.exports = router 