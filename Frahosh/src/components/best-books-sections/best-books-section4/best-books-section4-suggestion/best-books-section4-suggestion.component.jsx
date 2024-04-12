import styles from "./best-books-section4-suggestion.styles.module.css";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const BestBooksSection4Suggestion = ({ id, name, degree, imgSrc }) => {
  const onSuggestionClick = () => {};
  const theme = useTheme();

  return (
    <div className={styles.suggestion} key={id} onClick={onSuggestionClick}>
      <img src={imgSrc} alt="" />
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
      >
        مصاحبه با {name}{" "}
      </Typography>
      <Typography
        sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
      >
        {degree}
      </Typography>
    </div>
  );
};

export default BestBooksSection4Suggestion;
