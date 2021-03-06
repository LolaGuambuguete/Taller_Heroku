const db = require('mongoose')
const Model = require('./model')

const uri = "mongodb+srv://Angel99vr:@240915@cluster0.lubsf.mongodb.net/PSDB?retryWrites=true&w=majority";

db.Promise = global.Promise
db.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'PSDB'
})
    .then(() => console.log('[db] Conectada con éxito.'))
    .catch((error) => console.error('[error] ', error))

function addinstitucion( institucion ) {
    const objeto = new Model( institucion )
    objeto.save()
}

async function getinstitucion() {
    const objetos = await Model.find()
    return objetos
}

module.exports = {
    add: addinstitucion,
    list: getinstitucion,
}