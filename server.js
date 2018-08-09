import express, { static } from 'express';
const app = express();

app.use("/", static(__dirname));

app.post('/exia', function (req, res) {
  var username = req.body
  // will need to update username to proper saving literal
  res.send(`you just saved ${username} to the database`);
});

app.listen(3000, () => console.log('Server for project exia launched!!!'))