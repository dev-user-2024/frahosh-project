import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import CardPic1 from "../../../assets/image/podcast.png";
import CardPic2 from "../../../assets/image/podcast (1).png";
import CardPic4 from "../../../assets/image/podcast (3).png";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import "./new-card.comonent";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { serverApi } from "../../../confing/confing";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../buttons/button.component";
import Grid from "@mui/material/Unstable_Grid2";

const NewCard = () => {
  const theme = useTheme();
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${serverApi}mySweetBlog/getOrderedByCreate`
        );
        setCard(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Box className="main-card">
      <Box className="MainCard">
        <Box className="card-title">
          <Typography
            variant="h4"
            mx={2}
            sx={{
              fontWeight: "600",
              fontFamily: "Rokh-Bold",
              color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
              direction: "rtl",
            }}
            className="z-pattern-text-title"
          >
            جدید ترین مقالات
          </Typography>{" "}
          <Link className="card-link">
            مشاهده همه
            <ArrowLeft />
          </Link>
        </Box>
        <Box className="card-list">
          <Grid container alignItems="start">
            {card.map((i, index) => {
              if (index < 4)
                return (
                  <Grid
                    key={index}
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                    className="card-item"
                  >
                    <Box sx={{ padding: "5px" }}>
                      <Link to={`/Document/${i.id}`}>
                        <img className="card-item-pic" src={i.image} alt="" />
                        <Typography
                          sx={{
                            color:
                              theme.palette.mode === "dark" ? "#fff" : "#000",
                          }}
                          className="card-item-text"
                        >
                          {i.title_blog}
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            width: "fit-content",
            mx: "auto",
            mt: "20px",
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          <Link to="/Document-list">
            <Button>مشاهده همه</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NewCard;
