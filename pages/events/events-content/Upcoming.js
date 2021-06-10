import styles from "./events_content.module.css";
import UpcomingCard from "../../../components/events-cards/upcoming-card/UpcomingCard";
const Upcoming = () => {
  let noOfCards = ["#FCD5E4", "#AAF1DB", "#C1E1FF", "#C1E1FF", "#E8C7FF"];
  return (
    // <div>hello from upcoming</div>

    <div className={styles.events_cards_container}>
      {noOfCards.map((element) => {
        return <UpcomingCard key={element} bgColor={element} />;
      })}
    </div>
  );
};

export default Upcoming;
