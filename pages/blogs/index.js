import React, { useState } from "react";
import styles from "./blogs.module.css";
import { upcomingEventsData } from '../../utils/dummy-data/upcomingEventsData'
import Blogcard from "../../components/cards/blog-card/BlogCard";


const index = () => {
  const [nav, setNav] = useState(0);

  return (
    <section className={styles.events_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div style={{ fontSize: "48px" }}>Blogs</div>
        </div>
        <div className={styles.events_nav}>
          <div className={styles.actions}>
            <img src="/assets/images/filters.svg" className={styles.filter} />
            <div style={{ height: "25px", width: "200px", position: "relative" }}>
              <div className={styles.search_icon}></div>
              <input type="search" name="search" className={styles.search_box}></input>
            </div>
          </div>
        </div>
        <div className={styles.mobile_actions}>
          <img src="/assets/images/filters.svg" className={styles.filter} />
          <div style={{ height: "25px", width: "200px", position: "relative" }}>
            <div className={styles.search_icon}></div>
            <input type="search" name="search" className={styles.search_box}></input>
          </div>
        </div>
      </section>
      <section className={styles.events_cards_container}>
      {upcomingEventsData.map((element) => {
        return <Blogcard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />;
      })}
    </section>
    </section>
  );
};

export default index;
