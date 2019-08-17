const mongoose = require('mongoose')

//faltou vc passar a por 27017 que é padrão do mongodb
const uri = 'mongodb://localhost:27017/noderest'
mongoose.createConnection(uri, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose