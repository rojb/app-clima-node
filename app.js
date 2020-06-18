const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;

const getInfo = async(direccion) => {
    try {
        let coordenas = await lugar.getCuidadLatLong(direccion);
        let temp = await clima.getClima(coordenas.lat, coordenas.long);
        return `El clima en ${coordenas.location} es de ${temp} °C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}
getInfo(argv.direccion)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

/*lugar.getCuidadLatLong(argv.direccion)
    .then((resp) => console.log(resp.location, resp.lat, resp.long))
    .catch((err) => console.log(err));

clima.getClima(-18.018113, -63.286776)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
    */