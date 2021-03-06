const express = require("express");
const db = require("./db.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/dishes", (req, res) => {
  const data = db[0].dishes;

  res.send(data);
});

app.get("/comments", (req, res) => {
  const data = db[0].comments;

  res.send(data);
});

app.get("/promotions", (req, res) => {
  const data = db[0].promotions;

  res.send(data);
});

app.get("/leaders", (req, res) => {
  const data = db[0].leaders;

  res.send(data);
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
