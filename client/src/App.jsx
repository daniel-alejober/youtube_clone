import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyle } from "./styles/globalStyles";
import Home from "./views/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home setDarkMode={setDarkMode} darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App;
