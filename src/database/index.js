const mongoose = require('mongoose')

const uri = 'mongodb://localhost/noderest'
mongoose.createConnection(uri, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose