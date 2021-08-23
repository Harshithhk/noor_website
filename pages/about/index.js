import React from "react"
import styles from "./about_us.module.css"
import ResponsivePlayer from "../../components/video-player/ResponsivePlayer"
import cx from "classnames"
const index = () => {
  return (
    <>
      <section className={styles.about_us_page_wrapper}>
        <main>
          <div className={styles.heading}>
            <div style={{ textAlign: "center", alignItems: "center" }}>About Us</div>
          </div>
          <div className={styles.video}>
            <img src="/assets/images/video-placehholder.png" alt="" />
          </div>
          <section>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Founder's message</div>
            </div>
            <div className={styles.founders_message}>
              <div className={cx(styles.message_img, styles.display)}>
                <img src="/assets/images/Group.png" alt="" />
              </div>
              <div className={styles.message}>
                <div className={styles.message_heading}>Hello there!</div>
                <p className={styles.message_description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  <br /> <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet.{" "}
                  <div style={{ marginTop: "0.70rem" }}>
                    {" "}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam
                  </div>
                </p>
              </div>
              <div className={cx(styles.message_img, styles.hide)}>
                <img src="/assets/images/Group.png" alt="" />
              </div>
            </div>
          </section>
          <section className={styles.founders}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Meet the founders</div>
            </div>
            <div className={styles.person}>
              <div className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
                <img src="/assets/images/Capture.png" alt="" />
              </div>

              <div className={styles.person_details}>
                <div className={styles.right_text}>
                  <div className={styles.name}>Zeel</div>
                  <div className={styles.designation}>Designation</div>
                  <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    <span className={styles.hide}>
                      {" "}
                      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.person_details}>
                <div className={styles.left_text}>
                  <div className={styles.name}>Mugdha</div>
                  <div className={styles.designation}>Designation</div>
                  <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    <span className={styles.hide}>
                      {" "}
                      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt.
                    </span>
                  </div>
                </div>
              </div>
              <div className={cx(styles.person_image, styles.right)} style={{ paddingLeft: " 5rem" }}>
                <img src="/assets/images/Capture1.png" alt="" />
              </div>
            </div>
            <div className={styles.person}>
              <div className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
                <img src="/assets/images/Capture2.png" alt="" />
              </div>

              <div className={styles.person_details}>
                <div className={styles.right_text}>
                  <div className={styles.name}>Piyush</div>
                  <div className={styles.designation}>Designation</div>
                  <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    <span className={styles.hide}>
                      {" "}
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Meet the team</div>
            </div>
            <div className={styles.meet_the_team_avatars}>
              <div className={styles.avatar_row} style={{ display: "flex", justifyContent: "space-around" }}>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar1.svg" alt="" />
                  <div className={styles.avatar_name}> Manas </div>
                </div>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar2.svg" alt="" />
                  <div className={styles.avatar_name}> Manasvi </div>
                </div>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar3.svg" alt="" />
                  <div className={styles.avatar_name}> Tejaswini </div>
                </div>
              </div>
              <div className={cx(styles.avatar_row, styles.right_row)} style={{ display: "flex", justifyContent: "space-around", marginTop: "3rem" }}>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar4.svg" alt="" />
                  <div className={styles.avatar_name}> Ramesh </div>
                </div>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar5.svg" alt="" />
                  <div className={styles.avatar_name}> Ashish </div>
                </div>
                <div className={styles.avtars_container}>
                  <img src="/assets/images/Meet-the-team/Avatar6.svg" alt="" />
                  <div className={styles.avatar_name}> Jenna </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.heading} style={{ marginTop: "2rem" }}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Say hi!</div>
            </div>
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
        </main>
      </section>
    </>
  )
}

export default index
