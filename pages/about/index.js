import React, { useState, useEffect } from "react"
import styles from "./about_us.module.css"
import ResponsivePlayer from "../../components/video-player/ResponsivePlayer"
import cx from "classnames"
import Aos from "aos"
import "aos/dist/aos.css"

const index = () => {
  const [modalDetails, setModalDetails] = useState()
  const [modalActive, setModalActive] = useState(false)

  const handleModal = (person) => {
    setModalDetails(person)
    setModalActive(true)
  }

  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])

  return (
    <>
      <section className={styles.about_us_page_wrapper}>
        <main>
          <div className={styles.heading}>
            <div data-aos="zoom-in" style={{ textAlign: "center", alignItems: "center" }}>
              About Us
            </div>
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
                  Growing up, I always wished I had an influence in my life who would help me navigate through the emotional turmoil I went through.
                  Someone with a non-judgemental attitude, someone I wasn’t scared of, someone who’d tell me that no problem in my life is bigger than
                  me, someone who would help me realise my potential. Noor is that someone for me. <br /> Noor empowers me and encourages me to level
                  up everyday.
                  <br /> <br />
                  Our vision is to create a mentally aware and psychologically healthier society. Our mission is to create and provide efficient
                  mental health services, psycho-education and empower individuals through self awareness.
                  {/* <div style={{ marginTop: "0.70rem" }}>
                    So here we are, 2 years down the line known as Team Noor. Noor was born in the June of 2019. It was a result of my (Zeel’s) past
                    experiences and the need for someone{" "}
                  </div> */}
                </p>
              </div>
              <div className={cx(styles.message_img, styles.hide)}>
                <img src="/assets/images/Group.png" alt="" />
              </div>
            </div>
          </section>
          <section className={styles.founders}>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Meet the team</div>
            </div>
            <div className={styles.person}>
              <div data-aos="fade-right" className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
                <img src="/assets/images/Meet-the-founders/Founder1.svg" alt="" />
              </div>

              <div className={styles.person_details}>
                <div className={styles.right_text}>
                  <div className={styles.name}>Zeel</div>
                  <div className={styles.designation}>Founder</div>
                  <div data-aos="fade-in " data-aos-delay="0" className={styles.text}>
                    Zeel is an aspiring entrepreneur. A teacher by profession and a budding Educational Psychologist.
                    <span className={styles.hide}>
                      She enjoys talking about human behaviour, has an inquisitive personality and problem solving attitude.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.person_details}>
                <div className={styles.left_text}>
                  <div className={styles.name}>Mugdha</div>
                  <div className={styles.designation}>Co-founder</div>
                  <div data-aos="fade-in " data-aos-delay="0" className={styles.text}>
                    A budding clinical psychologist. She enjoys pondering upon the existence of several things and exploring different fields.
                    <span className={styles.hide}> She’s a tagged juvenile spirit, an approachable person and a patient listener.</span>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className={cx(styles.person_image, styles.right)} style={{ paddingLeft: " 5rem" }}>
                <img src="/assets/images/Meet-the-founders/Founder2.svg" alt="" />
              </div>
            </div>
            <div className={styles.person}>
              <div data-aos="fade-right" className={cx(styles.person_image, styles.left)} style={{ paddingRight: " 5rem" }}>
                <img src="/assets/images/Meet-the-founders/Founder3.svg" alt="" />
              </div>

              <div className={styles.person_details}>
                <div className={styles.right_text}>
                  <div className={styles.name}>Piyush</div>
                  <div className={styles.designation}>Co-founder</div>
                  <div data-aos="fade-in " data-aos-delay="0" className={styles.text}>
                    An open book, fantastic conversationalist and the typical extrovert who keeps things transparent and straightforward.
                    <span className={styles.hide}> He enjoys interacting and getting to know new people.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.person_details}>
                <div className={styles.left_text}>
                  <div className={styles.name}>Sejal</div>
                  <div className={styles.designation}>Manager</div>
                  <div data-aos="fade-in " data-aos-delay="0" className={styles.text}>
                    Combine goofy smiles with comfortable conversations; ambitious professionalism and you meet Sejal.
                    <span className={styles.hide}>
                      A maturing psychology student, working towards creating a community which would be aware of mental health and well-being.
                    </span>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className={cx(styles.person_image, styles.right)} style={{ paddingLeft: " 5rem" }}>
                <img src="/assets/images/Meet-the-founders/Founder2.svg" alt="" />
              </div>
            </div>
          </section>
          {/* <section>
            <div className={styles.heading}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Meet the team</div>
            </div>
            <div className={styles.meet_the_team_avatars}>
              <div className={styles.avatar_row} style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Manas",
                      img: "/assets/images/Meet-the-team/Avatar1.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar1.svg" alt="" />
                  <div className={styles.avatar_name}> Manas </div>
                </div>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Manasvi",
                      img: "/assets/images/Meet-the-team/Avatar2.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar2.svg" alt="" />
                  <div className={styles.avatar_name}> Manasvi </div>
                </div>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Tejaswini",
                      img: "/assets/images/Meet-the-team/Avatar3.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar3.svg" alt="" />
                  <div className={styles.avatar_name}> Tejaswini </div>
                </div>
              </div>
              <div className={cx(styles.avatar_row, styles.right_row)} style={{ display: "flex", justifyContent: "space-around", marginTop: "3rem" }}>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Ramesh",
                      img: "/assets/images/Meet-the-team/Avatar4.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar4.svg" alt="" />
                  <div className={styles.avatar_name}> Ramesh </div>
                </div>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Ashish",
                      img: "/assets/images/Meet-the-team/Avatar5.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar5.svg" alt="" />
                  <div className={styles.avatar_name}> Ashish </div>
                </div>
                <div
                  data-aos="fade-in"
                  className={styles.avtars_container}
                  onClick={() =>
                    handleModal({
                      name: "Jenna",
                      img: "/assets/images/Meet-the-team/Avatar6.svg",
                      designation: "Designation",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr.",
                    })
                  }
                >
                  <img src="/assets/images/Meet-the-team/Avatar6.svg" alt="" />
                  <div className={styles.avatar_name}> Jenna </div>
                </div>
              </div>
            </div>
            {modalActive && (
              <section
                className={styles.person_modal_wrapper}
                onClick={(e) => {
                  e.preventDefault()
                  setModalActive(false)
                }}
              >
                <div className={styles.person_modal}>
                  <div className={styles.person_modal_content}>
                    <div className={styles.person_modal_image}>
                      <img src="/assets/images/Meet-the-team/Avatar2.svg" alt="" />
                    </div>
                    <div className={styles.person_modal_details}>
                      <div className={styles.person_modal_name}>{modalDetails.name}</div>
                      <div className={styles.person_modal_designation}>{modalDetails.designation}</div>
                      <div className={styles.person_modal_text}>{modalDetails.text}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </section> */}

          <section>
            <div className={styles.heading} style={{ marginTop: "2rem" }}>
              <div style={{ textAlign: "center", alignItems: "center" }}>Say hi!</div>
            </div>
            <div className={styles.about_us_form}>
              <div data-aos="zoom-in" className={styles.about_us_form_img}>
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
