var express = require("express");
var { getNoteById } = require("./noteController");
const asyncHandler = require('express-async-handler');
var { ESConnect } = require("../config/ESConnect");
const { default: Helpers } = require("@elastic/elasticsearch/lib/helpers");
const { getNotes } = require("./noteController");
const client = ESConnect();

// /*
//   1- callling the data from the database ✅
//   2- convert the data into JSON format ✅
//   3- convert the data into ELK documents ✅
//   4- send the data to the ELK server ✅
//   5- call the data from the ELK server based on the search query -- searchNotes 
//   6- send the data back to the client 
//   7- upload new data from client to the database
//   8- update onUpdate the database call step 1
// */ 

// // make th setting of the mapping



// // call the data from the database
// // create a function that generates ELK format
// const generateElastic = async (posts) => {
//   const elasticPosts = convertToElastic(posts);
//   const body = Object.keys(elasticPosts).reduce((acc, id) => {
//     acc.push({ index: { _index: "posts", _type: "_doc", _id: id } });
//     acc.push(elasticPosts[id]);
//     return acc;
//   }, []);
//   return body;
// };

// // convert the data into JSON format
// const convertToElastic = (posts) => {
//   const elasticPosts = {};
//   posts.forEach((post) => {
//     elasticPosts[post._id] = {
//       title: post.title,
//       user: post.user,     
//       content: post.content,
//       createDate: post.createDate,
//     };
//   });
//   return elasticPosts;
// };

// const getNotes = asyncHandler(async (req, res) => {
//   console.log("the body", req.user);
//   const notes = await getNotes(req, res);

//   // convert the data into ELK documents
//   const ELKNotes = convertToElastic(notes);

//   return ELKNotes;
// });

// // create the index and send the data to the ELK server
// const indexNotes = asyncHandler(async (req, res) => {
//   // create the index
//   const settings = {
//     "settings": {
//       "number_of_shards": 1,
//       "number_of_replicas": 0
//     },
//     "mappings": {
//       "properties": {
//         "director": {
//           "type": "text"
//         },
//         "duration": {
//           "type": "integer"
//         },
//       }
//     }
//   };

//   // create the index
//   const indexName = "myNotes";
//   my = client.indices.create({ index: indexName, ignore:[400, 404], body: settings });

//   const dataNotes = await getNotes(req, res);
//   // send the data to the ELK server
//   try {
//     console.log("index has been created", my);
//     res = Helpers.bulk({ es, body: dataNotes});
//     console.log("index has been created", res);
//   }
//   catch (error) {
//     console.log("index has not been created", error);
//   }

// });

// /*// upload the data to the ELK server
// need to be like this
// {
//   '_index': 'notes',
//   '_type': '_doc',
//   '_id': '1',
//   '_score': 1.0,
//   '_source': {
//     'title': 'title',
//     'user': 'user',
//     'content': 'content',
//     'createDate': 'createDate'
//     'category': 'category'
//     'tags': 'tags'
//   }
// }
// */

// // update a post in the database
// // app.delete("/remove-post", async (req, res) => {
// //     const result = await elasticClient.delete({
// //       index: "posts",
// //       id: req.query.id,
// //     });
// //     res.json(result);
// // });


// module.exports = { searchNotes, createSearchNotes };