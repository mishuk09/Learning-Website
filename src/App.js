import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShortDetils from './components/ShortDetils/ShortDetils';
import { CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

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
        <div className='darkmode-toggle pt-1'>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            icon={<Brightness4Icon />}
            checkedIcon={<WbSunnyIcon className={darkMode ? 'sunny-dark' : ''} />}
          />
        </div>
        <Navbar />
        <Home />
        <ShortDetils></ShortDetils>
      </div>
    </ThemeProvider>
  );
}

export default App;