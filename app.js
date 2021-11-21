const express = require("express");
// console.log(express);

const app = express();

// REST API

// HTTP VERBS

// get - get all items
// get - get single item
// post - create a single item
// patch/put - update a singe item
// delete - delete a single item


app.get("", (req, res) => {
    // const a = {};
    // a.name = "Abhijeet Kumar";
    return res.send("Welcome to Home page");
})


app.listen(2345, function () {
    console.log("Listening on port 2345");
});