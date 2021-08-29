import React, { useState, useEffect } from "react"
import styles from "./event_details.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "../../../components/carousel/Carousel"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import UpcomingCard from "../../../components/cards/upcoming-card/UpcomingCard"
import { upcomingEventsData } from "../../../utils/dummy-data/upcomingEventsData"
import Link from "next/link"
import Head from "next/head"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Register = () => {
  let carouselImages = [
    {
      id: 1,
      original: "/assets/images/Events/Valentimes/Valentimes.jpg",
    },

    {
      id: 2,
      original: "/assets/images/Events/Valentimes/Valentimes2.jpg",
    },
    { id: 3, original: "/assets/images/Events/Valentimes/Valentimes3.jpg" },
    // {
    //   id: 4,
    //   original:
    //     "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    // },
    // {
    //   id: 5,
    //   original:
    //     "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    // },
  ]

  var upcomingEventsData = [
    {
      id: 1,
      bgColor: "#C1E1FF",
      bgUrl:
        "https://images.unsplash.com/photo-1620173766248-411954ff5694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    },
    {
      id: 2,
      bgColor: "#AAF1DB",
      bgUrl:
        "https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    },
  ]

  const impressions = [
    {
      id: 1,
      img: "/assets/images/Testimonials/Ansh-puri.jpeg",
      name: "Ansh Puri",
      event: "Attended Unfold",
      review:
        "My experience with Noor has always been tremendously satisfying. You walk away from the events not only with the joy that you derive from the activities, but invaluable connections and solid bonds that last a lifetime.",
    },
    {
      id: 2,
      img: "/assets/images/Testimonials/Shehjaar-Kaur.jpeg",
      name: "Shehjaar Kaur",
      event: "Attended Valentines",
      review:
        "I got introduced to Noor in the beginning of 2021, and since then I've made a point to attend as many sessions as I can. the Unfold sessions have been brilliantly planned and executed, and I have rarely ever found another environment that is safe and receptive and brimming with engagement.",
    },
    {
      id: 3,
      img: "/assets/images/Testimonials/Vikrant.jpeg",
      name: "Vikrant",
      event: "Attended All Events",
      review:
        "The kind of activities and conversations that the people at Noor get you to do will not only help you out with some of your issues but will also make you aware of the variety of situations people find themselves in.",
    },
    {
      id: 4,
      img: "/assets/images/Testimonials/Siddhai-Pashikar.jpeg",
      name: "Siddhai Pashikar",
      event: "Attended Unfold",
      review:
        "I remember the first time I attended Noor. Since then, I've longed for this experience. Everytime I attend any Noor session, I end up feeling better about myself. Like a group of people coming together to provide a safe, non judgemental space without anyone interrupting them from sharing their thoughts is amazing.",
    },
  ]

  const [activeCard, setactiveCard] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  var activeWindowSize = 1080

  const setCard = (index) => {
    let multiplier = activeCard - index
    setactiveCard(() => index)
    const card = document.getElementById("card")
    setTranslateX(() => translateX + multiplier * (card.offsetWidth + 480))
  }

  const handleResize = () => {
    if (window.innerWidth < 650 && window.innerWidth > 520 && activeWindowSize != 650) {
      activeWindowSize = 650
      setactiveCard(0)
      setCard(0)
    }
    if (window.innerWidth < 520 && activeWindowSize != 520) {
      activeWindowSize = 520
      setactiveCard(0)
      setCard(0)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <>
      <section className={styles.event_details_page_wrapper}>
        <Head>
          <title>Noor</title>
          <meta name="description" content="Be your own light" />
          <link rel="icon" href="/assets/images/Logos/favicon.ico" />
        </Head>
        <main>
          <div className={styles.heading}>
            <div style={{ textAlign: "center", alignItems: "center" }}>Events details</div>
          </div>
          <div className={styles.carousel}>
            <Carousel className={styles.carousel} carouselImages={carouselImages} />
          </div>
          <section className={styles.description}>
            <div className={styles.desc_container}>
              <div className={styles.desc_date}>14 Feb 2021</div>
              <div className={styles.desc_heading}>Valen'Times with Noor</div>
              <div className={styles.desc_description}>
                So many books to read, and so many series to watch. I We pick up a character we like the most … <br /> Wait, may we pick up the one we
                relate to the most? Here’s what we discovered in this session, about how several mediums teach us about our own situations and
                especially the types of love we experience - be it self love, romantic, or in a friendship.
              </div>
            </div>
          </section>
        </main>
      </section>
      <section className={styles.impressions} style={{ marginBottom: "4rem" }}>
        <div className={styles.cards_container}>
          {impressions.map((impression, index) => (
            <div
              className={styles.card}
              key={impression.id}
              id="card"
              style={{ transform: `translateX(${translateX}px)`, opacity: index !== activeCard ? "0" : "1" }}
            >
              <div className={styles.person}>
                <div className={styles.avatar}>
                  <img src={impression.img} alt={impression.img} />
                </div>
                <div className={styles.nameAndEvent}>
                  <h1>{impression.name}</h1>
                  <p>{impression.event}</p>
                </div>
              </div>
              <div className={styles.review}>{impression.review}</div>
            </div>
          ))}
        </div>
        <div className={styles.active_buttons}>
          {impressions.map((count, index) => {
            return index === activeCard ? (
              <div style={{ marginRight: index !== impressions.length ? "1.2rem" : "0px", color: "#707070", cursor: "pointer" }}>
                <BsCircleFill
                  onClick={() => {
                    setCard(index)
                  }}
                />
              </div>
            ) : (
              <div style={{ marginRight: index !== impressions.length ? "1.2rem" : "0px", color: "#ffffff", cursor: "pointer" }}>
                <BsCircleFill
                  onClick={() => {
                    setCard(index)
                  }}
                />
              </div>
            )
          })}
        </div>
      </section>

      {/* <section className={styles.similar_events}>
        <h1 className={styles.similar_heading}>Similar Upcomming Events</h1>
        <div style={{ display: "flex" }} className={styles.cards}>
          {upcomingEventsData.map((element) => {
            return (
              <div className={styles.upcoming_card}>
                <div className={styles.text_content} style={{ backgroundColor: element.bgColor }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={styles.upcomming_date}>18 jan 2021</div>
                    <div className={styles.upcomming_title}>Mental health awareness seminar</div>
                    <div className={styles.upcomming_description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna</div>
                    <Link href="/events/register/example">
                      <button className={styles.register}>Register</button>
                    </Link>
                  </div>
                </div>
                <div className={styles.upcomming_image} style={{ backgroundImage: `url(${element.bgUrl})` }}></div>
              </div>
            )
          })}
        </div>
      </section> */}
    </>
  )
}

// cosnt cardsSection

export default Register
