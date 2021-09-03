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
        <img src="/assets/images/Logos/Noor_Colored_Black.svg" alt="" />
      </div>
      <div className={styles.social_media}>
        <div>Social Media</div>
        <div className={styles.socials_container}>
          <a href="https://www.linkedin.com/company/noorpune" target="_blank">
            <div className={styles.socials}>
              <img src="/assets/images/Utils/Socials/linked.png" alt="" />
            </div>
          </a>
          <a href="https://twitter.com/Noor23858692?s=09" target="_blank">
            <div className={styles.socials}>
              <img src="/assets/images/Utils/Socials/Twitter.png" alt="" />
            </div>
          </a>
          <a href="https://www.facebook.com/Noor-100477398906304/" target="_blank">
            <div className={styles.socials}>
              <img src="/assets/images/Utils/Socials/Facebook.png" alt="" />
            </div>
          </a>
          <a href="https://instagram.com/officialnoor__?utm_medium=copy_link" target="_blank">
            <div className={styles.socials}>
              <img src="/assets/images/Utils/Socials/Instagram.png" alt="" />
            </div>
          </a>
        </div>
        <hr style={{ borderColor: "#ffdeea", border: "1px dashed   #ffdeea", margin: "8px 0" }} />
        <div style={{ marginTop: "0.5rem", marginBottom: "0.25rem", fontSize: "1rem" }}>Website by-</div>
        <a href="https://github.com/Harshithhk" target="_blank" style={{ textDecoration: "none", color: "#7f7f7f" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>Harshith Kelkar</div>
        </a>
        {/* <div style={{ fontSize: "0.6rem" }}>&</div> */}
        <a href="https://github.com/mulitate4" target="_blank" style={{ textDecoration: "none", color: "#7f7f7f" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>Aryan Dongre</div>
        </a>
        <div style={{ marginTop: "0.5rem", marginBottom: "0.25rem", fontSize: "1rem" }}>Designed by-</div>
        <a href="mailto:anshpurii@gmail.com" target="_blank" style={{ textDecoration: "none", color: "#7f7f7f" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>Ansh Purii</div>
        </a>
      </div>
    </footer>
  )
}

export default index
