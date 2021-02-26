const use = require('./network')
const storage = require('./storage')

function addRepresentante_legal(cedula, nombre, apellido, correo_electronico,telefono) {
    return new Promise( (resolve, reject) => {
        if (!cedula) {
            console.error('[MensajeControlado] No hay datos del Representante legal.')
            return reject('No existe  esta cedula del Representante legal.')
        }
        // Se crea un objeto Carrera
        const fullRepresentante_legal = {
            cedula: cedula,
            nombre:nombre,
            apellido:apellido,
            correo_electronico:correo_electronico,
            telefono:telefono,
            fecha_creacion: new Date(),
        }
        console.log( fullRepresentante_legal )
        storage.add( fullRepresentante_legal )
        return resolve( fullRepresentante_legal )
    })
}

function getRepresentante_legal() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

module.exports = {
    addRepresentante_legal,
    getRepresentante_legal,
}