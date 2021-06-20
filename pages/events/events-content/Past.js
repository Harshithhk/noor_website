import styles from "./events_content.module.css";
import PastCard from "../../../components/events-cards/past-card/PastCard";
import { upcomingEventsData } from "../../../utils/dummy-data/upcomingEventsData";

const Past = () => {
  return (
    <section className={styles.events_cards_container}>
      {upcomingEventsData.map((element) => {
        return <PastCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />;
      })}
    </section>
  );
};

export default Past;
