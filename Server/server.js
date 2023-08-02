require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT; // client server runs at port 3000
const mongoose = require('mongoose');
const Store = require('./models/store');
const { cloudinary } = require('./utils/cloudinary');

// express app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev')); // log details to the console for every request made to the browser;
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' })); // parse json data from the request body

// connect to mongoDB
const dbURI = `mongodb+srv://officialayo540:bookly1234@bookly.sny5ebx.mongodb.net/Bookly-Database?retryWrites=true&w=majority`;

const database = async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
};

database();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/get-all-stores', async (req, res) => {
  try {
    const result = await Store.find({});
    res.status(200).send(result);
  } catch (err) {
    res.send('Error fetching request', err);
  }
});

app.delete('/delete-all-stores', async (req, res) => {
  try {
    await Store.deleteMany({});
    res.status(200).send('All stores deleted successfully');
  } catch (err) {
    res.status(500).send('Error deleting stores from database', err);
  }
});

// upload the formData to the database
app.post('/upload', async (req, res) => {
  try {
    const fileStr = req.body.file;

    // uploading the image to cloudinary
    const imageUrl = await cloudinary.uploader.upload(
      fileStr,
      {
        upload_preset: 'bookly',
      },
      function (error, result) {
        if (error) {
          res.status(500).send({ error: 'Error uploading image', message: error.message });
        } else {
          res.status(200).send({ message: 'Image and Form submitted successfully' });
        }
      }
    );

    const secure_url = imageUrl.secure_url;

    const store = new Store({
      file: secure_url,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    });

    // save to database
    await store.save();
  } catch (err) {
    res.status(500).send({ error: 'Error uploading form/image, something went wrong', message: err.message });
  }
});
