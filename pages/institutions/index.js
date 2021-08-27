import styles from "./institutions.module.css"
import BlogCard from "../../components/cards/blog-card/BlogCard"

var upcomingEventsData = [
  {
    id: 1,
    bgColor: "#FCD5E4",
    title: "Metal health awareness seminar",
    bgUrl:
      "https://images.unsplash.com/photo-1622837633469-ee5b894a4f59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
  },
  {
    id: 2,
    bgColor: "#AAF1DB",
    title: "Metal health awareness seminar",
    bgUrl:
      "https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
  },
]

const index = () => {
  return (
    <section className={styles.institutions_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div style={{ textAlign: "center", alignItems: "center" }}>Institution Reach</div>
        </div>
        <div className={styles.institution_reach_information}>
          <div className={styles.institution_reach_image}>
            <img src="/assets/images/institution-reach.svg" height="90%" width="90%" style={{ paddingLeft: "20px" }}></img>
          </div>
          <div className={styles.information}>
            <div className={styles.subheading}>We at Noor partner with multiple institutions across the city to provide mental healthcare</div>
            <div className={styles.text_info}>
              Youth is the greatest asset of any economy, therefore it is important that they remain physically and mentally fit! We conduct
              interactive sessions at academic institutions for adolescents, pertaining to psychoeducation and self-development. These sessions are
              conducted by credible youngsters from various fields, making it a holistic approach towards self-development. <br /> Sessions requiring
              expertise on the deeper and more sensitive topics of mental health, such as suicide awareness and prevention, are conducted by certified
              mental health professionals.
            </div>
          </div>
        </div>
        <div className={styles.other_institutions}>
          <div className={styles.institution_card}>
            <div className={styles.card_image_container}>
              <img src="/assets/images/Institutions/Insti_placeholder_img.png" alt="" />
            </div>
            <div className={styles.institution_card_content}>
              <div className={styles.card_content_text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.
              </div>
              <div className={styles.card_bottom_img}>
                <img src="/assets/images/Institutions/bottom_img1.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.institution_card}>
            <div className={styles.card_image_container}>
              <img src="/assets/images/Institutions/Insti_placeholder_img.png" alt="" />
            </div>
            <div className={styles.institution_card_content}>
              <div className={styles.card_content_text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.
              </div>
              <div className={styles.card_bottom_img}>
                <img src="/assets/images/Institutions/bottom_img2.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.institution_card}>
            <div className={styles.card_image_container}>
              <img src="/assets/images/Institutions/Insti_placeholder_img.png" alt="" />
            </div>
            <div className={styles.institution_card_content}>
              <div className={styles.card_content_text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.
              </div>
              <div className={styles.card_bottom_img}>
                <img src="/assets/images/Institutions/bottom_img3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.similar_blogs}>Featured blogs</div>
        <div className={styles.similar_blog_cards}>
          {upcomingEventsData.map((element) => {
            return (
              <div className={styles.card_container}>
                <BlogCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} title={element.title} />
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default index
