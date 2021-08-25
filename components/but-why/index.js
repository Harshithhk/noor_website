import React from "react"
import styles from "./but_why.module.css"
import cx from "classnames"

const index = () => {
  return (
    <section className={styles.about_us_page_wrapper}>
      <section className={styles.founders}>
        <div className={styles.heading}>
          <div style={{ textAlign: "center", alignItems: "center", padding: "1rem" }}>Our partners can help</div>
        </div>
        <div className={styles.partners_img}>
          <img src="/assets/images/Get-Help/partners.svg" alt="" srcset="" />
        </div>
        <div className={styles.person}>
          <div className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder3.svg" alt="" />
          </div>

          <div className={styles.person_details}>
            <div className={styles.right_text}>
              <div className={styles.name}>Name</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                <span className={styles.hide}>
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.person_details}>
            <div className={styles.left_text}>
              <div className={styles.name}>Name</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                <span className={styles.hide}>
                  {" "}
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </div>
          <div className={cx(styles.person_image, styles.right)} style={{ paddingLeft: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder2.svg" alt="" />
          </div>
        </div>
        <div className={styles.person}>
          <div className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Meet-the-founders/Founder1.svg" alt="" />
          </div>

          <div className={styles.person_details}>
            <div className={styles.right_text}>
              <div className={styles.name}>Name</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                <span className={styles.hide}>
                  {" "}
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default index
