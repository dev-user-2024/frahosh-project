import Navigation2 from "../../components/navigation-2/navigation-2.component";
import Question1 from "../../components/Questions/Section1/section1";
import Question2 from "../../components/Questions/Section2/section2";
import Question3 from "../../components/Questions/Section3/section3";
import Question4 from "../../components/Questions/Section4/section4";
import Question5 from "../../components/Questions/Section5/section5";
import Footer from "../../components/footer/footer";
import styles from "./Question.module.css";
const Counselingpage = () => {
  return (
    <div className={styles.container}>
      <Navigation2 />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Footer />
    </div>
  );
};

export default Counselingpage;
