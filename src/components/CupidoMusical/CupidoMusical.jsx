import './styles.css';
import { smIcons } from '../../assets/icons';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

import CupidoMusicalHeader from './CupidoMusical.header/CupidoMusical.header';
import AppContainer from '../Others/AppContainer/AppContainer';
import ButtonStandar from '../Others/Buttonstandar/ButtonStandar';
import CupidoMusicalCard from './CupidoMusical.card/CupidoMusical.card';
import CupidoMusicalButton from './CupidoMusicalButton/CupidoMusicalButton';

const CupidoMusical = () => {
  const { token } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

  const [likeList, setLikeList] = useState([]); // Estado que almacena artistas con like
  const [artists, setArtists] = useState([]); // Estado que almacena todos los artistas disponibles
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0); // Estado que almacena el índice del artista actual
  const [likedArtists, setLikedArtists] = useState([]); // Estado que almacena los artistas con like
  const [availableArtists, setAvailableArtists] = useState([]); // Estado que almacena los artistas disponibles para mostrar

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${apiUrl}/flow/artists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArtists(response.data);
      } catch (error) {
        console.error('Error fetching artists:', error);
        setArtists([]);
      }
    };

    fetchArtists();
  }, [apiUrl, token]);

  useEffect(() => {
    // Filtrar los artistas disponibles para mostrar aquellos que no están en la lista de "likes"
    const filteredArtists = artists.filter((artist) => !likedArtists.includes(artist));
    setAvailableArtists(filteredArtists);

    console.log('Artistas con like:', likedArtists);
  }, [artists, likedArtists]);

  const handleLikeArtist = () => {
    if (likeList.length >= 6) {
      alert('¡Has alcanzado el límite de 6 likes!');
      return;
    }
    const currentArtist = availableArtists[currentArtistIndex];
    setLikeList((prevLikes) => [...prevLikes, currentArtist]); // Agregar el artista actual a la lista de "likes"
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % availableArtists.length); // Avanzar al siguiente artista disponible o volver al inicio
    setLikedArtists((prevLikedArtists) => [...prevLikedArtists, currentArtist]); // Mover el artista actual a la lista de artistas con like
  };

  const handleDislikeArtist = () => {
    setCurrentArtistIndex((prevIndex) => (prevIndex + 1) % availableArtists.length);
  };

  const handleRewindArtist = () => {
    // Verificar si hay algún artista en la lista de likes antes de intentar eliminar
    if (likeList.length === 0) {
      console.log('No hay artistas en la lista de likes para remover.');
      return;
    }

    // Obtener el último artista de la lista de likes
    const lastLikedArtist = likeList[likeList.length - 1];

    // Remover el último artista de la lista de likes
    setLikeList((prevLikes) => prevLikes.slice(0, -1));
    setLikedArtists((prevLikedArtists) => prevLikedArtists.filter((artist) => artist !== lastLikedArtist));
    console.log('Se removió el artista:', lastLikedArtist);
  };

  const handleCreatePlaylist = () => {
    alert('Se crea la playlists')
  }
  return (
    <>
      <AppContainer>
        {availableArtists.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          <>
            <CupidoMusicalHeader />

            <div className="cupido-container">
              <CupidoMusicalCard
                src={availableArtists[currentArtistIndex]?.imageURL}
                alt={availableArtists[currentArtistIndex]?.artist}
              />
              <CupidoMusicalCard
                src={availableArtists[currentArtistIndex + 1]?.imageURL}
                alt={availableArtists[currentArtistIndex + 1]?.artist}
                next={"next"}
              />
              <div className='cupido__btn'>
                <CupidoMusicalButton
                  onClick={handleLikeArtist}
                  img={smIcons.like}
                  alt={"like"}
                />
                <CupidoMusicalButton
                  onClick={handleDislikeArtist}
                  img={smIcons.cross}
                  alt={"Dislike"}
                />
              </div>
              <h2 className='cupido__title'>{availableArtists[currentArtistIndex]?.artist}</h2>
            </div>

            <div className='cupido-matches-container'>
              <span className='cupido__matches-sub_title'>Matches actuales:</span>
              <div className='cupido__matches'>
                <CupidoMusicalButton
                  onClick={handleRewindArtist}
                  img={smIcons.rewind}
                  alt={"history"}
                />
              </div>
            </div>

            <div className='cupido-matches-likes'>
              {likeList.map((artist, index) => (
                <div key={index} className="miniCover">
                  <img
                    src={artist?.imageURL}
                    alt={artist?.artist}
                  />
                </div>
              ))}
            </div>

            <ButtonStandar
              text={"Crear Playlist"}
              state={likeList.length === 6 ? "btnactive" : "btndesactive"}
              onClick={handleCreatePlaylist}
            />
          </>
        )}
      </AppContainer >
    </>
  );
};

export default CupidoMusical;