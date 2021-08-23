import React from "react"
import styles from "./footer.module.css"

const index = () => {
  return (
    <footer className={styles.footer_container}>
      <section className={styles.nav_content}>
        <div className={styles.team_noor}>Team Noor</div>
        <div className={styles.nav_list}>
          <div>Events</div>
          <div>About</div>
          <div>Blogs</div>
          <div>Get Help</div>
          <div>Institutions</div>
        </div>
      </section>
    </footer>
  )
}

export default index
