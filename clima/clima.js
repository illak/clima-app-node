const axios = require('axios');


const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=2bfbde0f531c3fe7900da8740765109a&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}