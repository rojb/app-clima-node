const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        description: 'Dirección de la ciudad de la que se quiere obtener el clima.'
    }
}).argv;
module.exports = {
    argv
}