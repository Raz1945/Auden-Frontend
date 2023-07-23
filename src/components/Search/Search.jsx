import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Search = () => {
  const { token } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const debounceDelay = 200;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/flow/songs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: searchTerm,
          },
        });
        setSongs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching songs:', error);
        setSongs([]);
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchSongs();
    }, debounceDelay);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, apiUrl, token]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <h1>Buscador</h1>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Qué desea escuchar?'
        />
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {songs.length === 0 ? (
              <li>No hay canciones</li>
            ) : (
              songs.map((song, index) => (
                <li key={index}>
                  <i>{song.title}</i> -{song.artist}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
