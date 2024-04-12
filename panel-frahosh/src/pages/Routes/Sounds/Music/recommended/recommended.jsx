import { Link } from "react-router-dom";
import styles from "./recommended.module.css";
import { ReactComponent as Play } from "../../../../../assests/image/svg/play.svg";
import Sarbolandan from "../../../../../assests/image/sarbedaran.png";
import React from "react";

function Tabs() {
  const [list1  , setList1] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}galleries`, {
          headers: { authorization: `Bearer ${token}` }
        });
        console.log(data);
        setList1(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
    {
      list1.map(element => {
        return(
          <div className={styles.othersessions}>
        <Link to="/">
          <div className={styles.imagetitle}>
            <div className={styles.imagecover}>
              <img src={Sarbolandan} alt="music-cover" />
              <Play className={styles.play} />
            </div>
            <div className={styles.texts}>
            <p>{element.name}</p>
            <p className={styles.textlow}>آلبوم سربلندان</p>
            </div>
          </div>
        </Link>

      </div>
        )
      })
    }
    </div>
  );
}

export default Tabs;
