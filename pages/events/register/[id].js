import React, { useState } from "react"
import styles from "./register.module.css"
import axios from "axios"
import moment from "moment"
import { useRouter } from "next/router"
import cx from "classnames"

export const getStaticPaths = async () => {
  let data = []
  try {
    const res = await axios.get("https://noor-test.herokuapp.com/api/v1/events/upcoming")
    data = res.data
  } catch (err) {
    console.log(err)
  }

  const paths = data.map((element) => {
    return {
      params: { id: element._id.toString() },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  let data = []
  try {
    const res = await axios.get(`https://noor-test.herokuapp.com/api/v1/events/${id}`)
    data = res.data
  } catch (err) {
    console.log(err)
  }

  return {
    props: { eventDetails: data },
    revalidate: 10,
  }
}

const Register = ({ eventDetails }) => {
  const router = useRouter()
  const regEx = new RegExp("\n", "g")

  const [name, setName] = useState("")
  const [phoneNo, setPhoneNo] = useState("")

  const [success, setSuccess] = useState(false)
  const [warn, setWarn] = useState(false)

  const handleRegister = async () => {
    // console.log({ name, number: phoneNo })
    // try {
    //   const res = await axios.post(
    //     `https://noor-test.herokuapp.com/api/v1/events/upcoming/${eventDetails._id}/user/add?api_key=RKUj7EkcQeRerEWs8ktKA3BmRnt8uCCeKnsZYzoYDag`,
    //     { name, number: phoneNo }
    //   )
    //   console.log("Added")

    //   setWarn(false)
    //   setSuccess(true)
    //   setTimeout(() => {
    //     setSuccess(false)
    //     setName("")
    //     setPhoneNo("")
    //   }, 5000)
    // } catch (err) {
    //   console.log(err)
    //   setSuccess(false)
    //   setWarn(true)
    //   setTimeout(() => {
    //     setWarn(false)
    //   }, 5000)
    // }
    window.location.href = eventDetails.image_urls[1]
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  } else {
    const description = eventDetails.description.replace(regEx, "</br>")
    return (
      <section className={styles.register_page_wrapper}>
        <section>
          <div className={styles.heading}>
            <div>Register</div>
          </div>
          <div className={styles.content_description}>
            <div className={styles.img}>
              <img src={eventDetails.image_urls[0]} alt="" />
            </div>
            <div className={styles.content_texts}>
              <div className={styles.content_texts_inner}>
                <div className={styles.event_date}>{moment(eventDetails.date).format("DD MMM YYYY")}</div>
                <div className={styles.event_heading}>{eventDetails.title}</div>
                <div className={styles.event_description} dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className={styles.event_price}>Price : Rs. {eventDetails.price}/-</div>
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
                  <input className={styles.name} spellCheck="false" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div className={styles.label}>Phone Number</div>
                  <input className={styles.phone_number} value={phoneNo} type="text" onChange={(e) => setPhoneNo(e.target.value)} />
                </div>
                <button
                  disabled={success}
                  className={cx(styles.payment_button, success && styles.payment_active, warn && styles.payment_warning)}
                  onClick={handleRegister}
                >
                  REGISTER AS AN ATTENDEE
                  {success && <div className={cx(styles.success)}>Registered Successfully</div>}
                  {warn && <div className={cx(styles.success, styles.warning)}>Opps, please try again later</div>}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Register
