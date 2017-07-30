let mongoose = require('mongoose');
let levelSchema = mongoose.Schema({
    userId: String,
    guildId:String,
    xp: Number,
    level: Number,
    accountId: String,
    b1nzy: Date
});
let levelModel = mongoose.model('Levels', levelSchema);
module.exports = levelModel;