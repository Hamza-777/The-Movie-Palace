import React from 'react';
import MovieCard from './MovieCard';
import '../styles/Movies.css';

const Movies = ({ movies, params }) => {
    return (
        <main className='movies flex-row-wrap align-center justify-center'>
            {
                movies && movies.map(movie => (
                    (movie.name && movie.name.toLowerCase().indexOf(params) !== -1) || (movie.original_title && movie.original_title.toLowerCase().indexOf(params) !== -1) || (movie.original_name && movie.original_name.toLowerCase().indexOf(params) !== -1) ? (<MovieCard 
                        key={movie.id} 
                        poster={movie.poster_path || movie.backdrop_path}
                        title={movie.name || movie.original_title || movie.original_name}
                        overview={movie.overview}
                        rating={movie.vote_average}
                        date={movie.release_date || movie.first_air_date}
                    />) : ''
                ))
            }
        </main>
    )
}

export default Movies;