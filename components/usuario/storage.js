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

function addUsuario( usuario ) {
    const objeto = new Model( usuario )
    objeto.save()
}

async function getUsuarios() {
    const objetos = await Model.find()
    return objetos
}

async function updateUsuario(id_usuario, usuario) {
    const foundUsuario = await Model.findOne({ _id: id_usuario })

    if (foundUsuario) {
        foundUsuario.usuario = usuario.usuario
        foundUsuario.clave = usuario.clave
        foundUsuario.nombre = usuario.nombre
        foundUsuario.apellido = usuario.apellido
        foundUsuario.correo = usuario.correo
        foundUsuario.tipo_usuario = usuario.tipo_usuario
        foundUsuario.fecha_nacimiento = usuario.fecha_nacimiento
        
        const newUsuario = await foundUsuario.save()
        return newUsuario
    }
}

function deleteUsuario(id_usuario) {
    return Model.deleteOne({ _id: id_usuario })
}

module.exports = {
    add: addUsuario,
    list: getUsuarios,
    update: updateUsuario,
    remove: deleteUsuario,
}