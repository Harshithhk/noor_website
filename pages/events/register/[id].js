import React from "react"
import styles from "./register.module.css"
const Register = () => {
  return (
    <section className={styles.register_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div>Register</div>
        </div>
        <div className={styles.content_description}>
          <div className={styles.img}>
            <img src="/assets/images/Register/Register3.jpeg" alt="" />
          </div>
          <div className={styles.content_texts}>
            <div className={styles.content_texts_inner}>
              <div className={styles.event_date}>28 Jan 2021</div>
              <div className={styles.event_heading}>Unfold - Relationships (Self)</div>
              <div className={styles.event_description}>
                The theme this time is 'Relationships'. Human relations are a beautiful blend of warmth, perspectives, experiences, and belongingness.
                The relationship with yourself especially, is your best investment. Have you ever said things out loud to someone else and discovered
                something new about yourself? Or openly talked about problems with friends and suddenly found a solution? That’s what we also need
                with ourself. A bond of trust where we can openly communicate and admit certain things and minimise problems and confusions. So come
                join us!
              </div>
              <div className={styles.event_price}>Price : Rs. 200/-</div>
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
              <button className={styles.payment_button}> REGISTER AS AN ATTENDEE</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Register
