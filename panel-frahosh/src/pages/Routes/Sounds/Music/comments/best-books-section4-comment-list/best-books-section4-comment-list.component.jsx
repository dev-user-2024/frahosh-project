import { useState } from "react"
import BestBooksSection4Comment from "../best-books-section4-comment/best-books-section4-comment.component"
import Button from "../../../../../../Components/buttons/button.component"

import img1 from "../../../../../../assests/image/sarbedaran.png"
import { ReactComponent as ArrowDown } from "../../../../../../assests/image/svg/arrow-down.svg"
import React from "react";

import styles from "./best-books-section4-comment-list.styles.module.css"

const BestBooksSection4CommentList = () => {

    const [numOfComment, setNumOfComment] = useState(2)

    const commentList = [
        {
            "id": 1,
            "name": "محمد علی‌پور",
            "star": "اردیبهشت 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,

        },
        {
            "id": 2,
            "name": "محمد طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,

        },
        {
            id: 3,
            "name": "رضا طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,
        },
        {
            id: 4,
            "name": "محمد طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,
        },
        {
            "id": 5,
            "name": "محمد طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,

        },
        {
            id: 6,
            "name": "رضا طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,
        },
        {
            id: 7,
            "name": "محمد طاهری",
            "date": "فروردین 1401",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "imgSrc": img1,
        }
    ]

    const slice = commentList.slice(0, numOfComment)

    const loadMoreComment = () => {
        setNumOfComment(numOfComment + 2)
    }


    return (
        <div className={styles.bestBooksSection4CommentSection}>

            <h4 className={styles.bestBooksSection4Title}>نظرات و امتیازها</h4>


            <div className={styles.bestBooksSection4Comment} >

                {
                    slice.map((commentItems,index) => {
                        return (
                            <BestBooksSection4Comment key={index} id={commentItems.id} name={commentItems.name} date={commentItems.star} content={commentItems.content} />
                        )
                    })
                }

            </div>

            <div className={styles.bestBooksSection4More} onClick={loadMoreComment} >
                <ArrowDown />
                <p>مشاهده بیشتر</p>
            </div>
            <h4 className={styles.bestBooksSection4Title}>لطفا امتیاز و نظرت رو ثبت کن</h4>
            <form className={styles.bestBooksSection4CommentBox} onSubmit={""}>
                <textarea maxLength='1100' minLength='10' rows="4" cols="5000" />
                <div><Button buttonType="btnLoginBgBlue" type="submit" >
                 ثبت نظر
                </Button></div>
            </form>
        </div>
    )
}


export default BestBooksSection4CommentList;