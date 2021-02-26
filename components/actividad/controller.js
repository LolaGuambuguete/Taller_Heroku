const use = require('./network')
const storage = require('./storage')

function addActividad(materia, curso) {
    return new Promise( (resolve, reject) => {
        if (!materia) {
            console.error('[MensajeControlado] No hay Actividades.')
            return reject('No existe Actividad.')
        }
        // Se crea un objeto Carrera
        const fullActividad = {
            materia: materia,
            curso:curso,
            fecha_creacion: new Date(),
        }
        console.log( fullActividad )
        storage.add( fullActividad )
        return resolve( fullActividad )
    })
}

function getActividad() {
    return new Promise((resolve, reject) => {
        resolve( storage.list() )
    })
}

module.exports = {
    addActividad,
    getActividad,
}