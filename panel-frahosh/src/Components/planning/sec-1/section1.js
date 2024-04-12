import React  from "react";
import PlaningCalendar from "../../planingClaendar/PlaningCalendar";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from "./section1.styles.module.css";
import { Swiper,SwiperSlide } from "swiper/react";

const Section1 = () => {
    var MyDate = new Date();
    console.log(MyDate.getDay())
    return (
        <div className={styles.bg_sec}>
              <div>
                    <PlaningCalendar component={1} />
                </div>
                <div className={styles.message_bg}>
                <CustomizedAccordions />
                </div>
        </div>
      );
}
 
export default Section1;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem'  , transform: "rotate(180deg)"}} />}
    {...props}
  />
))(({ theme }) => ({
    border: `2px solid ${theme.palette.divider}`,
    '&:before': {
      display: 'none',
    },
  backgroundColor: "rgba(250, 250, 250, 1)",
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  background : "rgba(250, 250, 250, 1)",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>پیام‌های مشاور</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={styles.bg_accordion}>
         <Swiper className={styles.slider}
                            direction={"vertical"}>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                </Swiper>
                                </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>پیام‌های والدین</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <div className={styles.bg_accordion}>
         <Swiper className={styles.slider}
                            direction={"vertical"}>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                <SwiperSlide className={styles.Slide}>
                                <div className={styles.slide_context}>
                                <Typography>سارا علیزاده:</Typography>
                                <Typography>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع.
                                </Typography>  
                                </div> 
                                </SwiperSlide>
                                </Swiper>
         </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}