import React from "react"
import styles from "./footer.module.css"
import { useRouter } from "next/router"
import Link from "next/link"
const index = () => {
  const router = useRouter()

  return (
    <footer className={styles.footer_container} style={{ marginTop: router.pathname == "/" ? "-5rem" : "0rem" }}>
      <section className={styles.nav_content}>
        <div className={styles.team_noor}>Team Noor</div>
        <div className={styles.nav_list}>
          <Link href="/events">
            <div>Events</div>
          </Link>
          <Link href="/about">
            <div>About</div>
          </Link>
          <Link href="/blogs">
            <div>Blogs</div>
          </Link>
          <Link href="/gethelp">
            <div>Get Help</div>
          </Link>
          <Link href="/institutions">
            <div>Institutions</div>
          </Link>
        </div>
      </section>
      <div className={styles.logo}>
        <img src="/assets/images/Utils/Logo-footer.png" alt="" />
      </div>
      <div className={styles.social_media}>
        <div>Social Media</div>
        <div className={styles.socials_container}>
          <div className={styles.socials}>
            <img src="/assets/images/Utils/Socials/Google.png" alt="" />
          </div>
          <div className={styles.socials}>
            <img src="/assets/images/Utils/Socials/Twitter.png" alt="" />
          </div>
          <div className={styles.socials}>
            <img src="/assets/images/Utils/Socials/Facebook.png" alt="" />
          </div>
          <div className={styles.socials}>
            <img src="/assets/images/Utils/Socials/Instagram.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
