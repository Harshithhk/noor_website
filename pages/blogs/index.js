import React, { useState } from "react"
import styles from "./blogs.module.css"
import { upcomingEventsData } from "../../utils/dummy-data/upcomingEventsData"
// import Blogcard from "../../components/cards/new-blog-card/BlogCard";
import Blogcard from "../../components/cards/blog-card/BlogCard"

const index = () => {
  let i = 0.5
  const [nav, setNav] = useState(0)
  const [searchText, setSearchText] = useState("")

  const [blogsMasterData, setblogsMasterData] = useState(() => upcomingEventsData)
  const [blogsData, setblogsData] = useState(() => upcomingEventsData)

  const handleSearch = (e) => {
    let text = e.target.value.toLowerCase()

    setSearchText(() => e.target.value)
    let blogsFiteredData = blogsMasterData.filter((data) => data.title.toLowerCase().trim().includes(text))
    setblogsData(blogsFiteredData)
  }

  return (
    <section className={styles.events_page_wrapper}>
      <section className={styles.heading_and_tools}>
        <div className={styles.heading}>
          <div style={{ textAlign: "center", alignItems: "center" }}>Blogs</div>
        </div>
      </section>
      <section className={styles.events_cards_container}>
        <div className={styles.actions}>
          <img src="/assets/images/filters.svg" className={styles.filter} />
          <div style={{ height: "25px", width: "200px", position: "relative" }}>
            <div className={styles.search_icon}></div>
            <input type="search" name="" className={styles.search_box} value={searchText} onChange={handleSearch}></input>
          </div>
        </div>
        {blogsData.map((element) => {
          i = i + 0.25
          return (
            <div className={styles.Upcoming} style={{ animationDuration: `${i}s` }}>
              <Blogcard
                key={element.id}
                height="270"
                width="400"
                bgColor={element.bgColor}
                bgUrl={element.bgUrl}
                id={element.id}
                title={element.title}
              />
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default index
