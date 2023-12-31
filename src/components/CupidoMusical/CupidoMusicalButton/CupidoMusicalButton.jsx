import './styles.css'

const CupidoMusicalButton = ({ onClick, img, alt }) => {
  return (
    <>
      <span onClick={onClick} className='cupido__btn-container'>
        <img src={img} alt={alt} />
      </span>
    </>
  );
}

export default CupidoMusicalButton;