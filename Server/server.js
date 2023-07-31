const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080; // client server runs at port 3000
const mongoose = require('mongoose');
const Store = require('./models/store');
// const multer = require('multer');

// multer instance
// const upload = multer({ dest: 'uploads/' });

// express app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev')); // log details to the console for every request made to the browser;
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse json data from the request body

// connect to mongoDB
const dbURI = `mongodb+srv://officialayo540:bookly1234@bookly.sny5ebx.mongodb.net/Bookly-Database?retryWrites=true&w=majority`;

const database = async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log(`server started on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log('mongodb not connected');
    console.log(err);
  }
};

database();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/get-stores', (req, res) => {
  const store = new Store({
    file: 'atomic-habits.jpg', // 'atomic-habits.jpg
    title: 'Atomic Habits',
    price: 2000,
    description: 'This is a book about habits',
    category: 'Self Help',
  });

  store
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.post('/store', (req, res) => {
  const store = new Store(req.body);

  store
    .save()
    .then((result) => res.status(202).send({ message: 'submitted successfully!!', result }))
    .catch((err) => {
      res.status(500).send('Error submitting form', err);
      console.log(err);
    });
});
