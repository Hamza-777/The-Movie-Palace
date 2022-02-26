const axios = require('axios');

export const makeRequest = async link => {
    try {
        const response = await axios.get(link);
        
        return response.data.results;
    } catch (err) {
        console.error(err);
    }
}