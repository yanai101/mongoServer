const mongoose = require('mongoose');


const userActionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    userAction: String,
    date: Date
},
    { timestamps: true })

module.exports = mongoose.model('UserActions', userActionSchema);