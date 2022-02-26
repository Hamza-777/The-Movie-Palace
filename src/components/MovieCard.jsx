import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ poster, title, overview, rating, date }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <div className='card'>
            <img src={`${base_url}${poster}`} alt={title} className='card-img' loading='lazy' />
            <div className='overlay flex-center flex-col justify-end'>
                <div className='overlay-content flex-center flex-col align-start'>
                    <p className='h4 movie-title'>{title}</p>
                    <p className='overview'>{overview}</p>
                    <div className='misc flex-center justify-between'>
                        <p className='h5 date'>{date.slice(0,4)}</p>
                        <p className='h5 rating'>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;