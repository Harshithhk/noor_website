import React, { useEffect } from "react"
import styles from "./individual_blog.module.css"
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
          Popularly, therapists and counselors are people with whom we share our daily life situations and reflect over them. Ideally, friends are
          people with whom we share our happy-sad moments and make each other's lives better. Seems pretty close to what a therapist does, right?
          <br /> <br />
          my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps
          quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
          prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
          quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
          blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.
          Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job,
          kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury
          box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
          Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz
          <br /> <br />
          Technically, a therapist is-
          <br /> <br /> ' game. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
          Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
          fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my
          junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax
          quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart
          jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
          The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A
          wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game. The quick, brown fox jumps over a lazy dog.
          DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
          jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs
          vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven
          jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five qu
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
