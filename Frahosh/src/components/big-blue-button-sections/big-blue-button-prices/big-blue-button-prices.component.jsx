import PricesCard from "../../prices-card/prices-card.component";
import styles from "./big-blue-button-prices.styles.module.css";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
const Prices = () => {
  const theme = useTheme();

  return (
    <Box className={styles.pricesContainer}>
      <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
        }}
        className="z-pattern-title"
      >
        هزینه ها
      </Typography>

      <Box className={styles.pericesCardContainer}>
        <PricesCard
          planType="پلن رایگان"
          planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
          planPrice="رایگان"
          planTheme="planRight"
        />

        <PricesCard
          planType="پلن حرفه‌ای"
          planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
          planPrice="15 میلیون تومان"
          planTheme="planCenter"
        />

        <PricesCard
          planType="پلن معمولی"
          planDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان"
          planPrice="7 میلیون تومان"
          planTheme="planLeft"
        />
      </Box>
    </Box>
  );
};

export default Prices;
