import HomeHeader from "./Home.header/Home.header";
import HomeCardsContainers from "./Home.cards.containers/Home.cards.containers";
import HomeCardCupidoMusical from "./Home.card.cupidoMusical/Home.card.cupidoMusical";
import HomeCardMusicaContextual from "./Home.card.musicaContextual/Home.card.musicaContextual";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeCardsContainers>
        <HomeCardCupidoMusical />
        <HomeCardMusicaContextual />
      </HomeCardsContainers>
    </>
  );
}

export default Home;