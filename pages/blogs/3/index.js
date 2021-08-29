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
          <div style={{ textAlign: "center", alignItems: "center" }}>Choosing a psychologist </div>

          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_right.png" alt="" />
          </div>
        </div>
        <div className={styles.img_container}>
          <img src="/assets/images/Blog/Blog_img_placeholder.png" alt="" />
        </div>
        <div className={styles.minor_text}>Will this psychologist judge me? Will I be accepted?</div>
        <div className={styles.blog}>
          Will this psychologist judge me? Will I be accepted? How do I know that this person is going to understand what I have been through? What if
          they don't understand? And many such similar questions surround us while choosing a mental health professional.
          <br /> <br />
          But why is it important to choose the right MHP in the first place? Aren't all of them trained for the same thing?
          <br /> <br />
          The answer is; Nope <br /> <br />A person who specializes in the study of mind and behavior or in the treatment of mental, emotional, and
          behavioral disorders is a psychologist.
          <br /> <br />
          <ul>
            <li>
              One psychologist can be a practitioner of multiple subfields in psychology. They work with people from a range of backgrounds and
              personal histories. Some are more general in their practice, while others specialize in certain areas. Choosing a psychologist depends
              on the quality of their practice and the person’s individual preference. It is necessary to choose the professional who has expertise in
              the therapy required by the client/patient.
            </li>{" "}
            <br />
            <li>
              {" "}
              The role of a psychologist is to help people with mental health conditions as well as other general life challenges. It is a position of
              responsibility. Choosing a psychologist with experience in the relevant field will increase the chance of a therapy plan working. This
              will partly depend on the type of treatment a person would like to undergo. Taking into consideration the methods a psychologist uses is
              important. In a critical field like mental health, choosing an incorrect professional might turn out damaging.
            </li>{" "}
            <br />
            <li>
              {" "}
              A good rapport and relationship between a psychologist and patient/client helps in resolving sensitive issues. Look out for signs that
              speak of your comfort and healthy relationships with your psychologist. Stay in conversations about your feelings regarding the process
              of the upcoming/ongoing therapy.
            </li>{" "}
            <br />
            <li>
              {" "}
              Treatment fees vary from the institution to the private therapist you're willing to seek. Finances are a very important factor to look
              at while choosing a therapist. Choose what fits within your financial settings.
            </li>{" "}
            <br />
          </ul>
          Here is a list of some questions which you can ask your psychologist during the initial consultation,
          <ul>
            <li>About their qualifications and area of expertise</li>
            <li>
              Try striking a light conversation with them about their interests and experiences in the field so far, this may help in the rapport
              building process and will hint the comfort levels
            </li>
            <li>Inquire about the treatment fees and approximate treatment plans, techniques and schedules involved.</li>
            <li>Ask about any other queries or concerns that you as a patient may have of the upcoming treatment plan.</li>
          </ul>
          <br />
          Here we have tried to cover some basic questions one might have as a patient/client but remember it all boils down to the efforts being put
          in and the comfort being felt. And similar to every other relationship, a psychologist-client relationship is about putting in efforts for
          the benefit of healing. <br /> <br />
          Thank You!
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
