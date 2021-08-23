import styles from "./events_content.module.css"
import UpcomingCard from "../../../components/cards/upcoming-card/UpcomingCard"
import { upcomingEventsData } from "../../../utils/dummy-data/upcomingEventsData"
const Upcoming = () => {
  let i = 0.5
  return (
    <div className={styles.events_cards_container}>
      {upcomingEventsData.map((element) => {
        i = i + 0.25
        return (
          <div className={styles.Upcoming} style={{ animationDuration: `${i}s` }}>
            <UpcomingCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />
          </div>
        )
      })}
    </div>
  )
}

export default Upcoming
