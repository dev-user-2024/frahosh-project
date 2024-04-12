import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Sec1 from "../../components/exampage/Section1/section1";
import Sec2 from "../../components/exampage/Section2/section2";
import Sec3 from "../../components/exampage/Section3/section3";
import Footer from "../../components/footer/footer";
import styles from "./exampage.module.css";
const exampage = () => {
  return (
    <div className={styles.container}>
      <Navigation2 />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Footer />
    </div>
  );
};

export default exampage;
