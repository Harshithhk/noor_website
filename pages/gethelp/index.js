import React, { useEffect } from "react"
import styles from "./gethelp.module.css"
import Link from "next/link"
import ButWhy from "../../components/but-why/index"
import cx from "classnames"
import Aos from "aos"
import "aos/dist/aos.css"

const index = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 20 })
  })

  return (
    <>
      <section className={styles.events_page_wrapper}>
        <main>
          <div data-aos="zoom-in" className={styles.heading}>
            <div style={{ textAlign: "center", alignItems: "center" }}>Seek Help</div>
          </div>
          <div className={styles.imglines}>
            <div className={styles.person_image}>
              <div data-aos="fade-in" className={cx(styles.innerBg, styles.hide)}>
                <img src="/assets/images/Get-Help/journey.svg" alt="" />
              </div>
              <img className={styles.show} src="/assets/images/Get-Help/journey.svg" alt="" />
            </div>
            <div className={styles.content}>
              <div>The journey to stable mental health is a long one</div>
            </div>
          </div>
          <div className={styles.imglines}>
            <div data-aos="zoom-in" className={cx(styles.person_image, styles.show, styles.img_mg_top)}>
              <img src="/assets/images/Get-Help/Img2.svg" alt="" />
            </div>
            <div className={styles.content}>
              <div>We all feel low sometimes</div>
            </div>
            <div data-aos="fade-in" className={cx(styles.person_image, styles.hide)}>
              <img src="/assets/images/Get-Help/Img2.svg" alt="" />
            </div>
          </div>
          <div className={styles.imglines}>
            <div data-aos="fade-in" className={cx(styles.person_image, styles.hide, styles.img_mg_top)}>
              <img src="/assets/images/Get-Help/Img3.svg" alt="" />
            </div>
            <div className={cx(styles.content, styles.hide)}>
              <div>Luckily, you can start your journey from the comfort of your own home!</div>
            </div>
            <div className={cx(styles.person_image, styles.show, styles.img_mg_top)}>
              <img data-aos="fade-in" src="/assets/images/Get-Help/Img3.svg" alt="" />
            </div>
            <div className={cx(styles.content, styles.show)} style={{ marginTop: "1rem" }}>
              <div>Luckily, you can start your journey from the comfort of your own home!</div>
            </div>
          </div>
        </main>
      </section>
      <ButWhy />
      <section className={styles.questions_wrapper}>
        <div className={styles.pd_left}>
          <div
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_right)}
            style={{ borderRadius: "12px 0px 0px 12px", background: "#D5EBFE" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div className={styles.pd_right}>
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_left)}
            style={{ borderRadius: "0px 12px 12px 0px", background: "#D4FEF1" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div className={styles.pd_left}>
          <div
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_right)}
            style={{ borderRadius: "12px 0px 0px 12px", background: "#ECDAF8" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div className={styles.pd_right}>
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_left)}
            style={{ borderRadius: "0px 12px 12px 0px", background: "#FECECE" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div className={styles.pd_left}>
          <div
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_right)}
            style={{ borderRadius: "12px 0px 0px 12px", background: "#D5EBFE" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div className={styles.pd_right}>
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="500"
            className={cx(styles.question_container, styles.qc_pd_left)}
            style={{ borderRadius: "0px 12px 12px 0px", background: "#FFC8DD" }}
          >
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partners_wrapper}>
        {/* <div className={styles.test_portal}>
          <div className={styles.test_img}>
            <img src="/assets/images/Get-Help/questionsPortal.svg" alt="" />
          </div>
          <div className={styles.protal}>
            <div className={styles.portal_text}>Answer a few questions and we'll find the best therapist match for you</div>
            <Link href="/gethelp/questions">
              <button className={styles.portal_button}>Take the test</button>
            </Link>
          </div>
        </div> */}

        <section>
          <div className={styles.heading} style={{ marginTop: "2rem" }}>
            <div data-aos="fade-in" data-aos-duration="500" style={{ textAlign: "center", alignItems: "center", padding: "2rem" }}>
              Reach out to us
            </div>
          </div>
          <div className={styles.about_us_form}>
            <div data-aos="zoom-in" data-aos-duration="250" className={styles.about_us_form_img}>
              <img src="/assets/images/deskWithMonitor.svg" alt="" />
            </div>
            <div className={styles.about_us_form_inputs}>
              <div className={styles.input_container}>
                <div className={styles.label}>Name</div>
                <input className={styles.namee} spellCheck="false" type="text" />
                <div className={styles.label} style={{ marginTop: "1rem" }}>
                  Email
                </div>
                <input className={styles.email} spellCheck="false" type="text" />
                <div className={styles.label} style={{ marginTop: "1em" }}>
                  Subject
                </div>
                <input className={styles.subject} spellCheck="false" type="text" />
                <div className={styles.label} style={{ marginTop: "1rem" }}>
                  Message
                </div>
                <textarea className={styles.form_message} spellCheck="false" type="text" />
                <button className={styles.payment_button}> SUBMIT</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default index
