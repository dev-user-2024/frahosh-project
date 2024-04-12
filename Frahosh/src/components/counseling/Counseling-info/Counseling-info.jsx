import styles from "./Counseling-info.module.css"
import { ReactComponent as Groupicon } from "../../../assets/image/Group 423.svg"
import { ReactComponent as Bagicon } from "../../../assets/image/Group 424.svg"
import { ReactComponent as Studenticon } from "../../../assets/image/Group 425.svg"
import Stack from '@mui/material/Stack';

const Counselinginfo = () => {
    return (
        <div className={styles.box}>
            <Stack
              direction={{ sm: 'column', md: 'row' }}
              spacing={3.5}
              justifyContent="center"
              alignItems="center"
            >
                <Groupicon className={styles.one}/>
                <Bagicon className={styles.two}/>
                <Studenticon className={styles.three}/>
            </Stack>
        </div>
    )
}

export default Counselinginfo;