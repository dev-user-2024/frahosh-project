import React from "react";
import GallerySlider from "../../../../Components/gallery/gallery";
import Copyurl from "../../../../Components/share-copyurl/copyurl";
import Like from "../../../../Components/like-button/like";
import styles from "./gallery.module.css";
import Child from "../../../../assests/image/child.png";

function sort() {
  return (
    <div className={styles.container}>
    <div>
    <GallerySlider/>
    </div>
   
      <div className={styles.bar}>
        <div className={styles.row}>

          <div className={styles.left}>
            <Copyurl />
          </div>
          <div className={styles.right}>
            <Like className={styles.like} />
            <div className={styles.images}>
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
              <img src={Child} alt="دانش آموز" />
            </div>
            <p>+ 52 نفر دیگر این تصویر را پسندیدند</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sort;
