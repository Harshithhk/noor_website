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
  const [popUpActive, setPopUpActive] = useState(false)

  const handleNav = (i) => {
    console.log(i)
    setActiveNav(i)
  }
  const handlePopUp = () => {
    console.log(popUpActive)
    setPopUpActive(!popUpActive)
    // handleNav(i)
  }

  return (
    <footer className={styles.bottom_navbar}>
      <Link href="/">
        <div className={styles.nav_botton} onClick={() => handleNav(0)}>
          <img className={styles.icon} src="/assets/images/Bottom-Navbar/home.svg" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/home-background.svg"
            alt=""
            style={{ width: activeNav === 0 ? "80% " : "0% " }}
          />
        </div>
      </Link>
      <Link href="/events">
        <div className={styles.nav_botton} onClick={() => handleNav(1)}>
          <img className={cx(styles.icon, styles.icon_bold)} src="/assets/images/Bottom-Navbar/calender.svg" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/yellow-background.svg"
            alt=""
            style={{ width: activeNav === 1 ? "80% " : "0%" }}
          />
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.nav_botton} onClick={() => handleNav(2)}>
          <img className={styles.icon} src="/assets/images/Bottom-Navbar/logo.svg" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/pink-background.svg"
            alt=""
            style={{ width: activeNav === 2 ? "80% " : "0%" }}
          />
        </div>
      </Link>
      <Link href="/blogs">
        <div className={styles.nav_botton} onClick={() => handleNav(3)}>
          <img className={cx(styles.icon, styles.icon_bold)} src="/assets/images/Bottom-Navbar/something.svg" alt="" />
          <img
            className={styles.nav_bg}
            src="/assets/images/Bottom-Navbar/blue-background.svg"
            alt=""
            style={{ width: activeNav === 3 ? "80%" : "0%" }}
          />
        </div>
      </Link>

      <div className={cx(styles.nav_botton, styles.services_btn)} onClick={handlePopUp}>
        <div className={styles.pop_up_bar} style={{ height: popUpActive ? "7rem" : "0rem" }}>
          <Link href="/gethelp">
            <div className={styles.pop_up_btn} style={{ width: popUpActive ? "100%" : "0rem" }} onClick={() => handleNav(4)}>
              <img
                className={styles.nav_bg}
                src="/assets/images/Bottom-Navbar/bottom-color.svg"
                alt=""
                style={{ width: router.pathname.includes("/gethelp") ? "80% " : "0%" }}
              />
              <img className={styles.icon} src="/assets/images/Bottom-Navbar/gethelp.svg" alt="" />
            </div>
          </Link>
          <Link href="/institutions">
            <div className={styles.pop_up_btn} style={{ width: popUpActive ? "100%" : "0rem" }} onClick={() => handleNav(4)}>
              <img className={styles.icon} src="/assets/images/Bottom-Navbar/handshake.svg" alt="" />
              <img
                className={styles.nav_bg}
                src="/assets/images/Bottom-Navbar/bottom-color.svg"
                alt=""
                style={{ width: router.pathname.includes("/institutions") ? "80% " : "0%" }}
              />
            </div>
          </Link>
        </div>
        <img className={styles.icon} src="/assets/images/Bottom-Navbar/services.svg" alt="" />
        <img
          className={styles.nav_bg}
          src="/assets/images/Bottom-Navbar/cream-background.svg"
          alt=""
          style={{ width: activeNav === 4 ? "80% " : "0%" }}
        />
      </div>
    </footer>
  )
}

export default index
