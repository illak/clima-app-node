const axios = require('axios');


const getLugarLatLon = async ( dir ) => {

    const encodedUrl = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '31c748601cmshd6b045dfe82ff38p19b45ejsn3715e7e4ca4e'}
      });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }
      
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direccion,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLon
}