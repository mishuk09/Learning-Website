import { useState } from 'react';
import './App.css';
import Navbar from './components/LandingPage/Navbar/Navbar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/LandingPage/Footer/Footer';
import AllcourseHomePage from './components/Allcourse/AllcourseHomePage';
import { Route, Routes } from 'react-router-dom';
import InheritApp from './InheritApp';
import Css from './components/TutorialDetails/Css/Css';
import Html from './components/TutorialDetails/Html/Html';
import TwelveClass from './components/TwelveClass/TwelveClass';
import FirstUnit from './components/TwelveClass/Ict/Units/FirstUnit/FirstUnit';
import SecondUnite from './components/TwelveClass/Ict/Units/SecondUnit/SecondUnite';
import ThirdUnite from './components/TwelveClass/Ict/Units/ThirdUnit/ThirdUnite';
import FourUnite from './components/TwelveClass/Ict/Units/FourUnit/FourUnite';
import FiveUnite from './components/TwelveClass/Ict/Units/FiveUnit/FiveUnite';
import SixUnite from './components/TwelveClass/Ict/Units/SixUnit/SixUnite';
import OnlineIDE from './components/OnlineIDE/OnlineIDE';
import InterviewDiv from './components/Interview/InterviewDiv';
import Practice from './components/Practice/Practice';
import Interview from './components/LandingPage/Interview/Interview';
import C from './components/Interview/InterviewDetils/C/C';
import GoToTopButton from './components/LandingPage/GoToTopButton/GoToTopButton';
import UserLogin from './components/LandingPage/Navbar/UserLogin';
import Signin from './components/LandingPage/Navbar/Signin';
import Signup from './components/LandingPage/Navbar/Signup';
import Dashbord from './components/Authentication/Dashbord';

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
        <GoToTopButton />


        <Routes>
          <Route path='/' element={<InheritApp></InheritApp>}></Route>

          {/* Authentication */}

          <Route path='/dashbord' element={<Dashbord />}></Route>

          {/* Userlogin ROUTES */}
          {/* <Route path='/userlogin' element={<UserLogin />}></Route> */}
          <Route path='/userlogin' element={<Signin />}></Route>
          <Route path='/usersignup' element={<Signup />}></Route>


          {/* ALLCourse ROUTES */}
          <Route path='/allcourse' element={<AllcourseHomePage></AllcourseHomePage>}></Route>

          {/* Practice ROUTES */}
          <Route path='/practice' element={<Practice />}></Route>
          {/* Interview ROUTES */}
          <Route path='/interview' element={<InterviewDiv />}></Route>
          <Route path='/cinterview' element={<C />}></Route>
          <Route path='/c++interview' element={<InterviewDiv />}></Route>

          {/* Online IDE ROUTES */}
          <Route path='/onlineide' element={<OnlineIDE />}></Route>

          {/* Tutorials ROUTES */}
          <Route path='/html' element={<Html />}></Route>
          <Route path='/css' element={<Css></Css    >}></Route>

          {/* Twelve CLass ROUTES */}
          <Route path='/firstunite' element={<FirstUnit />}></Route>
          <Route path='/secondunite' element={<SecondUnite />}></Route>
          <Route path='/thirdunite' element={<ThirdUnite />}></Route>
          <Route path='/fourunite' element={<FourUnite />}></Route>
          <Route path='/fiveunite' element={<FiveUnite />}></Route>
          <Route path='/sixunite' element={<SixUnite />}></Route>
          <Route path='/twelveclass' element={<TwelveClass />}></Route>



        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;