import React, { useState } from "react";
import styles from "./past_card.module.css";
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils";
import ImageGallery from "react-image-gallery";

const PastCard = ({ bgColor, bgUrl }) => {
  const darkenedLabelBg = LightenDarkenColor(bgColor, -20);
  const [showGallery, setshowGallery] = useState(false);
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className={styles.past_card_wrapper} style={{ backgroundColor: "#f2f2f2" }}>
      {showGallery && <ImageGallery items={images} />}
      <div className={styles.showcase_area}>
        <div className={styles.showcase_mini}>
          {images.map((image) => (
            <div className={styles.blocks}>
              <div className={styles.image} style={{ backgroundImage: `url(${image.thumbnail})` }} onClick={() => setshowGallery(true)}></div>
            </div>
          ))}
        </div>
        <div className={styles.showcase_large}>
          <div className={styles.blocks}>
            <div className={styles.image} style={{ backgroundImage: `url(${bgUrl})` }}></div>
          </div>
        </div>
      </div>
      <div className={styles.text_content} style={{ backgroundColor: bgColor }}>
        <div style={{ display: "flex" }}>
          <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
            Seminar
          </div>
          <div className={styles.date}>18 jan 2021</div>
        </div>
        <div className={styles.title}>Mental health awareness seminar</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr
        </div>
      </div>
    </div>
  );
};

export default PastCard;
