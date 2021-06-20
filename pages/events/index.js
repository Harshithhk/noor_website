import React, { useState } from "react";
import styles from "./events.module.css";
import Upcoming from "./events-content/Upcoming";
import Past from "./events-content/Past";

const borderUpcoming = {
  borderBottom: "1px solid #f6c1c1",
};

const borderPast = {
  borderBottom: "1px solid #f6c1c1",
};

const index = () => {
  const [nav, setNav] = useState(0);

  return (
    <section className={styles.events_page_wrapper}>
      <section>
        <div className={styles.heading}>
          <div style={{ fontSize: "48px" }}>Events</div>
        </div>
        <div className={styles.events_nav}>
          <div className={styles.upcoming_past}>
            <div className={styles.upcoming} style={nav === 0 ? borderUpcoming : {}} onClick={() => setNav(0)}>
              Upcoming
            </div>
            <div className={styles.past} style={nav === 1 ? borderPast : {}} onClick={() => setNav(1)}>
              Past
            </div>
          </div>
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
      {nav == 0 ? <Upcoming /> : <Past />}
    </section>
  );
};

export default index;
