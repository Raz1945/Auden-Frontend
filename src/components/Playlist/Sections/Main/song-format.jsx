import React from "react";

function Song_format(prop) {
  return (
    <>
      <button className="main__playlist-song-wrapper">
        <div className="main__playlist-song">
          <img className="main__playlist-song-img" src={prop.img} alt="" />
          <div className="main__playlist-song-text-conteiner">
            <h2 className="">{prop.title}</h2>
            <p>{prop.artist}</p>
          </div>
        </div>
        <img
          className="main__playlist-copy"
          src="\images\playlist-header-ham.svg"
        />
      </button>
    </>
  );
}

export { Song_format };
