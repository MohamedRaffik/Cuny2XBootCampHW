const express = require('express');
const app = express();
const path = require('path');
const { Student, Campus } = require('./routes')

app.use(express.json());
app.use('/students', Student);
app.use('/campus', Campus);
app.use(express.static(path.join(__dirname+'/../client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})