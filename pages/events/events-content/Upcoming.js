import styles from "./events_content.module.css"
import UpcomingCard from "../../../components/cards/upcoming-card/UpcomingCard"
import { upcomingEventsData } from "../../../utils/dummy-data/upcomingEventsData"
const Upcoming = () => {
  return (
    // <div>hello from upcoming</div>

    <div className={styles.events_cards_container}>
      {upcomingEventsData.map((element) => {
        return <UpcomingCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />
      })}
    </div>
  )
}

export default Upcoming
