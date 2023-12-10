const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/pintrest")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  profileImage: String,
  fullname: String,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});


userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);
module.exports = User;
