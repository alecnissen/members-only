const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true, maxLength: 50 },
    lastName: { type: String, required: true, maxLength: 50 },
    email: { type: String, required: true, maxLength: 50 },
    password: { type: String, required: true, maxLength: 150 },
    // membershipStatus: { type: String, required: true, enum: ['Member', 'Not a member'], maxLength: 50 },
  
  });
  
  
  UserSchema.virtual("url").get(function () {
      // We don't use an arrow function as we'll need the this object
  
      return `/models/item/${this._id}`; /// ???
    });
  
  module.exports = mongoose.model('User', UserSchema);