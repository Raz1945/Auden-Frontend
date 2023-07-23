import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const CupidoMusical = () => {
  const { token } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [artists, setArtists] = useState([]);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${apiUrl}/flow/songs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching artists:", error);
        setArtists([]);
      }
    };

    fetchArtists();
  }, [apiUrl, token]);

  const handleNextArtist = () => {
    setCurrentArtistIndex((prevIndex) =>
      prevIndex === artists.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePreviousArtist = () => {
    setCurrentArtistIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

    return (
      <>
        <h1>Cupido Musical</h1>
        <div>
          {artists.length === 0 ? (
            <p>No hay artistas disponibles.</p>
          ) : (
            <>
              <h2>{artists[currentArtistIndex].artist}</h2>
              <p>{artists[currentArtistIndex].title}</p>
              <div>
                <button onClick={handlePreviousArtist} disabled={currentArtistIndex === 0}>Anterior</button>
                <button onClick={handleNextArtist} disabled={currentArtistIndex === artists.length - 1}>Siguiente</button>
              </div>
            </>
          )}
        </div>
      </>
    );
  };

export default CupidoMusical;