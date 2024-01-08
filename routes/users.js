
const mongoose = require('mongoose')
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://admin:a123@contactdb.hza3krj.mongodb.net/pin");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },


})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema)