const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening at port ${PORT}...`);
  }
});
