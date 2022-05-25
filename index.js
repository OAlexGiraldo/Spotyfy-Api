import{obtenerCanciones} from './serviciogenerarcanciones.js'

import{pintarCanciones} from './pintarCanciones.js'

//llamar al funcion generar token

let canciones=await obtenerCanciones()

//llamar funcion pintar Canciones
pintarCanciones(canciones.tracks)













