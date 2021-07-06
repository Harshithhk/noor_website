import React, { useState, useEffect } from "react"
import styles from "./event_details.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "../../../components/carousel/Carousel"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Register = () => {
  return (
    <>
      <section className={styles.event_details_page_wrapper}>
        <main>
          <div className={styles.heading}>
            <div style={{ textAlign: "center", alignItems: "center" }}>Events details</div>
          </div>
          <div className={styles.carousel}>
            <Carousel className={styles.carousel} />
          </div>
          <section className={styles.description}>
            <div className={styles.desc_container}>
              <div className={styles.desc_date}>28 Jav 2021</div>
              <div className={styles.desc_heading}>Mental health awareness seminar</div>
              <div className={styles.desc_description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </div>
            </div>
          </section>
        </main>
      </section>
      <section className={styles.impressions}>
        <div className={styles.impressions_background}>{/* <img src="/assets/images/Ellipse 425.png" alt="" srcset="" /> */}</div>
      </section>
    </>
  )
}

// cosnt cardsSection

export default Register
