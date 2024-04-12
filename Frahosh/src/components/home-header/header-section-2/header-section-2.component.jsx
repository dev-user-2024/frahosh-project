import HeaderSection2Card from "./header-section-2-card/header-section-2-card.component"
import { ReactComponent as HealthIcon } from "../../../assets/icons/healthicons_i-exam-multiple-choice-outline.svg"
import { ReactComponent as MessageQuestionIcon } from "../../../assets/icons/message-question.svg"
import { ReactComponent as MonitorIcon } from "../../../assets/icons/monitor.svg"
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile-2user.svg"
import Grid from '@mui/material/Grid';
import styles from "./header-section-2.module.css"

const HeaderSection2 = () => {
    return (
        <div >
            <Grid className={styles.headersection2} container align="center"
                justify="center" rowSpacing={5} columnSpacing={{ xs: 0, sm: 0, md: 6 }}>
                <Grid item md={2.4} sm={6} xs={6}>
                    <HeaderSection2Card>
                        <MessageQuestionIcon className={styles.icon} />
                        مشاوره تحصیلی
                    </HeaderSection2Card>
                </Grid>
                <Grid item md={2.4} sm={6} xs={6}>
                    <HeaderSection2Card>
                        <MonitorIcon className={styles.icon} />
                        ابزارهای کمک آموزشی
                    </HeaderSection2Card>
                </Grid>
                <Grid item md={2.4} sm={6} xs={6}>
                    <HeaderSection2Card>
                        <ProfileIcon className={styles.icon} />
                        پشتیبانی تحصیلی
                    </HeaderSection2Card>
                </Grid>
                <Grid item md={2.4} sm={6} xs={6}>
                    <HeaderSection2Card>
                        <HealthIcon className={styles.icon} />
                        آزمون‌های متنوع
                    </HeaderSection2Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default HeaderSection2;