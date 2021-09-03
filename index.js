const express = require('express');
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
  res.send('kabuwum!')
});

app.get('/kaboom.js', (req, res) => {
  fs.readFile(__dirname + "/static/kaboom.js", (err, data) => {
    if(err) {
      console.log(err);
      return
    }
    res.status(307).write(data);
    return res.end()
  })
})

app.listen(3000, () => {
  console.log('server started');
});