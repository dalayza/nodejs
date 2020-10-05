const axios = require('axios');

const getClima = async(lat, lng) => {
    const API = '3bd4782459c5678b8beb1a9fd1de98dc';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ API }&units=metric`);

    return resp.data.main.tmp;
}

module.exports = {
    getClima
}