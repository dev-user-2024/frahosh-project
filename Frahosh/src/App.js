import { Routes, Route } from "react-router-dom";
import {useState} from "react"
import Home from "./routes/home/home.component";
import BigBlueButtonPage from "./routes/big-blue-button-page/big-blue-button-page.component"
import PodcastInfo from "./routes/best-books-page/best-books.commponent";
import Counselingpage from "./routes/Counseling-page/Counseling-page.component"
import HomeHeader2 from "./components/home-header-slider2/home-header-slider2.component"
import School from "./routes/school-page/school.compnent";
import Podcastpage from "./routes/podcast-page/podcast.component"
import Question from "./routes/Question/Question.component"
import Testpage from "./routes/testpage/testpage.component"
import PA from "./routes/PA/PA"
import Report from "./routes/report-page/report"
import Contactus from "./routes/contact-us/contact-us"
import Careers from "./routes/Careers/careers"
import Request from "./routes/request/request"
import Exampage from "./routes/exampage/exampage.component"
import Login from "./routes/login-page/login.component";
import SignOut from "./routes/signout-page/signout.component";
import P404 from "./components/404/404";
import LoadingPage from "./components/loader/loader"
import Schedule from "./routes/schedule/schedule";
import OnlineExam from "./routes/Online-Exam/onlineExam";
import Solving from "./routes/Solving/Solving";
import DocumentList from "./routes/Document/Document-list/DocumentList";
import DocumentPage from "./routes/Document/Document/Document";
import Smartening from "./routes/smartening/smartening";
import AboutUs from "./routes/about-us/about-us";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/index";
import MainContext from "./context/index";
import "./index.css"


const Test = () => {
  return (
    <HomeHeader2/>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('light');

  
  const theme = mode === "dark" ? darkTheme : lightTheme;

  window.addEventListener("load", (event) => {
    setLoading(false);
  });
  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
};

  return (
     <div className={mode == "light" ? "light-body" : "dark-body"}>
     <MainContext.Provider
     value={{
       handleThemeChange,
   }}
     >
     <ThemeProvider theme={theme}>
     <Routes>
     <Route index element={<Home />} />
     <Route path="*" element={<P404/>}/>
     <Route path="Counseling" element={<Counselingpage/>}/>
     <Route path="Big-Blue-Button" element={<BigBlueButtonPage/>}/>
     <Route path="School" element={<School/>} />
     <Route path="podcast/:id" element={<PodcastInfo/>}/>
     <Route path="Podcast" element={<Podcastpage/>}/>
     <Route path="question" element={<Question />} />
     <Route path="testpage" element={<Testpage />} />
     <Route path="exampage" element={<Exampage />} />
     <Route path="PA" element={<PA />} />
     <Route path="contact-us" element={<Contactus />} />
     <Route path="careers" element={<Careers />} />
     <Route path="request" element={<Request />} />
     <Route path="report" element={<Report />} />
     <Route path="login" element={<Login />} />
     <Route path="signout" element={<SignOut/>} />
     <Route path="schedule" element={<Schedule />}  />
     <Route path="Online-Exame" element={<OnlineExam />} /> 
     <Route path="Solving" element={<Solving />} /> 
     <Route path="Document-list" element={<DocumentList />} />
     <Route path="Document/:id"  element={<DocumentPage />}/>
     <Route path="Smartening" element={<Smartening />} /> 
     <Route path="about-us" element={<AboutUs />} />
   </Routes> 
     </ThemeProvider>
     </MainContext.Provider>
     </div>
  );
};

export default App;
