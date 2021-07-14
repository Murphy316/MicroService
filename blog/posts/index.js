/*
 * @Author: Murphy
 * @Date: 2021-07-14 13:12:47
 * @LastEditTime: 2021-07-14 13:23:17
 */
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();
app.use(bodyParser.json());
//an obj to store all post we just created
const posts = {};

//two difference routes
//req: request
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  post[id] = {
    id,
    title,
  };
  res.status(201), send(posts[id]);
});

app.listen(4000, () => {
  console.log("listening port 4000");
});
