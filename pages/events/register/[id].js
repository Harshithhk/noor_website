import React from "react"
import styles from "./register.module.css"
const Register = () => {
  return (
    <section className={styles.register_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div style={{ fontSize: "48px" }}>Register</div>
        </div>
        <div className={styles.content_description}>
          <div className={styles.img}>
            <img src="/assets/images/imagPlaceHolder.png" alt="" width="100%" />
          </div>
          <div className={styles.content_texts}>
            <div className={styles.content_texts_inner}>
              <div className={styles.event_date}>28 Jan 2021</div>
              <div className={styles.event_heading}>Mental health awareness seminar</div>
              <div className={styles.event_description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </div>
              <div className={styles.event_price}>Price : Rs. 250/-</div>
            </div>
          </div>
        </div>

        <div className={styles.participate_gateway}>
          <div className={styles.celebration_img}>
            <img src="/assets/images/celebration.svg" alt="" height="100%" />
          </div>
          <div className={styles.participate_form}>
            <div className={styles.participate_form_inner}>
              <div>
                <div className={styles.label}>Name</div>
                <input className={styles.name} spellCheck="false" type="text" />
              </div>
              <div style={{ marginTop: "2rem" }}>
                <div className={styles.label}>Phone Number</div>
                <input className={styles.phone_number} type="text" />
              </div>
              <button className={styles.payment_button}> CONTINUE TO PAYMENT GATEWAY</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Register
