import React, { useState, useEffect } from "react"
import styles from "./events.module.css"
import Upcoming from "./events-content/Upcoming"
import Past from "./events-content/Past"
import axios from "axios"
import Head from "next/head"
// import { upcomingEventsData } from " ../../utils/dummy-data/upcomingEventsData"
import { upcomingEventsData } from "../../utils/dummy-data/upcomingEventsData"
// import { pastEventsData } from "../../utils/dummy-data/pastEventsData"

const borderUpcoming = {
  borderBottom: "1px solid #f6c1c1",
}

const borderPast = {
  borderBottom: "1px solid #f6c1c1",
}

export const getStaticProps = async () => {
  let upcommingData = []
  let pastData = []
  try {
    const resUpcoming = await axios.get("https://noor-test.herokuapp.com/api/v1/events/upcoming")
    if (resUpcoming.data && resUpcoming.data.length > 0) {
      upcommingData = resUpcoming.data
      upcommingData = upcommingData.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  } catch (err) {
    console.log(err)
  }
  try {
    const resPast = await axios.get("https://noor-test.herokuapp.com/api/v1/events/past")
    if (resPast.data && resPast.data.length > 0) {
      pastData = resPast.data
      pastData = pastData.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  } catch (err) {
    console.log(err)
  }
  const eventsData = upcommingData.concat(pastData)

  return {
    props: { upcomingEventsData: upcommingData, pastEventsData: pastData, eventsData: eventsData },
    revalidate: 30,
  }
}

const index = ({ upcomingEventsData, pastEventsData, eventsData }) => {
  const [nav, setNav] = useState(0)
  const [searchText, setSearchText] = useState("")

  const [upcommingEventsData, setupcommingEventsData] = useState(() => eventsData)
  const [upcommingData, setUpcommingData] = useState(() => eventsData)

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
      <Head>
        <title>Noor</title>
        <meta name="description" content="Be your own light" />
        <link rel="icon" href="/assets/images/Logos/favicon.ico" />
      </Head>
      <section>
        <div className={styles.heading}>
          <div>Events</div>
        </div>
        <div className={styles.events_nav}>
          {/* <div className={styles.upcoming_past}>
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
          </div> */}
          <div className={styles.actions}>
            <img src="/assets/images/filters.svg" className={styles.filter} />
            <div style={{ height: "25px", width: "200px", position: "relative" }}>
              <div className={styles.search_icon}></div>
              <input type="search" name="" className={styles.search_box} value={searchText} onChange={handleSearch}></input>
            </div>
          </div>
        </div>
        {/* <div className={styles.mobile_actions}>
          <img src="/assets/images/filters.svg" className={styles.filter} />
          <div style={{ height: "25px", width: "200px", position: "relative" }}>
            <div className={styles.search_icon}></div>
            <input type="search" name="" className={styles.search_box} value={searchText} onChange={handleSearch}></input>
          </div>
        </div> */}
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
