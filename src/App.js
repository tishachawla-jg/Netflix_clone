
import './App.css';
import Row from './Row';
import requests from './Requests';
import './Row.css';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

    <Row
    title = "NETFLIX ORIGINALS" fetchUrl ={requests.fetchNetflixOriginals} 
    isLargeRow 
    />
     

      <Row title = "TRENDING NOW" fetchUrl ={requests.fetchTrending}/>
      <Row title = "TOP RATED" fetchUrl ={requests.fetchTopRated}/>
      <Row title = "ACTION MOIES" fetchUrl ={requests.fetchActionMovies}/>
      <Row title = "COMEDY MOVIES" fetchUrl ={requests.fetchComedyMovies}/>
      <Row title = "ROMANCE MOVIES" fetchUrl ={requests.fetchRomanceMovies}/>
      <Row title = "DOCUMENTARIES" fetchUrl ={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
