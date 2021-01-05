import React from 'react'
import './App.css';
import Row from './Components/Row'
import request from './services/request';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Romeantic Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Documentory Movies" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
