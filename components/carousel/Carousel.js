import React, { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import cx from "classnames"
import styles from "./carousel.module.css"

const Carousel = () => {
  const [images, setimages] = useState(() => [
    {
      id: 1,
      original: "https://picsum.photos/id/1018/1000/600/",
    },

    {
      id: 2,
      original:
        "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
    { id: 3, original: "https://picsum.photos/id/1015/1000/600/" },
    {
      id: 4,
      original:
        "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
    {
      id: 5,
      original:
        "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
  ])
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
