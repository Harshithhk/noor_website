import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "./home.module.css"
import styles1 from "./events/eventdetails/event_details.module.css"
import styles2 from "./bubbles.module.css"
import cx from "classnames"
import Footer from "../components/footer"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import Link from "next/link"
import Aos from "aos"
import "aos/dist/aos.css"
import Gallery from "../components/image-gallery"
import ReactPlayer from "react-player"

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
]

export default function Home() {
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

  const whatsNewData = [
    {
      id: 1,
      img: "/assets/images/WhatsNew-Placeholders/Test1.png",
      label: "Counselling",
      event: "One on one counselling",
      details:
        " One on one counselling sessions with Aksha Juvekar - Book a session to explore yourself, manage your emotions, and find healthier ways to cope with everyday life challenges. ",
    },
    {
      id: 2,
      img: "/assets/images/WhatsNew-Placeholders/Test3.png",
      label: "Event",
      event: "Unfold: Relationships ",
      details:
        "Your relationship with yourself is your best investment. Spend some time exploring your relationships with self and others at Unfold.  ",
    },
  ]

  const [whatWeDoImages, setWhatWeDoImages] = useState(() => [
    { original: "/assets/images/WhatsOld-Placeholders/Right-Large.PNG", thumbnail: "/assets/images/WhatsOld-Placeholders/Right-Large.PNG" },
    { original: "/assets/images/WhatsOld-Placeholders/left-small.jpg", thumbnail: "/assets/images/WhatsOld-Placeholders/left-small.jpg" },
    { original: "/assets/images/WhatsOld-Placeholders/left-tiny.jpg", thumbnail: "/assets/images/WhatsOld-Placeholders/left-tiny.jpg" },
    { original: "/assets/images/WhatsOld-Placeholders/left-tiny2.png", thumbnail: "/assets/images/WhatsOld-Placeholders/left-tiny2.png" },
    { original: "/assets/images/WhatsOld-Placeholders/left-tiny4.jpg", thumbnail: "/assets/images/WhatsOld-Placeholders/left-tiny4.jpg" },
    { original: "/assets/images/WhatsOld-Placeholders/left-tiny3.jpg", thumbnail: "/assets/images/WhatsOld-Placeholders/left-tiny3.jpg" },
  ])
  const [carouselImages, setCarouselImages] = useState(() => whatWeDoImages)

  const handleClick = (obj) => {
    let imgsTemp = whatWeDoImages.filter((img) => obj !== img)
    imgsTemp.unshift(obj)
    setCarouselImages(() => imgsTemp)

    setGalleryActive(true)
  }

  const [galleryActive, setGalleryActive] = useState(false)

  const [activeCard, setactiveCard] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  var activeWindowSize = 1080

  const setCard = (index) => {
    let multiplier = activeCard - index
    setactiveCard(() => index)
    const card = document.getElementById("card")
    setTranslateX(() => translateX + multiplier * (card.offsetWidth + 480))
  }

  const [activeCard2, setactiveCard2] = useState(0)
  const [translateX2, setTranslateX2] = useState(0)
  var activeWindowSize = 1080

  const setCard2 = (index) => {
    let multiplier = activeCard2 - index
    setactiveCard2(() => index)
    const card = document.getElementById("card2")
    setTranslateX2(() => translateX2 + multiplier * (card.offsetWidth + 480))
  }

  const handleResize = () => {
    if (window.innerWidth < 650 && window.innerWidth > 520 && activeWindowSize != 650) {
      activeWindowSize = 650
      setactiveCard(0)
      setactiveCard2(0)
      setCard(0)
      setCard2(0)
    }
    if (window.innerWidth < 520 && activeWindowSize != 520) {
      activeWindowSize = 520
      setactiveCard(0)
      setactiveCard2(0)
      setCard(0)
      setCard2(0)
    }
  }

  const fontColors = ["#F8C5D8", "#7881db", "#D8BCE8"]

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    Aos.init({ duration: 500, delay: 20 })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div>
      <Head>
        <title>Noor</title>
        <meta name="description" content="Be your own light" />
        <link rel="icon" href="/assets/images/Logos/favicon.ico" />
      </Head>
      <section className={styles.home_wrapper}>
        {galleryActive && <Gallery images={carouselImages} setGalleryActive={setGalleryActive} />}
        <main>
          <section>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center", display: "flex" }}>
                What is Noor <div className={styles.question_mark}>?</div>
              </div>
            </div>
            <div className={styles._noor_bg_container}>
              <img className={styles.noor_bg_img} src="/assets/images/Utils/Background_noor.png" alt="" />
              <div className={cx(styles2.bubble, styles2.b1)}>
                <div data-aos="zoom-in" data-aos-delay="20" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B3.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Be your own light
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b2)}>
                <div data-aos="zoom-in" data-aos-delay="0" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B2.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Interactive <div className={cx(styles2.b2_inner, styles2.b_inner)}>- engage in meaningful conversations </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b3)}>
                <div className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B1.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    New connections <div className={cx(styles2.b3_inner, styles2.b_inner)}>– find like-minded people </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b4)}>
                <div className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B4.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Self-awareness<div className={cx(styles2.b4_inner, styles2.b_inner)}>– speak your truth </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b5)}>
                <div data-aos="zoom-in" data-aos-delay="0" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B2.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Safe space <div className={cx(styles2.b5_inner, styles2.b_inner)}>– non-judgmental environment </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b6)}>
                <div data-aos="zoom-in" data-aos-delay="50" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B3.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Inspiring <div className={cx(styles2.b6_inner, styles2.b_inner)}>- we heal together </div>
                  </div>
                </div>
              </div>
              {/* <div className={cx(styles2.bubble, styles2.b7)}>
                <div className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B1.png" alt="" />
                  <div className={styles2.bubble_text}>This is Noor B7</div>
                </div>
              </div> */}
              <div className={cx(styles2.bubble, styles2.b8)}>
                <div data-aos="zoom-in" data-aos-delay="0" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B4.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Inclusive <div className={cx(styles2.b8_inner, styles2.b_inner)}> – we hear you!</div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b9)}>
                <div className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B1.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Psycho-education <div className={cx(styles2.b9_inner, styles2.b_inner)}>– learn & stay mentally healthy </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b10)}>
                <div data-aos="zoom-in" data-aos-delay="20" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B2.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Be your own light
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b11)}>
                <div data-aos="zoom-in" data-aos-delay="1000" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B3.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Collaborative <div className={cx(styles2.b11_inner, styles2.b_inner)}> – the more, the merrier</div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b12)}>
                <div data-aos="zoom-in" data-aos-delay="100" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B2.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Faith <div className={cx(styles2.b12_inner, styles2.b_inner)}> – trust, and things may mend</div>
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b13)}>
                <div data-aos="zoom-in" data-aos-delay="50" className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B4.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Be your own light
                  </div>
                </div>
              </div>
              <div className={cx(styles2.bubble, styles2.b14)}>
                <div className={styles2.bubble_wrapper}>
                  <img src="/assets/images/Bubbles/B3.png" alt="" />
                  <div className={styles2.bubble_text} style={{ color: `${fontColors[Math.floor(Math.random() * 3)]}` }}>
                    Self-awareness <div className={cx(styles2.b14_inner, styles2.b_inner)}>– speak your truth </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.transformation}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>
                <div className={styles.inner_heading}>Here's what's new</div>
                <img className={styles.inner_img} src="/assets/images/Utils/BackgroundHeading2.png" alt="" />
              </div>
            </div>
            <div className={cx(styles.whats_new_bg_container, styles.bg_container_1)}>
              <section className={styles1.impressions_home}>
                <div className={cx(styles1.cards_container, styles.whats_new_cards_container)}>
                  {whatsNewData.map((data, index) => (
                    <div
                      className={cx(styles1.card, styles.whats_new_card)}
                      key={data.id}
                      id="card"
                      style={{ transform: `translateX(${translateX}px)`, opacity: index !== activeCard ? "0" : "1" }}
                    >
                      <div className={styles.new_img_container}>
                        <img src={data.img} alt="" style={{ width: index == 1 ? "90%" : "100%" }} />
                      </div>
                      <div className={styles.whats_new_content}>
                        <div className={styles.label}>{data.label}</div>
                        <div className={styles.event_name}>{data.event}</div>
                        <div className={styles.event_details}>{data.details}</div>
                        <Link href="/events/register/example">
                          <button className={styles.register_button}>Seek Help</button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={cx(styles1.active_buttons, styles.active_buttons)} style={{ transform: "TranslateY(-20px)" }}>
                  {whatsNewData.map((count, index) => {
                    return index === activeCard ? (
                      <div style={{ marginRight: index !== whatsNewData.length ? "1.2rem" : "0px", color: "#707070", cursor: "pointer" }}>
                        <BsCircleFill
                          onClick={() => {
                            setCard(index)
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ marginRight: index !== whatsNewData.length ? "1.2rem" : "0px", color: "#ffffff", cursor: "pointer" }}>
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
            </div>
            <Link href="/events">
              <div className={styles.see_all_events}>See all events</div>
            </Link>
          </section>
          <section className={styles.transformation2}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>
                <div className={styles.inner_heading}>Here's what we do</div>
                <img className={styles.inner_img} src="/assets/images/Utils/BackgroundHeading2.png" alt="" />
              </div>
            </div>
            <div className={cx(styles.whats_new_bg_container, styles.bg_container_2)} style={{ flexDirection: "column", height: "50rem" }}>
              <div className={styles.graphic_container}>
                <div className={styles.left_holder}>
                  <div className={styles.left_large} onClick={() => handleClick(whatWeDoImages[2])}>
                    <img src="/assets/images/WhatsOld-Placeholders/left-tiny.jpg" alt="" />
                  </div>
                  <div className={styles.left_small}>
                    <div className={styles.left_left}>
                      <div className={styles.left_small_img} onClick={() => handleClick(whatWeDoImages[1])}>
                        <img src="/assets/images/WhatsOld-Placeholders/left-small.jpg" alt="" />
                      </div>
                      <div className={styles.left_small_img} onClick={() => handleClick(whatWeDoImages[3])}>
                        <img src="/assets/images/WhatsOld-Placeholders/left-tiny2.png" alt="" />
                      </div>
                    </div>
                    <div className={styles.right_right}>
                      <div className={styles.left_small_img} onClick={() => handleClick(whatWeDoImages[4])}>
                        <img src="/assets/images/WhatsOld-Placeholders/left-tiny4.jpg" alt="" />
                      </div>
                      <div className={styles.left_small_img} onClick={() => handleClick(whatWeDoImages[5])}>
                        <img src="/assets/images/WhatsOld-Placeholders/left-tiny3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.right_holder} onClick={() => handleClick(whatWeDoImages[0])}>
                  <img src="/assets/images/WhatsOld-Placeholders/Right-Large.PNG" alt="" srcset="" />
                </div>
              </div>
              <div data-aos="fade-in" data-aos-delay="0" className={styles.old_content}>
                <div className={styles.old_content_name}>Unfold and Reflect</div>
                <div className={styles.old_content_text}>
                  'Unfold' and 'Reflect' are our monthly theme-based sessions. The modules of these sessions have been curated by our team. Through
                  these sessions we provide a non-judgmental platform for one to explore and express self. It is also an opportunity for individuals
                  to make new connections and gain more information about professional mental health services. Be a part of our community as there is
                  a lot to learn from others’ experiences too!
                </div>
              </div>
              <div className={styles.line}></div>
            </div>
          </section>
          <section className={styles.transformation3}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>
                <div className={styles.inner_heading}>Looking for help?</div>
                <img className={styles.inner_img} src="/assets/images/Utils/BackgroundHeading2.png" alt="" />
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-delay="0"
              className={cx(styles.whats_new_bg_container, styles.bg_container_3)}
              style={{ height: "35rem" }}
            >
              <div className={styles.help_text} style={{ transform: "translateY(-40px)" }}>
                We believe that absence of mental illness doesn't necessarily mean we're psychologically healthy. Every person’s struggle is
                different. Our counselors are here to aid you manage and regulate your emotions, deal effectively with relationship issues and
                eventually empower you to be a better version of yourself, because you matter!
              </div>
            </div>
            <div className={styles.seekHelp_bg}>
              <img src="/assets/images/Utils/SeekHelp.png" alt="" />
            </div>
            <Link href="/gethelp">
              <button className={styles.seekHelp_button}>Seek Help</button>
            </Link>
          </section>
          <section className={styles.they_think}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>They think we're nice</div>
            </div>
            <section className={cx(styles1.impressions, styles.impressions)}>
              <div className={cx(styles1.cards_container, styles.whats_new_cards_container)}>
                {impressions.map((impression, index) => (
                  <div
                    className={styles1.card}
                    key={impression.id}
                    id="card2"
                    style={{ transform: `translateX(${translateX2}px)`, opacity: index !== activeCard2 ? "0" : "1" }}
                  >
                    <div className={styles1.person}>
                      <div className={styles1.avatar}>
                        <img src={impression.img} alt={impression.img} />
                      </div>
                      <div className={cx(styles1.nameAndEvent, styles.nameAndEvent)}>
                        <h1>{impression.name}</h1>
                        <p>{impression.event}</p>
                      </div>
                    </div>
                    <div className={styles1.review}>{impression.review}</div>
                  </div>
                ))}
              </div>
              <div className={cx(styles1.active_buttons, styles.active_buttons_2)}>
                {impressions.map((count, index) => {
                  return index === activeCard2 ? (
                    <div style={{ marginRight: index !== impressions.length ? "1.2rem" : "0px", color: "#707070", cursor: "pointer" }}>
                      <BsCircleFill
                        onClick={() => {
                          setCard2(index)
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{ marginRight: index !== impressions.length ? "1.2rem" : "0px", color: "#ffffff", cursor: "pointer" }}>
                      <BsCircleFill
                        onClick={() => {
                          setCard2(index)
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          </section>

          <section className={styles.transformation4}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>
                <div className={styles.inner_heading}>Institutional Reach</div>
                <img className={styles.inner_img} src="/assets/images/Utils/BackgroundHeading2.png" alt="" />
              </div>
            </div>
            <div className={cx(styles.whats_new_bg_container, styles.bg_container_4)} style={{ height: "30rem" }}>
              <div data-aos="fade-in" className={styles.institutional_text}>
                {" "}
                We conduct interactive sessions at academic institutions for adolescents, pertaining to psychoeducation and self-development. These
                sessions are conducted by credible youngsters from various fields, making it a holistic approach towards self-development. Sessions
                requiring expertise on the deeper and more sensitive topics of mental health, such as suicide awareness and prevention, are conducted
                by certified mental health professionals.
                <Link href="/institutions">
                  <div className={styles.absolute_hyperLink}>Check out Institutes</div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}
