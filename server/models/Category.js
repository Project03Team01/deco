const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  artworks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artwork'
    }
  ],
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    }
  ]
  // sub cats?
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
