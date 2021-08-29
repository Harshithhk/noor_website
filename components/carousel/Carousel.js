import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import cx from "classnames"
import styles from "./carousel.module.css"

const Carousel = ({ carouselImages }) => {
  const [images, setimages] = useState(() => carouselImages)
  const [pgCountForthree, setpgCountForthree] = useState(() => Math.ceil(images.length / 3))
  const [pgCountFortwo, setpgCountFortwo] = useState(() => Math.ceil(images.length / 2))
  const [pgCountForone, setpgCountForone] = useState(() => Math.ceil(images.length / 1))

  const [activePage, setactivePage] = useState(0)

  const [translateX, setTranslateX] = useState(0)

  const setActive = (pgcount, i) => {
    console.log(pgcount, i)
    if (i < pgcount && i >= 0) {
      setactivePage(i)
      setTranslateX(-1 * i * 340)
    }
  }

  return (
    <div style={{ width: "fit-content", margin: "0 auto", position: "relative" }}>
      <div className={styles.three}>
        <div className={styles.left_arrow} onClick={() => setActive(pgCountForthree, activePage - 1)}>
          <MdKeyboardArrowLeft />
        </div>
        <div className={styles.right_arrow} onClick={() => setActive(pgCountForthree, activePage + 1)}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className={styles.two}>
        <div className={styles.left_arrow} onClick={() => setActive(pgCountFortwo, activePage - 1)}>
          <MdKeyboardArrowLeft />
        </div>
        <div className={styles.right_arrow} onClick={() => setActive(pgCountFortwo, activePage + 1)}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className={styles.one}>
        <div className={styles.left_arrow} onClick={() => setActive(pgCountForone, activePage - 1)}>
          <MdKeyboardArrowLeft />
        </div>
        <div className={styles.right_arrow} onClick={() => setActive(pgCountForone, activePage + 1)}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <section className={styles.media_showcase} style={{ zIndex: "1" }}>
        {images.map((img) => {
          return (
            <div key={img.id} className={styles.card} style={{ transform: `translateX(${translateX}px)` }}>
              <img src={img.original} alt={img.original} />
            </div>
          )
        })}
      </section>

      <div className={cx(styles.active_buttons, styles.three)}>
        {[...Array(pgCountForthree)].map((count, index) => {
          return index === activePage ? (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px", color: "#707070" }}>
              <BsCircleFill />
            </div>
          ) : (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px", color: "#ffffff" }}>
              <BsCircleFill />
            </div>
          )
        })}
      </div>
      <div className={cx(styles.active_buttons, styles.two)}>
        {[...Array(pgCountFortwo)].map((count, index) => {
          return index === activePage ? (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px" }}>
              <BsCircleFill />
            </div>
          ) : (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px" }}>
              <BsCircle />
            </div>
          )
        })}
      </div>
      <div className={cx(styles.active_buttons, styles.one)}>
        {[...Array(pgCountForone)].map((count, index) => {
          return index === activePage ? (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px" }}>
              <BsCircleFill />
            </div>
          ) : (
            <div style={{ marginRight: index !== pgCountForthree.length ? "5px" : "0px" }}>
              <BsCircle />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
