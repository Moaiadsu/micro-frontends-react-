var express = require("express");
var { getNoteById } = require("./noteController");
const asyncHandler = require('express-async-handler');
var { ESConnect } = require("../config/ESConnect");
const client = ESConnect();

// create a new post in the database
const createSearchNotes = asyncHandler(async (req, res) => {
  console.log("seach notes", req.body);
  if (!req.body.title || !req.body.user || !req.body.content || !req.body.category) {
    res.status(400);
    res.send("Please provide all the fields");
  } else {
    try {
      const result = (await client).index({
        index: "notes",
        id: req.body._id,
        body: {
          title: req.body.title,
          user: req.body.user,
          content: req.body.content,
          createDate: new Date(),
        },
      });
      res.status(201);
      res.send(result);
      console.log("note has succesfully created", result);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send("Something went wrong");

    }
  }
});



// update a post in the database
// app.delete("/remove-post", async (req, res) => {
//     const result = await elasticClient.delete({
//       index: "posts",
//       id: req.query.id,
//     });
//     res.json(result);
// });
const searchNotes = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const result = await client.search({
    index: "posts",
    query: { fuzzy: { title: req.query.query } },
  });
  res.json(result);
});

// app.get("/posts", async (req, res) => {
//     const result = await elasticClient.search({
//       index: "posts",
//       query: { match_all: {} },
//     });
//     res.send(result);
// });

module.exports = { searchNotes, createSearchNotes };