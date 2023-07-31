import "./index.css";
import React from "react";
import { Song_format} from "./song-format";


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

        <Song_format img={"/images/profile-main-album-img-1.jpg"} title={"Song"} artist={"Artist"} />
        <Song_format/>
        <Song_format/>
        <Song_format/>
    </>
  );
};
export default Main;
