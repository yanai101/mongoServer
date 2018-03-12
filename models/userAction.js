const mongoose = require('mongoose');

const userActionShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    action: { type: String, require: true },
    usertype :{ type: String, enum: ["ADMIN", "VIEW", "ATTACK", "EXPLOR", "TECH"] },
    time: Date
}, { timestamps: true });

module.exports = mongoose.model('UserActions', userActionShema);