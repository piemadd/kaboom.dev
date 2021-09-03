const express = require('express');
const fs = require('fs')

const app = express();
app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render("index");
})

app.get('/kaboom.js', (req, res) => {
  res.sendFile(__dirname + "/static/kaboom.js")
})

app.get('/vid.mp4', (req, res) => {
  res.sendFile(__dirname + "/static/vid.mp4")
})

app.listen(3000, () => {
  console.log('server started');
});