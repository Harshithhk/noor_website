import React, { useEffect } from "react"
import styles from "../individual_blog.module.css"
// import blogCard from "../../../components/cards/blog-card/BlogCard"
import BlogCard from "../../../components/cards/blog-card/BlogCard"
import { useRouter } from "next/router"
import cx from "classnames"
import Head from "next/head"

var upcomingEventsData = [
  {
    id: 1,
    bgColor: "#FCD5E4",
    name: "Team Noor",
    title: `Why your friend ≠ a therapist`,
    label: "label",
    date: "29 aug 2020",
    bgUrl: "/assets/images/Blog/Blog1.jpg",
    link: "/blogs/1",
  },
  {
    id: 2,
    bgColor: "#AAF1DB",
    name: "Team Noor",
    title: "Counselling or therapy? Are they the same?",
    label: "label",
    date: "29 aug 2020",
    bgUrl:
      "https://images.unsplash.com/photo-1510739859545-e7b9e979de86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    link: "/blogs/2",
  },
]
const index = () => {
  const router = useRouter()
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <section className={styles.blog_page_wrapper}>
      <Head>
        <title>Noor</title>
        <meta name="description" content="Be your own light" />
        <link rel="icon" href="/assets/images/Logos/favicon.ico" />
      </Head>
      <main>
        <div className={styles.heading}>
          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_left.png" alt="" />
          </div>
          <div style={{ textAlign: "center", alignItems: "center" }}>Happy international men's day</div>

          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_right.png" alt="" />
          </div>
        </div>
        <div className={styles.img_container}>
          <img src="https://i.imgur.com/XPUb2I6.png" alt="" />
        </div>
        <div className={styles.minor_text}>This year, let's erase the "men will be men"</div>
        <div className={styles.blog}>
          I hope the world apologizes to you for all the emotional neglect coming your way. I, in my own ways, have considered the men in my life to
          have it all figured out and have always complained about the freedom of security that comes with the gender involved.
          <br /> <br />
          Yes, they claim women mature earlier than men, but how can a little boy who was taught to never express discomfort and pain, mature even at
          a persistent age? Yes, women are earning, but in the extremist fight to make women independent, we forgot to help men too. We taught our
          women ways of empowerment but forgot to show men the basics of support. I see you. You want to break societal barriers and support women.
          You want to cry for your family and friends. You want to call out other toxic masculine powers who offend you. You no longer sit there and
          listen to them make sexist jokes and claim to be the best men out there, you stand up.
          <br /> <br />
          You stand up to every person who follows the gender conforming gazes instead of just being themselves. You might be struggling right now,
          but it will be worth it. I know you don't want to be defined by toxic traits but I cannot promise a global wave of transformed hearts this
          year or any upcoming year. but I can promise you that there are many people surviving under this blanket of atmosphere and all they want is
          for their voice to reach you. They want you to know that you are everything you believe that you are and want to be. <br /> <br />
          Happy men's day to those who have been wanting to be noticed as a man and hoping the people around would use the appropriate pronouns. Happy
          men's day to each one of you who conforms with the identity of a gender. Happy men's day to the teenage tomboys who are being body shamed,
          to the men selling scented candles, to the men working for women NGOs, to those who are working for the queer community, to those who
          proudly use the pronouns he/they/him, to the men who suppress their tears in front of their family, to the men who carry the pressure of
          being enough for their family one day, to all the women who support men and stand by their journey of emotional growth.
          <br /> <br />
          <ul>
            <li>
              {" "}
              <b>
                Today isn't a gender victory, it is a victory for this generation. The men of this generation will erase all the definitions one day.
              </b>
            </li>{" "}
          </ul>
          &ensp; &ensp; &ensp; &ensp;so dear sexist assholes, <br />
          &ensp; &ensp; &ensp;&ensp; stay tuned.
          <br /> <br />I am sorry your chats are not flooded with empowering words from other men. I am sorry that some part of the fucked up world
          makes you feel bad for having an intimate bond with your guy friend. I am sorry that being the closest best friend to a girl makes you sound
          like a hidden lover longing for the sun. I am sorry that we tell women to not tear eachother down while there are abusive, manipulative
          boyfriends out there who tell their girlfriends to stay away from men, because they know "what all men are like and what all men actually
          want". I am sorry that you are asexual and seek a platonic relationship, but the world keeps calling you a sex addict who's hiding under a
          mask. I am sorry that we have failed to let you be the real you.
          <br /> <br />{" "}
          <b>
            This year, let's erase the "men will be men" <br />
            Let's all preach "men will be humans too".{" "}
          </b>
        </div>
        <div className={styles.similar_blogs}>Similar blogs</div>
        <div className={styles.similar_blog_cards}>
          {upcomingEventsData.map((element) => {
            // return <Blogcard key={element.id} height="270" width="400" bgColor={element.bgColor} bgUrl={element.bgUrl} />;
            return (
              <div className={styles.card_container}>
                <BlogCard
                  key={element.id}
                  height="270"
                  width="400"
                  bgColor={element.bgColor}
                  bgUrl={element.bgUrl}
                  id={element.id}
                  title={element.title}
                  name={element.name}
                  link={element.link}
                />
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default index
