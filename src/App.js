import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShortDetils from './components/ShortDetils/ShortDetils';
import { CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Childdiv from './components/Childdiv/Childdiv';
import Library from './components/Library/Library';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <ShortDetils></ShortDetils>
        <Childdiv></Childdiv>
        <Library></Library>
      </div>
    </ThemeProvider>
  );
}

export default App;