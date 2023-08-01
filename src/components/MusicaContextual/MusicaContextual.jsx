import React, { useState } from 'react';
//import PlaylistGenerada from './playlist';

const MusicaContextual = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const options = [
    'Ejercicio Fisicoción1',
    'Limpieza',
    'Celebracion',
    'Dormir',
    'Meditar',
    'Social',
    'Estudiar',
    'Relajacion',
    'Viajando',
  ];

  const buttonLabels = [
    'Rock',
    'Country',
    'Soul',
    'Jazz',
    'Blues',
    'Hip-Hop',
    'Pop',
    'Reaggae',
    'Folk',
    'R&B',
    'Clasico',
    'Alternativo',
    'Ambiente',
    'EDM',
    'Electronica',
    'Disco',
    'New Age',
    'Punk',
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = (buttonLabel) => {
    // Verificar si el botón ya está seleccionado
    if (selectedGenres.includes(buttonLabel)) {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== buttonLabel));
    } else {
      // Verificar si se pueden seleccionar más géneros
      if (selectedGenres.length < 2) {
        setSelectedGenres([...selectedGenres, buttonLabel]);
      } else {
        alert('Solo puedes seleccionar hasta 2 géneros.');
      }
    }
  };

  const handleEnviarDatos = () => {
    // Enviar los datos seleccionados a la API
    const data = {
      selectedOption,
      selectedGenres,
    };
    console.log(data); 
  };

  return (
    <div>
      <h3>Musica Contextual</h3>
      <label htmlFor="selectOptions">Selecciona una opción:</label>
      <select id="selectOptions" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Seleccionar</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <h3>Selecciona hasta 2 géneros:</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(4)].map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
            {[...Array(5)].map((_, buttonIndex) => {
              const genreIndex = rowIndex * 4 + buttonIndex;
              const buttonLabel = buttonLabels[genreIndex];

              const isSelected = selectedGenres.includes(buttonLabel); 
              const buttonClass = isSelected ? 'selected-button' : ''; 

              return (
                <button
                  key={buttonIndex}
                  style={{ marginRight: '10px' }}
                  onClick={() => handleButtonClick(buttonLabel)}
                  className={buttonClass}
                >
                  {buttonLabel}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <button onClick={handleEnviarDatos}>Crear Playlist</button>
    </div>
  );
};

export default MusicaContextual;