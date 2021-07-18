import React from "react"
import styles from "./gethelp.module.css"
const index = () => {
  return (
    <section className={styles.events_page_wrapper}>
      <main>
        <div className={styles.heading}>
          <div style={{ fontSize: "48px" }}>Seek Help</div>
        </div>
        <div className={styles.imglines}>
          <div className={styles.person_image}>
            <div className={styles.innerBg}>
              <img src="/assets/images/Get-Help/Img1Inner.png" alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div>The journey to stable mental health is a long one</div>
          </div>
        </div>
        <div className={styles.imglines}>
          <div className={styles.content}>
            <div>We all feel low sometimes</div>
          </div>
          <div className={styles.person_image}>
            <img src="/assets/images/Get-Help/Img2.svg" alt="" />
          </div>
        </div>
        <div className={styles.imglines}>
          <div className={styles.person_image}>
            <img src="/assets/images/Get-Help/Img3.svg" alt="" />
          </div>
          <div className={styles.content}>
            <div>Luckily, you can start your journey from the comfort of your own home!</div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default index
