require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT; // client server runs at port 3000
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

// express app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev')); // log details to the console for every request made to the browser;
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' })); // parse json data from the request body

// connect to mongoDB
const dbURI = `mongodb+srv://officialayo540:bookly1234@bookly.sny5ebx.mongodb.net/Bookly-Database?retryWrites=true&w=majority`;

(async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
})();

// API routes
app.use(apiRoutes);
