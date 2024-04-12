import BestBooksSection1 from "./best-books-section1/best-books-section1.component"
import styles from "./best-books-sections.styles.module.css"
import BestBooksSection2 from "./best-books-section2/best-books-section2.component"
import BestBooksSection3 from "./best-books-section3/best-books-section3-player.component"
import BestBooksSection4 from "./best-books-section4/best-books-section4.component"
import axios from "axios"
import { serverApi } from "../../confing/confing"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BestBooksSections = () => {
    const {id} = useParams()
    const [data,setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data} = await axios.get(`${serverApi}mySweetPodcast/podcast/5`);
            console.log(data)
            setData(data)
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

    return (
        <div className={styles.bestBooksSections}>
            <BestBooksSection1 data={data} />
            <BestBooksSection2/>
            <BestBooksSection3 data={data} />
            <BestBooksSection4/>
        </div>
    )
}

export default BestBooksSections