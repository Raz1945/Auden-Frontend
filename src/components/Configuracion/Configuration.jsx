import AppContainer from "../Others/AppContainer/AppContainer";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import { Main } from "./Sections/Main";
import "./index.css";

function Configuration () {

return (
    <>
      <AppContainer>
        <Header/>
        <Main/>
        <Footer/>
      </AppContainer>
    </>
  );
} 

export default Configuration;