const { crearArchivo } = require('./helpers/multipiclar');
const argv = required('yargs')
                .option('b' , {
                    alias: 'base',
                    type: 'number',
                    demanOption: true,
                    describe: 'Es la base de la tablad e multiplicar'
                })
                .option('h' , {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hasta donde quieres la tabla'
                })
                .option('l' , {
                    alias: 'listar',
                    type: 'boolean',
                    demanOption: true,
                    default: false,
                    describe: 'Muestra la tabla en cosola'
                })
                .check( (argv, options) =>{
                    if ( isNaN ( argv.b ) ){
                        throw 'La bse tiene que ser un número'
                    }
                    return true;
                })
                .argv;


module.exports = argv;