import { useState } from "react";
import BestBooksSection4Comment from "../best-books-section4-comment/best-books-section4-comment.component";
import Button from "../../../buttons/button.component";

import img1 from "../../../../assets/image/Ellipse 16.png";
import { ReactComponent as ArrowDown } from "../../../../assets/icons/arrow-down.svg";

import styles from "./best-books-section4-comment-list.styles.module.css";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";


const BestBooksSection4CommentList = () => {
  const [numOfComment, setNumOfComment] = useState(2);
  const theme = useTheme();

  const commentList = [
    {
      id: 1,
      name: "محمد علی‌پور",
      date: "اردیبهشت 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 2,
      name: "محمد طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 3,
      name: "رضا طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 4,
      name: "محمد طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 5,
      name: "محمد طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 6,
      name: "رضا طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
    {
      id: 7,
      name: "محمد طاهری",
      date: "فروردین 1401",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      imgSrc: img1,
    },
  ];

  const slice = commentList.slice(0, numOfComment);

  const loadMoreComment = () => {
    setNumOfComment(numOfComment + 2);
  };

  return (
    <div className={styles.bestBooksSection4CommentSection}>
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
          نظرات شنوندگان
        </Typography>

      <div className={styles.bestBooksSection4Comment}>
        {slice.map((commentItems) => {
          return (
            <BestBooksSection4Comment
              id={commentItems.id}
              name={commentItems.name}
              date={commentItems.date}
              imgSrc={commentItems.imgSrc}
              content={commentItems.content}
            />
          );
        })}
      </div>

      <div className={styles.bestBooksSection4More} onClick={loadMoreComment}>
        <ArrowDown />
        <p>مشاهده بیشتر</p>
      </div>

      <form className={styles.bestBooksSection4CommentBox} onSubmit={""}>
        <textarea maxlength="1100" minlength="10" rows="5" cols="90" />
        <Button buttonType="btnLoginBgBlue" type="submit">
          ثبت
        </Button>
      </form>
    </div>
  );
};

export default BestBooksSection4CommentList;
