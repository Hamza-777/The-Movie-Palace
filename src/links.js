const apiKey = 'c0b0ce546f570554e3544c2353cb7395';

const links = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`,
    fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchTV: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10770`
}

export {
    links
}