import React, { useEffect } from "react"
import styles from "../individual_blog.module.css"
// import blogCard from "../../../components/cards/blog-card/BlogCard"
import BlogCard from "../../../components/cards/blog-card/BlogCard"
import { useRouter } from "next/router"
import cx from "classnames"

var upcomingEventsData = [
  {
    id: 1,
    bgColor: "#FCD5E4",
    bgUrl:
      "https://images.unsplash.com/photo-1622837633469-ee5b894a4f59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
  },
  {
    id: 2,
    bgColor: "#AAF1DB",
    bgUrl:
      "https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
  },
]
const index = () => {
  const router = useRouter()
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <section className={styles.blog_page_wrapper}>
      <main>
        <div className={styles.heading}>
          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_left.png" alt="" />
          </div>
          <div style={{ textAlign: "center", alignItems: "center" }}>Counselling or therapy? Are they the same?</div>

          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_right.png" alt="" />
          </div>
        </div>
        <div className={styles.img_container}>
          <img src="/assets/images/Blog/Blog_img_placeholder.png" alt="" />
        </div>
        <div className={styles.minor_text}>Drawing the line between therapy and counselling</div>
        <div className={styles.blog}>
          COUNSELLING - <br /> <br />
          <ul>
            <li>Short-term, problem focused approach</li>
            <li>A here and now approach</li>
            <li>Improves efficiency in daily life activities related to concerned issue.</li>
            <li>
              Effective in dealing with individuals with mild discomfort and those who are aware of the problem, i.e. those having insight and can
              think rationally.
            </li>
            <li>Common examples – career choices related issues, pre-marital doubts and issues, educational and teaching related issues</li>
          </ul>
          <br />
          <br />
          THERAPY - <br /> <br />
          <ul>
            <li>Long term, individual focused approach</li>
            <li>A then and there approach</li>
            <li>A then and there approach</li>
            <li>A personality reconstructive process is followed so as to make the individual deal with issues independently.</li>
            <li>
              Effective not only with mild to moderate, but also severely discomforted individuals as the main focus is to help the client gain
              insight, accept who she/he is and makes the client find ways to work out of the problem as independently as possible
            </li>
            <li>
              Common examples – patients dealing with mental disorders such as depression, OCD, PTSD etc. , individuals in severe grief, individuals
              looking for personal growth to achieve ultimate peace of mind.
            </li>
          </ul>
          <br /> <br />
          HOW TO DEAL WITH AN INDIVIDUAL DEALING WITH MENTAL HEALTH ISSUES? <br />
          <ul>
            <li>
              Experiencing and reflecting empathy - Empathy means “the ability to sense other people’s emotions, coupled with the ability to imagine
              what someone else might be thinking or feeling,” <br /> e.g. – before approaching the individual, imagine yourself to be in that trouble
              and think about how you have liked to be approached – whether with constant questioning about your illness or just to enquire about who
              you really are.
            </li>{" "}
            <br />
            <li>
              {" "}
              Practising Self- acceptance and accepting others as they are - an agreeable demeanour toward a concept, position, individual, or group.{" "}
              <br />
              e.g. – always remember that you too are human and do experience numerous emotions in high and low degrees. Similarly, the other person’s
              emotional experience may seem to be either too high or too low and hence, accepting the fact that yes, as humans each person has his/her
              own preferences, experiences and ways of expression just as you have.
            </li>{" "}
            <br />
            <li>
              Dealing with mental illnesses that are not curable – once we accept the fact that as humans anything can happen to anyone in any degree,
              we reduce passing hurtful comments along with a gaze which does not disturb such individuals.
            </li>{" "}
            <br />
            <li>
              All they want to know is that they are a part of our society as we are. Hence, treating them as humans is the key to help them live
              their lives harmoniously.
            </li>
          </ul>
          <br />
          <br />
          HOW TO TAKE CARE OF SOMEONE WHO IS PHYSICALLY AWAY?
          <ul>
            <li>
              Communicate – individuals staying away from their loved ones need some reassurance from time to time. Thus, messaging or telling him/her
              on message or call that you are there for them no matter what and that you care for them and miss them has a positive impact on their
              overall behaviour.
            </li>{" "}
            <br />
            <li>
              Help them accept reality – let them know that there might come testing times and that they would have to find their ways on their own.
              However, your support, time, love and effort will always be available for them.{" "}
            </li>{" "}
            <br />
            <li>
              Listen carefully – staying away from loved ones is one of the most life turning and challenging act one can go through and hence, at
              times, all they need is an ear to lust listen to what they are feeling and an assurance that they are strong and are capable of all the
              challenges they are facing.
            </li>
            <li>
              Encourage them – reminders about their strengths and sharing light moments while discussing about funny incidents will help them
              remember who they are and why they are away.{" "}
            </li>
            <li>
              Nothing is permanent – sometimes, being away is just a phase, however, a regular reminder that they soon shall be with their loved one
              keeps them motivated and helps work better.
            </li>
          </ul>
        </div>
        <div className={styles.similar_blogs}>Similar blogs</div>
        <div className={styles.similar_blog_cards}>
          {upcomingEventsData.map((element) => {
            // return <Blogcard key={element.id} height="270" width="400" bgColor={element.bgColor} bgUrl={element.bgUrl} />;
            return (
              <div className={styles.card_container}>
                <BlogCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default index
