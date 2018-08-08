const express = require('express');
const app = express();

app.use("/", express.static(__dirname));

// app.post('/exia', function (req, res) {
//   var username = req.body
//   res.send(`you just saved ${username} to the database`);
// });

app.listen(3000, () => console.log('Server for project exia launched!!!'))