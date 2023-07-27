import './styles.css'
// import { NavLink } from 'react-router-dom';
import { images } from '../../../assets/images';

const HomeCardMusicaContextual = () => {

  return (
    <div className="card-container">
        {/* <NavLink to={`/musicaContextual`}> */}
        <img src={images.contextual} alt="ilustracion" className='card__img' />
        <div className='card__texts'>
          <p className="card__title">Música Contextual</p>
          <p className="card__p">Creamos la playlist perfecta para cualquier situación.</p>
        </div>
    {/* </NavLink> */}
      </div>
  );
}

export default HomeCardMusicaContextual;
