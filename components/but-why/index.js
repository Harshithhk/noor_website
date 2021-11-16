import React, { useEffect } from "react"
import styles from "./but_why.module.css"
import cx from "classnames"
import Aos from "aos"
import "aos/dist/aos.css"

const index = () => {
  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  })
  return (
    <section className={styles.about_us_page_wrapper}>
      <section className={styles.founders}>
        <div className={styles.heading}>
          <div style={{ textAlign: "center", alignItems: "center", padding: "1rem" }}>Our counsellers can help</div>
        </div>
        <div className={styles.partners_img}>
          <img src="/assets/images/Get-Help/partners2.svg" alt="" srcset="" />
        </div>
        <div className={styles.person}>
          <div data-aos="fade-right" className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder1.svg" alt="" />
          </div>

          <div className={styles.person_details}>
            <div className={styles.right_text}>
              <div className={styles.name}>Niraja Ingle</div>
              <div className={styles.designation}>Psychologist </div>
              <div className={styles.designation_degree}> -M.A. Clinical Psychology ( Savitribai Phule University )</div>
              <div data-aos="fade-in" data-aos-delay="0" className={styles.text}>
                An approachable and comforting presence spreading awareness and involving hobbies in therapy, helping us rediscover ourselves. A
                <span className={styles.hide}>
                  Niraja is an approachable person for every age group and a comforting presence. She is working towards the creation of mental health
                  awareness in a way that every individual will flourish. She educates people by not only using formal methods of teaching but also by
                  helping them involve their hobbies and creativity at the same time.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.person_details}>
            <div data-aos="fade-in" data-aos-delay="0" className={styles.left_text}>
              <div className={styles.name}>Aksha Juvekar </div>
              <div className={styles.designation}>Psychologist</div>
              <div className={styles.designation_degree}> -M.A. Clinical Psychology ( Savitribai Phule University )</div>
              <div className={styles.text}>
                counselling expert striving to enhance the society by sharing her knowledge, aiding us to gain insight and using it for our
                betterment.
                <span className={styles.hide}>
                  {" "}
                  She is working towards the creation of mental health awareness in a way that every individual will flourish. She educates people by
                  not only using formal methods of teaching but also by helping them involve their hobbies and creativity at the same time.
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className={cx(styles.person_image, styles.right)} style={{ paddingLeft: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder2.svg" alt="" />
          </div>
        </div>
        {/* <div className={styles.person}>
          <div data-aos="fade-right" className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder1.svg" alt="" />
          </div>

          <div className={styles.person_details}>
            <div className={styles.right_text}>
              <div className={styles.name}>Name</div>
              <div className={styles.designation}>Designation</div>
              <div data-aos="fade-in" data-aos-delay="0" className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                <span className={styles.hide}>
                  {" "}
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </section>
  )
}

export default index
