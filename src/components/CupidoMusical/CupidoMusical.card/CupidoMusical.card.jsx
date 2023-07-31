import '../CupidoMusical.card/styles.css'

const CupidoMusicalCard = ({ src, alt, next }) => {
  return (
    <>
        <div className={`cover ${next}`}>
          <img
            src={src}
            alt={alt}
          />
        </div>
    </>
  );
}

export default CupidoMusicalCard;