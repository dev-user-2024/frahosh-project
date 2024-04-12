import styles from "./section3.module.css";
import Firstpic from "../../../assets/image/testpage-sec3.png";
import Button from "../../buttons/button.component";
import ArrowLeftWhite from "../../../assets/icons/arrow-left-white.png";
import { ReactComponent as ArrowLeftblue } from "../../../assets/icons/arrow-left-blue.svg";
const Testpagesec3 = () => {
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.container}>
        <div className={styles.containerright}>
          <p>
            کلیک کن !<br></br>
            از سوالات متنوع و برگزیده فراهوش استفاده کن و بهترین<br></br>
            نتیجه رو بگیر
          </p>

          <Button buttonType="btnbackwhite" type="button">
            ورود به سامانه
            <ArrowLeftblue />
          </Button>
        </div>
        <div className={styles.containerleft}>
        <img className={styles.imagetestpage} src={Firstpic} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Testpagesec3;
