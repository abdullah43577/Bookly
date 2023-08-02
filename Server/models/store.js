const mongoose = require('mongoose');
const Schema = mongoose.Schema; // deines the structure of the document.(Schema is a contructor function)

const storeSchema = new Schema(
  {
    file: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model('Store', storeSchema); // creates a model from the schema

module.exports = Store;
