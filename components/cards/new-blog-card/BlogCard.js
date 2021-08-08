import React, { useState } from "react";
import styles from "./blog_card.module.css";
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils";

const BlogCard = (data) => {
  const darkenedLabelBg = LightenDarkenColor(data.bgColor, -20);
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
      original:
          "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      },
  ];

  return (
    <div className={styles.wrapper_div} style={{height: `${data.height}px`, width: `${data.width}px`}}>
      <div className={styles.showcase_area} style={{ backgroundImage: `url(${images[Math.floor(Math.random() * 3)].original})`}}>
        <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
          Seminar
        </div>
        <div className={styles.blog_info}>
          <div className={styles.blog_title}>
            Title
          </div>
          <div className={styles.read_more}>
            <a>Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard