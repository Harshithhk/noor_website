import React, { useState } from "react"
import styles from "./blog_card.module.css"
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils"
import Link from "next/link"

const BlogCard = ({ bgColor, bgUrl, id }) => {
  const darkenedLabelBg = LightenDarkenColor(bgColor, -20)
  const [showGallery, setshowGallery] = useState(false)
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
  ]
  const link = `/blogs/${id}`

  return (
    <div className={styles.past_card_wrapper} style={{ backgroundColor: "#f2f2f2" }}>
      <div className={styles.showcase_area} style={{ backgroundImage: `url(${images[Math.floor(Math.random() * 3)].original})` }}>
        <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
          Seminar
        </div>
        <div className={styles.like}>
          <img src="/assets/images/like.svg" width="40px"></img>
          <div style={{}}>160</div>
        </div>
      </div>
      <div className={styles.text_content} style={{ backgroundColor: bgColor }}>
        <div className={styles.title}>Mental health awareness seminar</div>
        <div className={styles.description}>
          {" "}
          <div style={{ display: "flex", alignItems: "center", marginTop: "0.25rem" }}>
            <div className={styles.avatar}> </div>{" "}
            <div>
              John Doe <span style={{ fontSize: "0.75rem" }}>- 18th Jan 2021</span>
            </div>
          </div>
          <div className={styles.read_more} style={{ background: darkenedLabelBg }}>
            <Link href={link}>
              <div style={{ transform: "translateY(-2px)" }}> read more {">>"}</div>
            </Link>
          </div>
        </div>
        {/* <div className={styles.date}>18 jan 2021</div> */}
        {/* <div className={styles.read_more} style={{ background: darkenedLabelBg }}>
          read more {">>"}
        </div> */}
      </div>
    </div>
  )
}

export default BlogCard
