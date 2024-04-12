import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Sec1 from "../../components/testpage/Section1/section1";
import Sec2 from "../../components/testpage/Section2/section2";
import Sec3 from "../../components/testpage/Section3/section3";
import Footer from "../../components/footer/footer";
import styles from "./testpage.module.css";
const Counselingpage = () => {
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

export default Counselingpage;
