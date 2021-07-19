import React, { useEffect , useState } from 'react'
import requests from './Requests';
import './Row.css';
import axios from 'axios';
import  './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)

            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request;
        }
        fetchData();
    },[]);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    console.log(movie);
    return (
        <header className="banner" 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://media.vanityfair.com/photos/59a5849b194a945f056e2778/7:3/w_1435,h_615,c_limit/t-gossip-girl-spotlight-10-17.jpg"
                    )`,
                backgroundPosition: "center center",
            
        }}>
            <div className="banner-contents">
                <h1 className="banner-title">Gossip Girls</h1>

                <div className = "banner-buttons">
                    <button className = "banner-button">Play</button>
                    <button className = "banner-button">My List</button>
                </div>

                <h1 className = "banner-description">Gossip Girl is an American teen drama television series based on the novel series of the same name written by Cecily von Ziegesar. Developed for television by Josh Schwartz and Stephanie Savage, it was broadcast on The CW network for six seasons from September 19, 2007, to December 17, 2012.</h1>
            </div>

            <div className = "banner-fadeBottom">
                
            </div>
        </header>
    );
}

export default Banner