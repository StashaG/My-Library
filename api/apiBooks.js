const express = require("express");
const router = express.Router(); 


    //---------------------------------------------------------
    //                          GET
    //---------------------------------------------------------

    router.get("/", async (req, res) => {
        const { author, title } = req.body;//destructing
        const params = `${title ? "title=" + title : ''}${author ? "&author=" + author : ''}`;
        fetch(`http://openlibrary.org/search.json?${params}&limit=10`)
            .then(result => result.json())//a promise that gets a result and puts it key value pairs
            .then(data => res.json(data));    
        // .catch(err => console.log(err));   
    });

module.exports = router