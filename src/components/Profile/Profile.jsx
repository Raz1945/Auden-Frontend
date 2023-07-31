import AppContainer from "../Others/AppContainer/AppContainer";
import Navbar from "../Others/Navbar/Navbar";
import Header from "./Sections/Header";
import { Main } from "./Sections/Main";
import "./index.css";

function Profile () {


return (
    <>
      <AppContainer>
        <Header/>
        <Main/>
        <Navbar/>
      </AppContainer>
    </>
  );
}

export default Profile;