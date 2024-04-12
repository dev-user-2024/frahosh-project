import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Dashboard from "../pages/dashboard/dashboard";
import Nopage from "../components/404/404";
import Tickets from "../pages/Ticket/Tickets";
import TicketSolvedPage from "../pages/Ticket/TicketSolvedPage";
import CorrectionPage from "../pages/correctaion/CorrectionPage";
import CorractionDitailsPage from "../pages/corractionDitails/CorractionDitails";
import AzmoonPage from "../pages/Azmoon/Azmoonpage";
import AzmoonDitailsPage from "../pages/AzmoonDitailsPage/AzmoonDitails";
import TestAnalysis from "../pages/testAnalysis/TestAnalysis";
import TestAnalysisDetails from "../pages/testAnalysis/TestAnalysisDetails";
import Consultant from "../pages/consultant/consultant";
import CounselingCanceling from "../pages/ConsultantCanceling/ConsultantCanceling";
import Myconsultant from "../pages/myconsultant/myconsultant";
import Scores from "../pages/score/score";
import Meeting from "../pages/meeteng/Meeting";
import Scheduleconsultant from "../pages/Scheduleconsultant/Scheduleconsultant";
import Consultantsessions from "../pages/consultant/consultantSession";
import ReportCard from "../pages/reportcard/ReportCard";
import PlaningBook from "../pages/planinngBook/PlaningBook";
import Setting from "../pages/setting/SettingPage";
import Forgotpass from "../pages/forgetPass/ForgetPass";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ValidationCode from "../pages/signup/ValidationCode";
import ForgottenPass from "../pages/forgottenPassword/forgottenPass";
import ForgottenPass2 from "../pages/forgottenPassword/forgottenPass2";
import Private from "./privateroute";
import ExamPage from "../pages/exam/ExamPage";
import ExamDitailsPage from "../pages/examDitails/ExamDitailsPage";
import CreateExam from "../pages/exam/CreateExam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Nopage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "ticket",
        element: <Tickets />,
      },
      {
        path: "ticket/:id",
        element: <TicketSolvedPage />,
      },
      {
        path: "correction",
        element: <CorrectionPage />,
      },
      {
        path: "correction/:id",
        element: <CorractionDitailsPage />,
      },
      {
        path: "test",
        element: <AzmoonPage />,
      },
      {
        path: "test/:id",
        element: <AzmoonDitailsPage />,
      },
      {
        path: "test-analysis",
        element: <TestAnalysis />,
      },
      {
        path: "test-analysis/:id",
        element: <TestAnalysisDetails />,
      },
      {
        path: "consultant",
        element: <Consultant />,
      },
      {
        path: "consultant/Canceling",
        element: <CounselingCanceling />,
      },
      {
        path: "consultant/myconsultant",
        element: <Myconsultant />,
      },
      {
        path: "scores",
        element: <Scores />,
      },
      {
        path: "meeting",
        element: <Meeting />,
      },
      {
        path: "scheduleconsultant",
        element: <Scheduleconsultant />,
      },
      {
        path: "consultant/sessions",
        element: <Consultantsessions />,
      },
      {
        path: "/reportcard",
        element: <ReportCard />,
      },
      {
        path: "/planning",
        element: <PlaningBook />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "setting/forgotpass",
        element: <Forgotpass />,
      },
      {
        path: "exam",
        element: <ExamPage />,
      },
      {
        path: "exam/:id",
        element: <ExamDitailsPage />,
      },
      {
        path: "create-exam",
        element: <CreateExam />,
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
