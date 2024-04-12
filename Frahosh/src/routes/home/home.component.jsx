import HomeHeader from "../../components/home-header/home-header.component";
import Footer from "../../components/footer/footer";
import HomeMain from "../../components/home-main/home-main.component";
import styles from "./home.module.css"
import HomeHeader2 from "../../components/home-header-slider2/home-header-slider2.component";
import { useTheme } from "@mui/material";
const Home = () => {

    const theme = useTheme()
    return (
        <div className={styles.container}>
            {
                theme.palette.mode ==='light' ? <HomeHeader /> : <HomeHeader2/>
            }
            <HomeMain/>
            <Footer /> 
        </div>
        
    )
}

export default Home;