const Store = require('../models/store');
const { cloudinary } = require('../utils/cloudinary');

const api_index = (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
};

// upload the formData to the database
const api_upload = async (req, res) => {
  try {
    const fileStr = req.body.file;

    // uploading the image to cloudinary
    const imageObj = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'bookly',
    });

    const image_url = imageObj.secure_url;

    const store = new Store({
      file: image_url,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      total_quantity: req.body.total_quantity,
    });

    // save to database
    await store.save();

    res.status(200).send({ message: 'Image uploaded successfully to cloudinary and form successfully submitted to database' });
  } catch (err) {
    res.status(500).send({ error: 'Error uploading form/image, something went wrong', message: err.message });
  }
};

const api_get_all_books = async (req, res) => {
  try {
    const result = await Store.find({});
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching books from database', message: err.message });
  }
};

const api_id = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Store.findById(id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching data from database', message: err.message });
  }
};

const api_delete_all_stores = async (req, res) => {
  try {
    await Store.deleteMany({});
    res.status(200).send('All stores deleted successfully');
  } catch (err) {
    res.status(500).send('Error deleting stores from database', err);
  }
};

module.exports = {
  api_index,
  api_upload,
  api_get_all_books,
  api_id,
  api_delete_all_stores,
};
