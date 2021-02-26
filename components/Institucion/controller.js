const use = require('./network')
const storage = require('./storage')

function addinstitucion(nombre) {
    return new Promise( (resolve, reject) => {
        if (!nombre) {
            console.error('[MensajeControlado] No hay nombre de la institucion Educativa.')
            return reject('No existe institucion.')
        }
        // Se crea un objeto Institucion
        const fullinstitucion = {
            nombre: nombre,
            fecha_creacion: new Date(),
        }
        console.log( fullinstitucion )
        storage.add( fullinstitucion )
        return resolve( fullinstitucion )
    })
}

function getinstitucion() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

module.exports = {
    addinstitucion,
    getinstitucion,
}