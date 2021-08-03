import React from "react"
import styles from "./gethelp.module.css"
import Link from "next/link"

const index = () => {
  return (
    <>
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
      <section>
        <div style={{ paddingLeft: "14rem" }}>
          <div className={styles.question_container} style={{ borderRadius: "12px 0px 0px 12px", background: "#EEE2F7", paddingRight: "17rem" }}>
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div style={{ paddingRight: "14rem" }}>
          <div className={styles.question_container} style={{ borderRadius: "0px 12px 12px 0px", background: "#FFC8DD", paddingLeft: "17rem" }}>
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "14rem" }}>
          <div className={styles.question_container} style={{ borderRadius: "12px 0px 0px 12px", background: "#EEE2F7", paddingRight: "17rem" }}>
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
        <div style={{ paddingRight: "14rem" }}>
          <div className={styles.question_container} style={{ borderRadius: "0px 12px 12px 0px", background: "#FFC8DD", paddingLeft: "17rem" }}>
            <div className={styles.question}>Question example : Is it okay to feel this way?</div>
            <div className={styles.answer}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>
          </div>
        </div>
      </section>
      <section className={styles.partners_wrapper}>
        <div className={styles.heading} style={{ transform: "translateY(-1.5rem)" }}>
          <div style={{ fontSize: "48px" }}>Our partners can help</div>
        </div>
        <div className={styles.partners_img}>
          <img src="/assets/images/Get-Help/partners.svg" alt="" srcset="" />
        </div>
        <div className={styles.person} style={{ marginTop: "7rem" }}>
          <div className={styles.persons_image} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Capture.png" alt="" />
          </div>

          <div className={styles.person_details}>
            <div>
              <div className={styles.name}>Zeel</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.person_details}>
            <div>
              <div className={styles.name}>Mugdha</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </div>
            </div>
          </div>
          <div className={styles.persons_image} style={{ paddingLeft: " 5rem" }}>
            <img src="/assets/images/Capture1.png" alt="" />
          </div>
        </div>
        <div className={styles.person}>
          <div className={styles.persons_image} style={{ paddingRight: " 5rem" }}>
            <img src="/assets/images/Capture2.png" alt="" />
          </div>

          <div className={styles.person_details}>
            <div>
              <div className={styles.name}>Piyush</div>
              <div className={styles.designation}>Designation</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.test_portal}>
          <div className={styles.test_img}>
            <img src="/assets/images/Get-Help/questionsPortal.svg" alt="" />
          </div>
          <div className={styles.protal}>
            <div className={styles.portal_text}>Answer a few questions and we'll find the best therapist match for you</div>
            <Link href="/gethelp/questions">
              <button className={styles.portal_button}>Take the test</button>
            </Link>
          </div>
        </div>

        <section>
          <div className={styles.heading} style={{ marginTop: "2rem" }}>
            <div style={{ textAlign: "center", alignItems: "center", fontSize: "48px" }}>Reach out to us</div>
          </div>

          {/* _________________________________FORM________________________ */}

          <div className={styles.about_us_form}>
            <div className={styles.about_us_form_img}>
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
