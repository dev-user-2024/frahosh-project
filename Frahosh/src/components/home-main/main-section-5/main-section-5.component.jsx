import img1 from "../../../assets/image/Group 397.png";
import img2 from "../../../assets/image/Group 395.png";
import img3 from "../../../assets/image/Group 396.png";
import img4 from "../../../assets/image/Group 395.png";
import img5 from "../../../assets/image/Group 393.png";
import img6 from "../../../assets/image/Group 392.png";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import "./main-section-5.css";
import { serverApi } from "../../../confing/confing.js";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const MainSection5 = () => {
  const theme = useTheme();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${serverApi}companionsComments`);
        console.log("c", data.data);
        setList(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const changeMainComment = ( id2) => {
    list.forEach((i) => {
      if (i.id === id2) {
        setMainOpenion((prev) => ({
          id: i.id,
          pic: i.image,
          nameOfStudent: i.user?.name,
          date: i.date,
          user: i.user?.username,
          comment: i.description,
        }));
      }
    });
  };
  var [mainOpenion, setMainOpenion] = useState({});

  const setfirstComment = useMemo(() => {
    setMainOpenion({
      id: list[0]?.id,
      pic: list[0]?.image,
      nameOfStudent: list[0]?.user?.name,
      date: list[0]?.date,
      user: list[0]?.user?.username,
      comment: list[0]?.description,
    });
  }, [list]);
  return (
    <div className="main-section-6">
      <Typography
        variant="h4"
        mx={2}
        sx={{
          fontWeight: "600",
          fontFamily: "Rokh-Bold",
          color: theme.palette.mode === "dark" ? "#81CCFF" : "#1D9BF0",
          direction: "rtl",
        }}
        className="openion-section-title"
      >
        نظرات همراهان
      </Typography>
      <div className="section-6-openion-desktop">
        <div className="section-6-1">
          <div className="bg-openion-choice1">
            <div>
              <img
                className="openion-2"
                onMouseEnter={() => {  changeMainComment( list[2]?.id);   }}
                src={list[2]?.image || ""}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-3"
                onMouseEnter={() => {
                  changeMainComment( list[3]?.id);
                }}
                src={list[3]?.image || ""}
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
                alt=""
              />
            </div>
            <div>
              <img
                className="openion-4"
                src={list[4]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[4]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="main-openion" style={{padding:"20px"}}>
            <div className="main-openion-firstItem">
              <div className="main-openion-pic">
                <img
                  className="main-openion-img"
                  src={mainOpenion.pic}
                  alt=""
                />
              </div>
              <div className="main-openioon-context">
                <div>
                  <p>{mainOpenion.user}</p>
                </div>
                <div>
                  <p>{mainOpenion.nameOfStudent}</p>
                </div>
                <div>
                  <p>{mainOpenion.date}</p>
                </div>
              </div>
              <div className="main-openion-comment">
                <p>{mainOpenion.comment}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-openion-choice2">
            <div>
              <img
                className="openion-5"
                src={list[5]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[5].id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-6"
                src={list[6]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[6].id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-7"
                src={list[7]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[7]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-6-openion-mobile">
        <div className="bg-openion-mobile">
          <div className="bg-openion-choice1">
            <div>
              <img
                className="openion-2"
                onMouseEnter={() => {
                  changeMainComment( list[2]?.id);
                }}
                src={list[2]?.image || ""}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-3"
                onMouseEnter={() => {
                  changeMainComment( list[3]?.id);
                }}
                src={list[3]?.image || ""}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-4"
                src={list[4]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[4]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
          </div>
          <div className="bg-openion-choice2">
            <div>
              <img
                className="openion-5"
                src={list[5]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[5]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-6"
                src={list[6]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[6]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}
              />
            </div>
            <div>
              <img
                className="openion-7"
                src={list[7]?.image || ""}
                onMouseEnter={() => {
                  changeMainComment( list[7]?.id);
                }}
                alt=""
                style={{width:"80px",height:"80px", borderRadius:"40px"}}

              />
            </div>
          </div>
        </div>
        <div>
          <div className="main-openion">
            <div className="main-openion-firstItem">
              <div className="main-openion-pic">
                <img
                  className="main-openion-img"
                  src={mainOpenion.pic}
                  alt=""
                />
              </div>
              <div className="main-openioon-context">
                <div>
                  <p>{mainOpenion.user}</p>
                </div>
                <div>
                  <p>{mainOpenion.nameOfStudent}</p>
                </div>
                <div>
                  <p>{mainOpenion.date}</p>
                </div>
              </div>
              <div className="main-openion-comment">
                <p>{mainOpenion.comment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection5;
