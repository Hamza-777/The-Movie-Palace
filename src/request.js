const axios = require('axios');

export const makeRequest = async type => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=c0b0ce546f570554e3544c2353cb7395`);
        
        return response.data.results;
    } catch (err) {
        console.error(err);
    }
}