import express from "express";
import db from "./db.js";

const app = express();
app.use(express.json());
const port = 3002;

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

app.listen(port, () => {
  console.log("listening to port ", port);
});
