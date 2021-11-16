import axios from "axios"
import React, { useState, useEffect } from "react"
import styles from "./event_details.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from "next/router"
import Carousel from "../../../components/carousel/Carousel"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import moment from "moment"
import Link from "next/link"
import Head from "next/head"
import Gallery from "../../../components/image-gallery"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const getStaticPaths = async () => {
  let data = []
  try {
    const res = await axios.get("https://noor-test.herokuapp.com/api/v1/events/past")
    data = res.data
  } catch (err) {
    console.log(err)
  }

  const paths = data.map((element) => {
    return {
      params: { id: element._id.toString() },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  let data = []
  try {
    const res = await axios.get(`https://noor-test.herokuapp.com/api/v1/events/${id}`)
    data = res.data
  } catch (err) {
    console.log(err)
  }

  return {
    props: { eventDetails: data },
    revalidate: 10,
  }
}

const id = ({ eventDetails }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  } else {
    let carouselImages = eventDetails.image_urls.map((img, index) => {
      return {
        id: index,
        original: img,
        thumbnail: img,
      }
    })

    const [galleryImages, setGalleryImages] = useState(() => carouselImages)
    const [galleryActive, setGalleryActive] = useState(false)

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

    const handleClick = (obj) => {
      let imgsTemp = galleryImages.filter((img) => obj !== img)
      imgsTemp.unshift(obj)
      setGalleryImages(() => imgsTemp)

      setGalleryActive(true)
    }
    const regEx = new RegExp("\n", "g")
    const description = eventDetails.description.replace(regEx, "</br>")
    useEffect(() => {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    })

    var startingX, movingX
    var moving = false
    function touchstart(evt, input) {
      evt.preventDefault()
      startingX = input == "touch" ? evt.touches[0].clientX : evt.clientX
    }

    function touchmove(evt, cardNo, input) {
      if (!moving) {
        movingX = input == "touch" ? evt.touches[0].clientX : evt.clientX
        if (startingX + 100 < movingX) {
          if (activeCard !== 0) {
            moving = true
            setCard(activeCard - 1)
          }
        } else if (startingX - 100 > movingX) {
          if (activeCard !== impressions.length - 1) {
            moving = true
            setCard(activeCard + 1)
          }
        }
      }
    }

    function touchend(evt) {
      moving = false
    }

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running

    return (
      <>
        {galleryActive && <Gallery images={galleryImages} setGalleryActive={setGalleryActive} />}
        <section className={styles.event_details_page_wrapper}>
          <Head>
            <title>{eventDetails.title}</title>
            <meta name="description" content="Be your own light" />
            <link rel="icon" href="/assets/images/Logos/favicon.ico" />
          </Head>
          <main>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Events details</div>
            </div>
            <div className={styles.carousel}>
              <Carousel className={styles.carousel} carouselImages={carouselImages} setGalleryActive={setGalleryActive} handleClick={handleClick} />
            </div>
            <section className={styles.description}>
              <div className={styles.desc_container}>
                <div className={styles.desc_date}>{moment(eventDetails.date).format("Do MMM YY")}</div>
                <div className={styles.desc_heading}>{eventDetails.title}</div>
                <div className={styles.desc_description} dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </section>
          </main>
        </section>
        <section className={styles.impressions} style={{ marginBottom: "4rem" }}>
          <div className={styles.cards_container}>
            {impressions.map((impression, index) => (
              <div
                onTouchStart={(e) => touchstart(e, "touch")}
                onTouchMove={(e) => touchmove(e, 2, "touch")}
                onTouchEnd={(e) => touchend(e)}
                onMouseDown={(e) => touchstart(e, "mouse")}
                onMouseMove={(e) => touchmove(e, 2, "mouse")}
                onMouseUp={(e) => touchend(e)}
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
}

export default id
