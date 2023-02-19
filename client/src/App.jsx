import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Container, Main } from "./styles/appStyles";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Video from "./views/Video";
import SignIn from "./views/SignIn";
import Search from "./views/Search";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home type="random" />} />
              <Route path="/trends" element={<Home type="trend" />} />
              <Route path="/subscriptions" element={<Home type="sub" />} />
              <Route path="/video/:id" element={<Video />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
