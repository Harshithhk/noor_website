import styles from "./NavBar.module.css"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import cx from "classnames"

const NavBar = () => {
  const router = useRouter()
  const [index, setIndex] = useState(() =>
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
  const [left, setLeft] = useState(() => index * 120)
  const [filter, setFilter] = useState("invert(100%) sepia(74%) saturate(1791%) hue-rotate(186deg) brightness(99%) contrast(99%)")

  const handleNavClick = (i) => {
    if (i > index) {
      setLeft(i * 120)
    } else {
      setLeft(left - (index - i) * 120)
    }
    setIndex(i)
  }

  useEffect(() => {
    console.log(router.pathname)
    switch (index) {
      case 0:
        setFilter("invert(100%) sepia(74%) saturate(1791%) hue-rotate(186deg) brightness(99%) contrast(99%)")
        break
      case 1:
        setFilter("invert(99%) sepia(56%) saturate(1315%) hue-rotate(291deg) brightness(100%) contrast(99%)")
        break
      case 2:
        setFilter("invert(83%) sepia(26%) saturate(594%) hue-rotate(296deg) brightness(103%) contrast(101%)")
        break
      case 3:
        setFilter("invert(87%) sepia(17%) saturate(241%) hue-rotate(111deg) brightness(105%) contrast(102%)")
        break
      case 4:
        setFilter("invert(92%) sepia(13%) saturate(246%) hue-rotate(167deg) brightness(95%) contrast(107%)")
        break
    }
  }, [index])

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo} onClick={() => handleNavClick(0)}>
          <img src="/assets/images/Logos/Noor_Colored_White.svg" width="125px" height="50px" />
        </div>
      </Link>
      <div className={styles.nav_buttons}>
        <div className={styles.nav_bg} style={{ transform: `translate(${left}px, -50%)` }}>
          <img
            src="/assets/images/nav_bg.svg"
            width="92px"
            style={{
              filter: filter,
            }}
          />
        </div>
        <Link href="/">
          <div className={styles.btns} onClick={() => handleNavClick(0)} style={{ color: index === 0 ? "#707070" : "#ffffff" }}>
            Home
          </div>
        </Link>
        <Link href="/events">
          <div className={styles.btns} onClick={() => handleNavClick(1)} style={{ color: index === 1 ? "#707070" : "#ffffff" }}>
            Events
          </div>
        </Link>
        <Link href="/about">
          <div className={styles.btns} onClick={() => handleNavClick(2)} style={{ color: index === 2 ? "#707070" : "#ffffff" }}>
            About us
          </div>
        </Link>
        <Link href="/blogs">
          <div className={styles.btns} onClick={() => handleNavClick(3)} style={{ color: index === 3 ? "#707070" : "#ffffff" }}>
            Blogs
          </div>
        </Link>

        <div className={cx(styles.btns, styles.services)} style={{ color: index === 4 ? "#707070" : "#ffffff" }}>
          Services
          <div className={styles.sub_menu}>
            <Link href="/gethelp">
              <div onClick={() => handleNavClick(4)}>Seek Help</div>
            </Link>
            <Link href="/institutions">
              <div onClick={() => handleNavClick(4)}>Institutions</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
