import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Musica Ya</h1>
      <div>
        <ul>
          <li>
            <Link to={`/cupidoMusical`}>Cupido</Link>
          </li>
          <li>
            <Link to={`/musicaContextual`}>Musica Contextual</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;