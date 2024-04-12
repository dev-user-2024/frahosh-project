import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TestDone from './Routes/test/test-done/testDone';
import TestDone from "./pages/Routes/test/test-done/testDone";
import TestResult from "./pages/Routes/test/test-done/testResult";
import MainContext from "./context";
import { useState, useEffect } from "react";
import MainLayout from "./layout/Mainlayout";
import Sidebar from "./Components/sidebar/Sidebar";
import AppbarContainer from "./Components/navbar/AppbarContainer";
import { Container, Grid } from "@mui/material";
import {
  Routes,
  Route,
  useLocation,
  useRoutes,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Routes/Home/home";
import Coins from "./pages/Routes/coins/coins";
import Quizinfopage from "./pages/Routes/quiz-info/quiz-info";
import Teststart from "./pages/Routes/test-start/test-start";
import Testlist from "./pages/Routes/tests-list/test-list";
import Testquestion from "./pages/Routes/test-question/test-question";
import Sessions from "./pages/Routes/sessions/sessions";
import Listsounds from "./pages/Routes/Sounds/list";
import Musicpage from "./pages/Routes/Sounds/Music/musicpage";
import Voicepage from "./pages/Routes/Sounds/voices/voicespage";
import Gallery from "./pages/Routes/Gallery/gallery/gallery";
import Galleryategories from "./pages/Routes/Gallery/categories-page/categories";
import Classbook from "./pages/Routes/classbook/classbook";
import Disipline from "./pages/Routes/dicipline/dicipline";
import ForgottenPass from "./Components/forgottenPassword/forgottenPass";
import Notification from "./pages/Routes/notification/notification";
import SurveyInfo from "./pages/Routes/survey/surveyInfo";
import SurveyQuestion from "./pages/Routes/serveyQuestion/surveyQuestion";
import About from "./pages/Routes/about/about";
import Tickets from "./pages/Routes/ticket/Tickets";
import NewTickets from "./pages/Routes/ticket/NewTickets";
import SolvedTickets from "./pages/Routes/ticket/SolvedTickets";
import HomeWork from "./pages/Routes/homeworks/homeworks";
import Jozveh from "./pages/Routes/handout/jozveh/jozveh";
import Handout from "./pages/Routes/handout/handout";
import Reportcard from "./pages/Routes/reportcard/reportcard";
import ChartAverage from "./pages/Routes/test-chart/average";
import TestChart from "./pages/Routes/test-chart/test_chart";
import Score from "./pages/Routes/score/score";
import PlaningCalendar from "./Components/planingClaendar/PlaningCalendar";
import Podcast from "./pages/Routes/podcast/Podcast";
import PodcastDetails from "./Components/podcastInfo/PodcastDetails";
import Setting from "./pages/Routes/setting/Setting";
import ForgetPassword from "./pages/Routes/ForgetPassword/ForgetPassword";
import ForgottenPass2 from "./Components/forgottenPassword/forgottenPass2"
import Profile from "./pages/Routes/studentProfile/profile";
import EditProfile from "./pages/Routes/studentProfile/editProfile";
import Dashboard from "./pages/Routes/dashboard/dashboard";
import TestAnalysis from "./pages/Routes/testanalysis/TestAnalysis";
import ReportCards from "./Components/testanalysis/ReportCards";
import Login from "./pages/Routes/login-page/login.component";
import SignIn from "./pages/Routes/signup-page/Signup.component.jsx";
import RollCall from "./pages/Routes/rollcall/RoolCall.jsx";
import TuitionPage from "./pages/Routes/Tuition/TuitionPage";
import HomeworkDone from "./Components/homeworks/HomeworkDone/HomeworkDone";
import HomeworkeDoing from "./Components/homeworks/HomeworkeDoing/HomeworkeDoing";
import HomeworkeNotDone from "./Components/homeworks/HomeworkeNotDone/HomeworkeNotDone";
import Solving from "./pages/Routes/solving/Solving";
import { useSelector } from "react-redux";
import ValidationCode from "./Components/signup/ValidationCode";
import ForgetPassValidation from "./Components/forgottenPassword/ForgetPassValidation.jsx";
import Schedule from "./pages/Routes/schedule/schedule";
// redux
// import { Provider } from "react-redux";
import ScheduleConsultant from "./pages/Routes/schedule-consultant/scheduleConsultant";
import Consultant from "./pages/Routes/consultant/consultant";
import ConsultantDetail from "./pages/Routes/consultant/consultantDetail";
import ConsultantReservation from "./pages/Routes/consultant/consultantReservation";
import ConsultantSession from "./pages/Routes/consultant/consultantSession";
import Timer from "./pages/Routes/tools/timer/timer";
import Calculator from "./pages/Routes/tools/calculator/calculator";
import Countdown from "./pages/Routes/tools/Countdown/countdown";
import Percentage from "./pages/Routes/tools/percentage/percentage";
import Lightner from "./pages/Routes/tools/lightner/lightner";
import Moshtagh from "./pages/Routes/tools/moshtagh/moshtagh";
import Matrix from "./pages/Routes/tools/matrix/matrix";
import Planning from './pages/Routes/planning/planning';
// redux
import { Provider } from "react-redux";
// import store from "./redux/store";
function Nopage() {
  return (
    <div>
      <h3>404</h3>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState("light");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleToggleMode = () => {
    setMode((prev) => (prev == "light" ? "dark" : "light"));
  };

  const routeElement = (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignIn />} />
      <Route path="Coins" element={<Coins />} />
      <Route path="teststart/:id" element={<Quizinfopage />} />
      {/* <Route path="Teststart" element={<Teststart />} /> */}
      <Route path="testlist" element={<Testlist />} />
      <Route path="testquestion/:id/:time/:title" element={<Testquestion />} />
      <Route path="sounds" element={<Listsounds />} />
      <Route path="music" element={<Musicpage />} />
      <Route path="voice" element={<Voicepage />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="gallerylist" element={<Galleryategories />} />
      <Route path="sessions" element={<Sessions />} />
      <Route path="classbook" element={<Classbook />} />
      <Route path="disipline" element={<Disipline />} />
      <Route path="forgottenpassword" element={<ForgottenPass />} />
      <Route path="notifications" element={<Notification />} />
      <Route path="survey" element={<SurveyInfo />} />
      <Route path="surveyquestion/:id" element={<SurveyQuestion />} />
      <Route path="about" element={<About />} />
      <Route path="tickets" element={<Tickets />} />
      <Route path="newtickets" element={<NewTickets />} />
      <Route path="solvedtickets" element={<SolvedTickets />} />
      <Route path="calendar" element={<PlaningCalendar />} />
      <Route path="test-done/:id" element={<TestDone />} />
      <Route path="test_chart/:item" element={<TestChart />} />
      <Route path="test_result/:id" element={<TestResult />} />
      <Route path="score" element={<Score />} />
      <Route path="homework" element={<HomeWork />} />
      <Route path="homework-done/:id" element={<HomeworkDone />} />
      <Route path="homework-doing/:id" element={<HomeworkeDoing />} />
      <Route path="homework-not-done/:id" element={<HomeworkeNotDone />} />
      <Route path="handout/:jozveh/:id" element={<Jozveh />} />

      <Route path="handout" element={<Handout />} />
      <Route path="handout/:jozveh" element={<Jozveh />} />
      <Route path="reportcard" element={<Reportcard />} />
      <Route path="podcast" element={<Podcast />} />
      <Route path="podcast/:id" element={<PodcastDetails />} />
      <Route path="setting" element={<Setting />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="reset-pass" element={<ForgottenPass2 />} />
      <Route path="profile" element={<Profile />} />
      <Route path="editprofile" element={<EditProfile />} />
      <Route path="rollcall" element={<RollCall />} />
      <Route path="tuition" element={<TuitionPage />} />
      <Route path="testanalysis" element={<TestAnalysis />} />
      <Route path="reportcards" element={<ReportCards />} />
      <Route path="validation-code" element={<ValidationCode />} />
      <Route path="solving" element={<Solving/>} />
      <Route path="scheduleconsultant" element={<ScheduleConsultant />} />
      <Route path="consultant" element={<Consultant />} />
      <Route path="consultant/:id" element={<ConsultantDetail />} />
      <Route path="consultant/:id/:date" element={<ConsultantReservation />} />
      <Route path="consultantsession" element={<ConsultantSession />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="tools/timer/*" element={<Timer />} />
      <Route path="tools/Calculator/*" element={<Calculator />} />
      <Route path="tools/countdown/*" element={<Countdown />} />
      <Route path="tools/percentage/*" element={<Percentage />} />
      <Route path="tools/lightner/*" element={<Lightner />} />
      <Route path="tools/moshtagh/*" element={<Moshtagh />} />
      <Route path="tools/matrix/*" element={<Matrix />} />
      <Route path="tools/percentage/*" element={<Percentage />} />
      <Route path='planning' element={<Planning />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  );

  const [fullscreen, setFullscreen] = useState(false);
  const currentLocation = useLocation();
  const fullscreenpages = ["/login", "/signup", "/forgottenpassword", "/reset-pass"];
  useEffect(() => {
    // if (!auth.token && currentLocation.pathname !== "/signup" ) navigate("/login")
    fullscreenpages.includes(currentLocation.pathname)
      ? setFullscreen(true)
      : setFullscreen(false);
  });
  return (
    //  <Provider store={store}>
    <div className="App">
      <MainContext.Provider
        value={{
          handleToggleMode,
          mode,
          setDrawerOpen,
          drawerOpen,
        }}
      >
        <MainLayout>
          {fullscreen ? (
            <Container> {routeElement}</Container>
          ) : (
            <>
              <Grid item md={3} lg={2}>
                <Sidebar />
              </Grid>
              <Grid
                item
                overflow={{ Y: "scroll" }}
                xs={12}
                md={9}
                lg={10}
                sx={{ px: 2 }}
              >
                <AppbarContainer />
                {routeElement}
              </Grid>
            </>
          )}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </MainLayout>
      </MainContext.Provider>
    </div>
    // </Provider>
  );
}

export default App;
