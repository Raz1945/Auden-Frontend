import { smIcons } from '../../../assets/icons.js';
import '../Home.header/styles.css'

const HomeHeader = () => {

  return (
    <div className='header-container'>
      <h1 className='header__title'>Música ya</h1>
      <div className='header__btn'>
        <img src={smIcons.history.inactive} alt="history" className='header__btn-history' />
        <img src={smIcons.bell.activeTrue} alt="notification" className='header__btn-bell' />
      </div>
    </div>
  );
}

export default HomeHeader;
