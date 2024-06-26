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
// import Interview from './components/LandingPage/Interview/Interview';
import C from './components/Interview/InterviewDetils/C/C';
import GoToTopButton from './components/LandingPage/GoToTopButton/GoToTopButton';
// import UserLogin from './components/LandingPage/Navbar/UserLogin';
import Signin from './components/LandingPage/Navbar/Signin';
import Signup from './components/LandingPage/Navbar/Signup';
import Dashbord from './components/Authentication/Dashbord';
import RequireAuth from './components/Authentication/RequireAuth';
import UserDashbord from './components/Authentication/UserDashbord';
// import PassLogin from './components/Authentication/Passportjs/PassLogin';
// import Ss from './components/LandingPage/Navbar/Ss';
import Login from './components/LandingPage/Navbar/Login';
import Auth from './components/Authentication/Auth';
import UserProfile from './components/LandingPage/Navbar/UserProfile';
import Blog from './components/Blog/AddBlog';
import Blogs from './components/Blog/Blogs';
import BlogDetails from './components/Blog/BlogDetails';
import AddData from './components/TwelveClass/AddData';
import Compiler from './components/LandingPage/CompilerDiv/Compiler';
import IdeFormatter from './components/OnlineIDE/IdeFormatter';
import ManageBlog from './components/Blog/ManageBlog';
import Managetwelveblog from './components/TwelveClass/Managetwelveblog/Managetwelveblog';
import Edit from './components/Blog/ManageBlog/Edit';
import BlogMain from './components/Blog/BlogMain';
import Categorywise from './components/Blog/BlogCategory/Categorywise';
import BlogBycategory from './components/Blog/BlogBycategory';
import Addimg from './components/Interview/AddImg/Addimg';
import ImageDisplay from './components/Interview/AddImg/ImageDisplay';
import Addinterview from './components/Interview/AddInterview/Addinterview';
import Manageinterview from './components/Interview/Manageinterview/Manageinterview';
import Editinter from './components/Interview/Manageinterview/Editinter';
import Alllanguage from './components/Allcourse/Dashbord/Alllanguage';
import TutorialDetilsFormat from './components/TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import TutorialDetails from './components/TutorialDetails/TutorialDetails';
// import SignupForm from './components/LandingPage/Navbar/SignupForm';

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
  const bgColorClass = darkMode ? 'bg-slate-950' : 'bg-blue-50';


  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <div className={`App ${bgColorClass}`}>

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <GoToTopButton />

        <Routes>

          <Route path='/' element={<InheritApp></InheritApp>}></Route>

          {/* Allcourse ROUTES */}
          <Route path='/allcourse' element={<AllcourseHomePage></AllcourseHomePage>}></Route>
          <Route path='/managelanguage' element={<RequireAuth>
            <Alllanguage />
          </RequireAuth>}></Route>
          <Route path='/language/:name' element={<TutorialDetails />}></Route>



          {/* Blog ROUTES */}
          <Route path='/editblog/:id' element={<RequireAuth>
            <Edit />
          </RequireAuth>}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/addblog' element={<RequireAuth>
            <Blog />
          </RequireAuth>}></Route>
          <Route path='/blogsdetails/:blogid' element={<BlogDetails />}></Route>
          <Route path='/manageblog' element={
            <RequireAuth>
              <ManageBlog />
            </RequireAuth>
          }></Route>
          <Route path="/blogss" exact component={BlogMain} />
          <Route path="/category/:categoryName" component={Categorywise} />



          {/* Userlogin ROUTES */}
          <Route path='/adminlogin' element={<Signin />}></Route>
          <Route path='/usersignup' element={<Signup />}></Route>


          {/* Practice ROUTES */}
          <Route path='/practice' element={<Practice />}></Route>



          {/* Interview ROUTES */}
          <Route path='/interview' element={<InterviewDiv />}></Route>
          <Route path='/interview/:name' element={<C />}></Route>
          <Route path='/c++interview' element={<InterviewDiv />}></Route>
          <Route path='/addimg' element={<Addimg />}></Route>
          <Route path='/imgdisplay' element={<ImageDisplay />}></Route>
          <Route path='/addinterview' element={<RequireAuth>
            <Addinterview />
          </RequireAuth>}></Route>
          <Route path='/manageinterview' element={<Manageinterview />}></Route>
          <Route path='/editinterview/:id' element={<RequireAuth>
            <Editinter />
          </RequireAuth>}></Route>


          {/* Online IDE ROUTES */}
          <Route path='/onlineide' element={<OnlineIDE />}></Route>

          {/* <Route path='/compiler' element={<Compiler />}></Route> */}
          <Route path='/ideformat/:value' element={<IdeFormatter />}></Route>

          {/* Tutorials ROUTES */}
          <Route path='/html' element={<Html />}></Route>
          <Route path='/css' element={<Css></Css    >}></Route>

          {/* Twelve CLass ROUTES */}
          <Route path='/managetwelveblog' element={<RequireAuth>
            <Managetwelveblog />
          </RequireAuth>}></Route>
          <Route path='/firstunite' element={<FirstUnit />}></Route>
          <Route path='/secondunite' element={<SecondUnite />}></Route>
          <Route path='/thirdunite' element={<ThirdUnite />}></Route>
          <Route path='/fourunite' element={<FourUnite />}></Route>
          <Route path='/fiveunite' element={<FiveUnite />}></Route>
          <Route path='/sixunite' element={<SixUnite />}></Route>
          <Route path='/twelveclass' element={<TwelveClass />}></Route>


          {/* Authentication */}
          <Route path='auth' element={<Auth />}></Route>
          <Route path='user' element={<UserProfile />}></Route>
          <Route path='userdashbord' element={<UserDashbord />}></Route>
          <Route path='/userlogin' element={<Login />}></Route>
          <Route path='/dashbord' element={<RequireAuth>
            <Dashbord />
          </RequireAuth>}></Route>
          <Route path='/blogbycategory/:selectedCategory' element={<BlogBycategory />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

