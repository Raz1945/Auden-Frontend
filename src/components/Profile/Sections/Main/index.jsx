import "./index.css";
import React from "react";

export const Main = () => {
  return (
    <>
      <main className="main__profile-wrapper">
        <div className="main__conteiner">
          <h2 className="main__title">Mis Playlists</h2>
          <hr className="main__divider-bar" />
          <button className="main__playlist-btn">Crear Playlist</button>
        </div>
        <div className="main__profile-album-conteiner" >
          <button className="main__profile-btn">
            <img className="main_profile-playlist-img" src="\images\profile-main-album-img-1.jpg" alt="" />
            <h3 className="">Me fui de gira Mabel</h3>
            <p>LuciVaz, mara_pg</p>
          </button>
          <button className="main__profile-btn">
            <img className="main_profile-playlist-img" src="\images\profile-main-album-img-2.jpeg" alt="" />
            <h3 className=""></h3>
            <p>mara_pg</p>
          </button>
        </div>
      </main>
    </>
  );
};
export default Main;
