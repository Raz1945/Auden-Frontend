import "./index.css";
import React from "react";
import { Song_format} from "./song-format";
//import InfiniteScrollC from "../../infiniteScrollC"; <InfiniteScrollC/>

/* import { useState, useEffect } from "react";
const [currentPlaylist, setCurrentPlaylist] = useState([]);
const [songs, setSongs] = useState([]);
const [qualities, setQualities] = useState([]);

const getPlaylist = async () => {
  try{
  setIsLoading(true)
  const response = await fetch(
    `http://localhost:3005/ping2`
  );
  const data = await response.json()
  setSongs(data.results);
    
  const qualitiesResponseData = await Promise.all(
    data.results.map(async () => {
        const response = await fetch(`${}`);
        return await response.json();
    })
);
setQualities(qualitiesResponseData);
} catch (error){
  return <Error to="/error"/>
} finally {
  setIsLoading(false)
} 

};

useEffect(() => {
  getPlaylist();
}, [currentPlaylist]); */



export const Main = () => {
  return (
    <>
      <img className="main_playlist-album-img" src="\images\profile-main-album-img-2.jpeg" alt="" />

        <div className="main__playlist-icons-wrapper" >
          <div className="main__playlist-icons-conteiner" >
          <button className="main__profile-btn">          
            <img className="main__playlist-logo-btn" src="\logo-small.svg" alt="" />
          </button>
            <img className="main__playlist-verified" src="\images\playlist-main-verified.svg" alt="" />
            <img className="" src="\images\playlist-main-share-icon.svg" alt="" />
          </div>
          <div className="main__playlist-icons-conteiner" > 
            <p>1h 17m</p>
            <img className="main__playlist-verified" src="\images\playlist-main-clock.svg" alt="" />
          </div>
        </div>
 
        <div  className="main__playlist-icons-wrapper" >
          <div className="main__playlist-icons-conteiner" > 
            <img className="main__playlist-copy" src="\images\playlist-main-copy.svg" alt="" />
            <p className="main__playlist-text">Crear Copia</p>
          </div>

          <div className="main__playlist-icons-conteiner" > 
            <img className="main__playlist-copy" src="\images\playlist-main-shuffle.svg" alt="" />
            <button className="main__profile-btn">
              <img src="\images\playlist-main-play-btn.svg" alt="" />
            </button>
          </div>
        </div>

        <Song_format/>
        
    </>
  );
};
export default Main;
