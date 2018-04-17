var mongoose = require('mongoose');

PublicationSchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Publication', PublicationSchema);