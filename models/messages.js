const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserMessage = new Schema({
    title: { type: String, required: true, maxLength: 50 },
    text: { type: String, required: true, maxLength: 150 },
})

UserMessage.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object

    return `/models/item/${this._id}`; /// ???
  });

module.exports = mongoose.model('Message', UserMessage);