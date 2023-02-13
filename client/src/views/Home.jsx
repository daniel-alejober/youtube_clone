import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { Container, Wrapper, Main } from "../styles/appStyles";

const Home = ({ setDarkMode, darkMode }) => {
  return (
    <Container>
      <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          <h1>Videos</h1>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Home;
