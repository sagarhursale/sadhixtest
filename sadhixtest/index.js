const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hurry Finally Webpage!!!!!!!!!!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
