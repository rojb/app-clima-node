const axios = require('axios');

const getClima = async(lat, long) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a3fa3214ecf6005f35ea73c240b62c9a`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}