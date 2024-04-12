import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Private from "./privateroute";
import Dashboard from "../pages/dashboard/dashboard";
import Tickets from "../pages/ticket/Tickets";
import NewTicket from "../pages/ticket/NewTicket";
import TicketSolved from "../pages/ticket/TicketSolved";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ValidationCode from "../pages/signup/ValidationCode";
import ForgottenPass from "../pages/forgottenPassword/forgottenPass";
import ForgottenPass2 from "../pages/forgottenPassword/forgottenPass2";
import Exams from "../pages/exams/Exams";
import TestInfo from "../pages/exams/TestInfo";
import TsetResult from "../pages/exams/TsetResult";
import ExamPaper from "../pages/exams/ExamPaper";
import AverageChart from "../pages/exams/AverageChart";
import MiddelChart from "../pages/exams/MiddelChart";
import Scores from "../pages/scores/Scores";
import Sessions from "../pages/sessions/Sessions";
import RollCall from "../pages/rollcall/RollCall";
import HomeWork from "../pages/homework/HomeWork";
import HomeworkDone from "../pages/homework/HomeworkDone";
import HomeworkNoteDone from "../pages/homework/HomeworkNoteDone";
import HomeworkInProgress from "../pages/homework/HomeworkInProgress";
import Handout from "../pages/handout/Handout";
import HandoutDitails from "../pages/handout/HandoutDitails";
import Gallerylist from "../pages/gallery/Gallerylist";
import Gallery from "../pages/gallery/Gallery";
import Music from "../pages/music/Music";
import Musicpage from "../Components/music/musicDetils/Music/musicpage";
import VoicePage from "../Components/music/musicDetils/voices/voicespage";
import ClassBook from "../pages/classbook/ClassBook";
import Disipline from "../pages/disipline/Disipline";
import ReportCard from "../pages/reportcard/ReportCard";
import Schedule from "../pages/schedule/schedule";
import Tuition from "../pages/tuition/Tuition";
import Notifications from "../pages/notifications/Notifications";
import Survey from "../pages/survey/Survey";
import SurveyDitails from "../pages/survey/SurveyDitails";
import Aboutus from "../pages/about-us/Aboutus";
import Timer from "../pages/tools/timer/timer";
import Calculator from "../pages/tools/calculator/calculator";
import Countdown from "../pages/tools/Countdown/countdown";
import Percentage from "../pages/tools/percentage/percentage";
import Lightner from "../pages/tools/lightner/lightner";
import Moshtagh from "../pages/tools/moshtagh/moshtagh";
import Matrix from "../pages/tools/matrix/matrix";
import Scheduleconsultant from "../pages/schdule/Scheduleconsultant";
import TestAnalist from "../pages/testAnalist/TestAnalist";
import PlaningBook from "../pages/planinngBook/PlaningBook";
import Consultant from "../pages/consultant/Consultant";
import ConsultantInfo from "../pages/consultant/ConsultantInfo";
import ConsultantReservation from "../pages/consultant/ConsultantReservation";
import CounselingSession from "../pages/consultant/CounselingSession";
import Solving from "../pages/solving/Solving";
import Podcast from "../pages/podcast/Podcast";
import PodcastInfo from "../pages/podcastInfo/PodcastInfo";
import Setting from "../pages/setting/Setting";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
function Nopage() {
  return (
    <div style={{ height: "100vh" }}>
      <h3>404</h3>
    </div>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Private><MainLayout/></Private>,
    errorElement: <Nopage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/tickets/:id",
        element: <TicketSolved />,
      },
      {
        path: "newticket",
        element: <NewTicket />,
      },
      {
        path: "testlist",
        element: <Exams />,
      },
      {
        path: "/testInfo/:id",
        element: <TestInfo />,
      },
      {
        path: "/testDone/:id",
        element: <TsetResult />,
      },
      {
        path: "/testResult/:id",
        element: <ExamPaper />,
      },
      {
        path: "/averageChart/:id",
        element: <AverageChart />,
      },
      {
        path: "/middelChart/:id",
        element: <MiddelChart />,
      },
      {
        path: "/score",
        element: <Scores />,
      },
      {
        path: "/sessions",
        element: <Sessions />,
      },
      {
        path: "/rollcall",
        element: <RollCall />,
      },
      {
        path: "/homework",
        element: <HomeWork />,
      },
      {
        path: "/homework-done/:id",
        element: <HomeworkDone />,
      },
      {
        path: "/homework-notedone/:id",
        element: <HomeworkNoteDone />,
      },
      {
        path: "/homework-inprogress/:id",
        element: <HomeworkInProgress />,
      },
      {
        path: "/handout",
        element: <Handout />,
      },
      {
        path: "/handout/:id",
        element: <HandoutDitails />,
      },
      {
        path: "/gallerylist",
        element: <Gallerylist />,
      },
      {
        path: "/gallerylist/:id",
        element: <Gallery />,
      },
      {
        path: "/sounds",
        element: <Music />,
      },
      {
        path: "music/:id",
        element: <Musicpage />,
      },
      {
        path: "sound/:id",
        element: <VoicePage />,
      },
      {
        path: "/classbook",
        element: <ClassBook />,
      },
      {
        path: "/disipline",
        element: <Disipline />,
      },
      {
        path: "/reportcard",
        element: <ReportCard />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/tuition",
        element: <Tuition />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
      {
        path: "/survey/:id",
        element: <SurveyDitails />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/scheduleconsultant",
        element: <Scheduleconsultant />,
      },
      {
        path: "/testanalysis",
        element: <TestAnalist />,
      },
      {
        path: "/planning",
        element: <PlaningBook />,
      },
      {
        path: "/consultant",
        element: <Consultant />,
      },
      {
        path: "/consultant/:id",
        element: <ConsultantInfo />,
      },
      {
        path: "/consultant/:id/:date",
        element: <ConsultantReservation />,
      },
      {
        path: "/CounselingSession/:id",
        element: <CounselingSession />,
      },
      {
        path: "/solving",
        element: <Solving />,
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/podcast/:id",
        element: <PodcastInfo />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/tools/timer/*",
        element: <Timer />,
      },
      {
        path: "/tools/countdown/*",
        element: <Countdown />,
      },
      {
        path: "tools/percentage/*",
        element: <Percentage />,
      },
      {
        path: "tools/lightner/*",
        element: <Lightner />,
      },
      {
        path: "tools/moshtagh/*",
        element: <Moshtagh />,
      },
      {
        path: "tools/matrix/*",
        element: <Matrix />,
      },
      {
        path: "tools/Calculator/*",
        element: <Calculator />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/validation-code",
    element: <ValidationCode />,
  },
  {
    path: "/forgottenpassword",
    element: <ForgottenPass />,
  },
  {
    path: "/reset-pass",
    element: <ForgottenPass2 />,
  },
]);
