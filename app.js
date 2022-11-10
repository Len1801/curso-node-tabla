const { crearArchivo } = require('./helpers/multipiclar');
const colors = require('colors');
const argv = require ('./config/yargs');

console.clear() ;

// console.log(process.argv);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');

crearArchivo( argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));


