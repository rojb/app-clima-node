const axios = require('axios');

const getCuidadLatLong = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?types=region,district,place,locality&access_token=pk.eyJ1Ijoicm9qYiIsImEiOiJja2JqdHJ1ZnEwaHBnMnVxbGFlOXk0b25nIn0.OJLvk0lCcrBhBBFN1JZmzA`);
    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    let location = resp.data.features[0].text;
    let long = resp.data.features[0].bbox[0];
    let lat = resp.data.features[0].bbox[1];

    return {
        location,
        lat,
        long
    };

}

module.exports = {
    getCuidadLatLong
}