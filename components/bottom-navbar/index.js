import React, { useState } from "react"
import styles from "./bottom-navbar.module.css"
import cx from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()
  const [activeNav, setActiveNav] = useState(() =>
    router.pathname.includes("/events")
      ? 1
      : router.pathname.includes("/about")
      ? 2
      : router.pathname.includes("/blogs")
      ? 3
      : router.pathname.includes("/gethelp") || router.pathname.includes("/institutions")
      ? 4
      : 0
  )

  const handleNav = (i) => {
    console.log(i)
    setActiveNav(i)
  }

  return (
    <footer className={styles.bottom_navbar}>
      <Link href="/">
        <div className={styles.nav_botton} onClick={() => handleNav(0)}>
          <img className={styles.icon} src="/assets/images/Bottom-Navbar/home.png" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/homeBackground.png"
            alt=""
            style={{ width: activeNav === 0 ? "80% " : "0% " }}
          />
        </div>
      </Link>
      <Link href="/events">
        <div className={styles.nav_botton} onClick={() => handleNav(1)}>
          <img className={cx(styles.icon, styles.icon_bold)} src="/assets/images/Bottom-Navbar/calender.png" alt="" />
          <img className={styles.nav_bg} src="/assets/images/Bottom-Navbar/Yellowbg.png" alt="" style={{ width: activeNav === 1 ? "80% " : "0%" }} />
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.nav_botton} onClick={() => handleNav(2)}>
          <img className={styles.icon} src="/assets/images/Bottom-Navbar/Logo.png" alt="" />
          <img className={styles.nav_bg} src="/assets/images/Bottom-Navbar/Pinkish.png" alt="" style={{ width: activeNav === 2 ? "80% " : "0%" }} />
        </div>
      </Link>
      <Link href="/blogs">
        <div className={styles.nav_botton} onClick={() => handleNav(3)}>
          <img className={cx(styles.icon, styles.icon_bold)} src="/assets/images/Bottom-Navbar/Something.png" alt="" />
          <img className={styles.nav_bg} src="/assets/images/Bottom-Navbar/Bluebg.png" alt="" style={{ width: activeNav === 3 ? "80%" : "0%" }} />
        </div>
      </Link>
      <Link href="/gethelp">
        <div className={styles.nav_botton} onClick={() => handleNav(4)}>
          <img className={styles.icon} src="/assets/images/Bottom-Navbar/Services.png" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/Creamishbg.png"
            alt=""
            style={{ width: activeNav === 4 ? "80% " : "0%" }}
          />
        </div>
      </Link>
    </footer>
  )
}

export default index
