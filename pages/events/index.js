import React, { useState, useEffect } from "react"
import styles from "./events.module.css"
import Upcoming from "./events-content/Upcoming"
import Past from "./events-content/Past"
import axios from "axios"
// import { upcomingEventsData } from " ../../utils/dummy-data/upcomingEventsData"
import { upcomingEventsData } from "../../utils/dummy-data/upcomingEventsData"
import { pastEventsData } from "../../utils/dummy-data/pastEventsData"

const borderUpcoming = {
  borderBottom: "1px solid #f6c1c1",
}

const borderPast = {
  borderBottom: "1px solid #f6c1c1",
}

export const getStaticProps = async () => {
  const upcommingData = upcomingEventsData
  const pastData = pastEventsData

  return {
    props: { upcomingEventsData: upcommingData, pastEventsData: pastData },
  }
}

const index = ({ upcomingEventsData, pastEventsData }) => {
  useEffect(async () => {
    // const e = await axios.get("https://noor-test.herokuapp.com/api/v1/events/upcoming")
    // const e = await axios.get("http://localhost:3000/api/hello")
    console.log(upcomingEventsData)
    return () => {}
  }, [])

  const [nav, setNav] = useState(0)
  const [searchText, setSearchText] = useState("")

  const [upcommingEventsData, setupcommingEventsData] = useState(() => upcomingEventsData)
  const [upcommingData, setUpcommingData] = useState(() => upcomingEventsData)

  const [pasttEventsData, setpasttEventsData] = useState(() => pastEventsData)
  const [pastData, setPastData] = useState(() => pastEventsData)

  const handleSearch = (e) => {
    let text = e.target.value.toLowerCase()
    if (nav == 0) {
      setSearchText(() => e.target.value)
      let upcommingFiteredData = upcommingEventsData.filter((data) => data.title.toLowerCase().trim().includes(text))
      setUpcommingData(upcommingFiteredData)
    } else {
      setSearchText(() => e.target.value)
      let pastFiteredData = pasttEventsData.filter((data) => data.title.toLowerCase().trim().includes(text))
      setPastData(pastFiteredData)
    }
  }

  const clearText = () => {
    setSearchText("")
    handleSearch({ target: { value: "" } })
  }

  return (
    <section className={styles.events_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div style={{ fontSize: "48px" }}>Events</div>
        </div>
        <div className={styles.events_nav}>
          <div className={styles.upcoming_past}>
            <div
              className={styles.upcoming}
              style={nav === 0 ? borderUpcoming : {}}
              onClick={() => {
                setNav(0)
                clearText()
              }}
            >
              All
            </div>
            <div
              className={styles.past}
              style={nav === 1 ? borderPast : {}}
              onClick={() => {
                // setNav(1)
                clearText()
              }}
            >
              Past
            </div>
          </div>
          <div className={styles.actions}>
            <img src="/assets/images/filters.svg" className={styles.filter} />
            <div style={{ height: "25px", width: "200px", position: "relative" }}>
              <div className={styles.search_icon}></div>
              <input type="search" name="" className={styles.search_box} value={searchText} onChange={handleSearch}></input>
            </div>
          </div>
        </div>
        <div className={styles.mobile_actions}>
          <img src="/assets/images/filters.svg" className={styles.filter} />
          <div style={{ height: "25px", width: "200px", position: "relative" }}>
            <div className={styles.search_icon}></div>
            <input type="search" name="" className={styles.search_box} value={searchText} onChange={handleSearch}></input>
          </div>
        </div>
      </section>
      {nav == 0 ? <Upcoming searchText eventsData={upcommingData} /> : <Past searchText eventsData={pastData} />}
    </section>
  )
}

// export async function getStaticProps(context) {
//   const pastData = pastEventsData
//   const upcommingEvents = await axios.get("https://noor-test.herokuapp.com/api/v1/events/upcoming")

//   return {
//     props: { upcomingEventsData: upcommingEvents.data, pastEventsData: pastData },
//   }
// }

export default index
