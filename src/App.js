import React, { useState, useEffect } from 'react';
import { makeRequest } from './request';
import { links } from './links';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import './styles/global.css';

function App() {
  const [ movies, getMovies ] = useState('');
  const [ link, setLink ] = useState(links.fetchTrending);
  const [ params, setParams ] = useState('');
  const [ showing, setShowing ] = useState('trending');

  useEffect(() => {
    (async (e) => {
      getMovies(await makeRequest(link));
    })();
  }, [movies, link]);

  const getParams = (recievedParams) => {
    setParams(recievedParams);
  }
  

  return (
    <div className="App">
      <Navbar getParams={getParams} />
      <section className='options flex-center' >
        <button 
          className='btn' 
          id={showing === 'trending' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchTrending); setShowing('trending')}}
        >
          Trending
        </button>
        <button 
          className='btn' 
          id={showing === 'top-rated' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchTopRated); setShowing('top-rated')}}
        >
          Top Rated
        </button>
        <button 
          className='btn' 
          id={showing === 'action' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchActionMovies); setShowing('action')}}
        >
          Action
        </button>
        <button 
          className='btn' 
          id={showing === 'comedy' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchComedyMovies); setShowing('comedy')}}
        >
          Comedy
        </button>
        <button 
          className='btn' 
          id={showing === 'horror' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchHorrorMovies); setShowing('horror')}}
        >
          Horror
        </button>
        <button 
          className='btn' 
          id={showing === 'romance' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchRomanceMovies); setShowing('romance')}}
        >
          Romance
        </button>
        <button 
          className='btn' 
          id={showing === 'mystery' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchMystery); setShowing('mystery')}}
        >
          Mystery
        </button>
        <button 
          className='btn' 
          id={showing === 'sci-fi' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchSciFi); setShowing('sci-fi')}}
        >
          Sci-Fi
        </button>
        <button 
          className='btn' 
          id={showing === 'western' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchWestern); setShowing('western')}}
        >
          Western
        </button>
        <button 
          className='btn' 
          id={showing === 'animation' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchAnimation); setShowing('animation')}}
        >
          Animation
        </button>
        <button 
          className='btn' 
          id={showing === 'tv' ? 'active' : ''} 
          onClick={e => {setLink(links.fetchTV); setShowing('tv')}}
        >
          TV
        </button>
      </section>
      <Movies movies={movies} params={params} />
    </div>
  );
}

export default App;
