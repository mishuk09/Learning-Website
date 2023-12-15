import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShortDetils from './components/ShortDetils/ShortDetils';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Childdiv from './components/Childdiv/Childdiv';
import Library from './components/Library/Library';
import Interview from './components/Interview/Interview';
import Job from './components/Job/Job';
import Article from './components/Article/Article';
import Dsaproblems from './components/Dsaproblems/Dsaproblems';
import Footer from './components/Footer/Footer';
import GoToTopButton from './components/GoToTopButton/GoToTopButton';

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
        <GoToTopButton></GoToTopButton>
        <ShortDetils></ShortDetils>
        <Childdiv></Childdiv>
        <Library></Library>
        <Interview></Interview>
        <Job></Job>
        <Article></Article>
        <Dsaproblems></Dsaproblems>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;