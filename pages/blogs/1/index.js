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
          <div style={{ textAlign: "center", alignItems: "center" }}>Why your friend ≠ a therapist</div>

          <div className={styles.splash}>
            <img src="/assets/images/Utils/Splash_right.png" alt="" />
          </div>
        </div>
        <div className={styles.img_container}>
          <img src="/assets/images/Blog/Blog_img_placeholder.png" alt="" />
        </div>
        <div className={styles.minor_text}>Lorem ipsum dolor sit amet, consetetur sadipscing.</div>
        <div className={styles.blog}>
          Popularly, therapists and counselors are people with whom we share our daily life situations and reflect over them. <br /> Ideally, friends
          are people with whom we share our happy-sad moments and make each other's lives better. Seems pretty close to what a therapist does, right?
          <br /> <br />
          Technically, a therapist is-
          <ul>
            <li>a person trained in methods of treating illnesses especially without the use of drugs or surgery.</li>{" "}
            <li>
              a person who helps people deal with mental or emotional problems by talking about those problems : a person trained in psychotherapy.
            </li>
          </ul>
          The process of therapy involves a relationship where you feel safe, heard, unconditionally accepted, supported, and not judged. While a
          friendship also offers similar traits, it isn't necessarily focused on you, and only you. Friendship requires reciprocity from both sides
          and is centered around both the individuals involved. <br />A therapist, on the other hand, creates an environment where therapy is provided
          and centered around only the person receiving/in need. A dual relationship in therapy is unethical; unlike in friendship, where it's a
          building block of the relation. Even if the therapist shares something personal with you, it is by keeping you as the frame of reference.{" "}
          <br /> <br />
          Another particular feature of therapy is that it creates an unbiased and non-judgemental platform. As you don't share a personal
          relationship with a therapist, they will not be influenced by personal feelings. In friendship, on the other hand, impartiality or neutral
          grounds are difficult to achieve because both the individuals are personally involved. Unlike a friend, a therapist is trained for setting
          up an objective and unbiased platform.
          <br /> <br />
          Let's look at an example,
          <br /> <br />
          Our friends just seem to know us a little too well - and this is what creates biases. Our friends are inclined to see everything from our
          perspective, because - let's see,
          <br /> <br />
          You: "Hey, I don't feel so good today. My manager told me my performance wasn't that great this month. I'm just so inefficient. I'll not be
          able to do well in the corporate world."
          <br /> <br />
          Your friend: "Damn, she did that? Ugh she doesn't even know how hard you worked. Scrap what she said, wanna have ice cream?"
          <br /> <br />
          Desserts, of course, are a great (temporary) solution to a lot of our issues.
          <br /> <br />
          But do you see growth? <br /> Pushing for individual growth is what a therapist does.
          <br /> <br />A therapist is a specially trained Mental Health Professional (MHP), while a friend is not. A person with a consecutive,
          all-consuming mental illness unloads all their problems on a friend, whose presence makes you feel heard and supported. But such continuous
          unloadings will lead to a burnt-out and stressful situation for your friend (as they are not trained).
          <br /> <br />
          Ideally , a therapist is an expert in therapeutic conversation, assessment and intervention. What to you is a casual conversation with your
          therapist, might actually be a session where you uncover and reflect on your daily life experiences.
          <br /> <br /> MHPs are termed as many titles ; a guide, helper, someone who assists you in your life's journey etc etc , we believe that a
          therapist, in simple words, is like a realistic inner voice, neither entirely positive nor negative.We can very well consider therapists as
          a beacon of light in a dark tunnel.
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
