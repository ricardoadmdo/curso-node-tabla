const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
	.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
	.catch(err => console.log(err));
