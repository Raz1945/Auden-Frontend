import './styles.css'
// import { NavLink } from 'react-router-dom';
import { images } from '../../../assets/images';

const HomeCardCupidoMusical = () => {

  return (
    <div className="card-container">
        {/* <NavLink to={`/cupidoMusical`}> */}
        <img src={images.cupido} alt="ilustracion" className='card__img' />
        <div className='card__texts'>
          <p className="card__title">Cupido Musical</p>
          <p className="card__p">Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
        </div>
    {/* </NavLink> */}
      </div>
  );
}

export default HomeCardCupidoMusical;
