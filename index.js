const express = require("express");
const app = express();
const port = 3000;

app.get("/any-app", (req, res) => {
  res.send("This is get method!");
});

app.post("/any-app", (req, res) => {
  res.send("This is post method!");
});

app.put("/any-app", (req, res) => {
  res.send("This is put method!");
});

app.delete("/any-app", (req, res) => {
  res.send("This is delete method!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
