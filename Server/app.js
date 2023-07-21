const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001; // client server runs at port 3000

// express app
const app = express();
app.use(morgan('dev')); // log details to the console for every request made to the browser;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
