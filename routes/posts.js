const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description:String,
  image: String,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt : {
    type: Date,
    default: Date.now,
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
