import { useState } from 'react';
import './App.css';
import Navbar from './components/LandingPage/Navbar/Navbar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/LandingPage/Footer/Footer';

import AllcourseHomePage from './components/Allcourse/AllcourseHomePage';
import { Route, Routes } from 'react-router-dom';
import InheritApp from './InheritApp';
import TutorialDetails from './components/TutorialDetails/TutorialDetails';
import Css from './components/TutorialDetails/Css/Css';
import Html from './components/TutorialDetails/Html/Html';
import TwelveClass from './components/TwelveClass/TwelveClass';

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
  const tutorials = [
    {
      id: 1,
      headline: 'HTML Basics',
      details: 'Learn the fundamentals of HTML.',
      articleTitle: 'Introduction to HTML',
      articleContent: 'This article covers the basics of HTML.',
    },
    // Add more tutorial objects as needed
  ];


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />



        <Routes>
          <Route path='/' element={<InheritApp></InheritApp>}></Route>
          {/* <Route path='/html' element={<TutorialDetails></TutorialDetails>}></Route> */}
          <Route path='/html' element={<Html />}></Route>
          <Route path='/css' element={<Css></Css    >}></Route>
          <Route path='/twelveclass' element={<TwelveClass />}></Route>
          <Route path='/allcourse' element={<AllcourseHomePage></AllcourseHomePage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;