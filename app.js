const express = require("express");
// console.log(express);

const users = require("./users.json");


const app = express();

app.use(express.json());


// REST API

// HTTP VERBS

// get - get all items
// get - get single item
// post - create a single item
// patch/put - update a singe item
// delete - delete a single item


app.get("/", (req, res) => {
    res.send({ users });
});


app.post("/", (req, res) => {
    // console.log(req.body);
    const newUsers = [...users, req.body]
    // res.send("Post");
    res.send(newUsers);
});

app.patch("/:id", (req, res) => {
    console.log(req.params.id);
    // const newUsers = users.map((user) => {
    // if (req.params.email === user.email) {
    // return req.body;
    // }
    // return user;
    // });
    res.send("Patch");
    // res.send(newUsers);
});

//  Optional Chaining
// app.patch("/:email", (req, res) => {
//     const newUsers = users.map((user) => {
//         if (req.params.email === user.email) {
//             if (req?.body?.first_name) user.first_name = req.body.first_name;
//             if (req?.body?.last_name) user.last_name = req.body.last_name;
//             if (req?.body?.email) user.email = req.body.email;
//             if (req?.body?.gender) user.gender = req.body.gender;
//         }
//         return user;
//     });
//     res.send(newUsers);
// });


app.delete("/:email", (req, res) => {
    const newUsers = users.filter((user) => user.email !== req.params.email);
    res.send(newUsers);
});

app.get("/:email", (req, res) => {
    const newUsers = users.filter((user) => user.email === req.params.email);
    res.send(newUsers);
});


app.listen(2345, function () {
    console.log("Listening on port 2345");
});