import { useState } from 'react';
import whattheysay from '../../../assets/image/What-they-say.png';
import person1 from '../../../assets/image/What-they-say1.png';
import person2 from '../../../assets/image/What-they-say2.png';
import person3 from '../../../assets/image/What-they-say3.png';
import person4 from '../../../assets/image/What-they-say4.png';
import person5 from '../../../assets/image/What-they-say5.png';
import styles from './podcast-section6.module.css';
import Stack from '@mui/material/Stack';

const PodcastSection6 = () => {
    var listofOpenion = [
        [1, whattheysay, "محمد علیپور", "دانش آموز ", "اردیبهشت 1402", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."],
        [2, person1, "مریم سعادت پور", "دانش آموز ", "اردیبهشت 1402", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."],
        [3, person2, "بهروز قاسمی", "دانش آموز ", "اردیبهشت 1400", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."],
        [4, person3, "رضا عظیمی", "دانشجو", "اردیبهشت 1401", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."],
        [5, person4, "آیناز جمشیدی", "دانشجو ", "اردیبهشت 1402", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."],
        [6, person5, "سارا محمدی", "دانشجو", "اردیبهشت 1400", "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."]
    ]
    var [mainOpenion, setMainOpenion] = useState({
        id: listofOpenion[0][0],
        pic: listofOpenion[0][1],
        nameOfStudent: listofOpenion[0][2],
        date: listofOpenion[0][4],
        user: listofOpenion[0][3],
        comment: listofOpenion[0][5]
    })
    var [picOfOpenion] = useState(
        {
            1: whattheysay,
            2: person1,
            3: person2,
            4: person3,
            5: person4,
            6: person5
        }
    )
    var [idOfOpenion, setIdOfOpenion] = useState(
        {
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6
        }
    )
    const changeMainComment = (listofComment, id2) => {
        listofComment.forEach(i => {
            if (i[0] === id2) {
                setMainOpenion(prev => ({
                    pic: i[1],
                    id: i[0],
                    nameOfStudent: i[2],
                    user: i[3],
                    date: i[4],
                    comment: i[5],
                    id2: prev.id
                }))
            }

        });
    }
    return (
        <div className={styles.Container}>
            <h2>نظرات همراهان ما</h2>
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                spacing={1}
                justifyContent="center"
                alignItems="center"
            >
                <div className={styles.sec2}>
                    <div>
                        <div className={styles.photoes}>
                        <div >
                                <img className={styles.openion1} onClick={() => {
                                    changeMainComment(listofOpenion, 1)
                                }} src={picOfOpenion[1]} alt="" />
                            </div>
                            <div >
                                <img className={styles.openion2} onMouseEnter={() => {
                                    changeMainComment(listofOpenion, 2)
                                }} src={picOfOpenion[2]} alt="" />
                            </div>
                            <div >
                                <img className={styles.openion3} onMouseEnter={() => {
                                    changeMainComment(listofOpenion, 3)
                                }} src={picOfOpenion[3]} alt="" />
                            </div>
                            <div>
                                <img className={styles.openion4}  onMouseEnter={() => {
                                    changeMainComment(listofOpenion, 4)
                                }} src={picOfOpenion[4]} alt="" />
                            </div>
                            <div >
                                <img className={styles.openion5}  onMouseEnter={() => {
                                    changeMainComment(listofOpenion, 5)
                                }} src={picOfOpenion[5]} alt="" />
                            </div>
                            <div >
                                <img className={styles.openion6}  onMouseEnter={() => {
                                    changeMainComment(listofOpenion, 6)
                                }} src={picOfOpenion[6]} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className='main-openion-firstItem'>
                        <div className='main-openioon-context'>
                            <div><p>{mainOpenion.user}</p></div>
                            <div><p>{mainOpenion.nameOfStudent}</p></div>
                            <div><p>{mainOpenion.date}</p></div></div>
                        <div className='main-openion-comment'>
                            <p>{mainOpenion.comment}</p>
                        </div>

                    </div>
                </div>
            </Stack>
        </div>
    );
}

export default PodcastSection6;