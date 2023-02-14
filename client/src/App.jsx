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
              <Route
                path="/"
                element={<Home setDarkMode={setDarkMode} darkMode={darkMode} />}
              />
              <Route path="/video/:id" element={<Video />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
