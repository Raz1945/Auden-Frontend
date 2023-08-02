import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './estilo.css';

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
    const data = {
      selectedOption,
      selectedGenres,
    };
    console.log(data); 
  };

  return (
    <div>
      <div>
          <NavLink to='/inicio' className='arrow_position_7'>
            ←
          </NavLink>
          <p className='musicacontextual_text'>Musica Contextual</p>
      </div>
      <div className='selects_1'>
        <label htmlFor="selectOptions" className='labels_select_text'>¿Cuál es la ocasión?</label>
        <select id="selectOptions" className='select_barra' value={selectedOption} onChange={handleSelectChange}>
          <option value="">Actividad</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className='selects_1'>
        <label htmlFor="" className='labels_select_text'>¿Cómo te sientes?</label>
        <select name="" id="" className='select_barra'>
          <option value="">Estado de Ánimo</option>
        </select>
      </div>
      <div className='selects_1'>
        <label htmlFor="" className='labels_select_text'>¿Cómo esta el clima?</label>
        <select name="" id="" className='select_barra'>
          <option value="">clima</option>
        </select>
      </div>
      
      <div className='box_selec_btn'>
        <h3 className='generos_title'>Selecciona hasta 2 géneros:</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(4)].map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
            {[...Array(5)].map((_, buttonIndex) => {
              const genreIndex = rowIndex * 4 + buttonIndex;
              const buttonLabel = buttonLabels[genreIndex];

              const isSelected = selectedGenres.includes(buttonLabel); 
              const buttonClass = isSelected ? 'selected_button' : 'noSelected'; 

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
      </div>
      <button className='crearplaylist' onClick={handleEnviarDatos}>Crear Playlist</button>
    </div>
  );
};

export default MusicaContextual;