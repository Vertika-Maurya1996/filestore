const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName:String,
  email: String,
  password: String,
},
{
  collection: 'users',
  timestamps:true,
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
