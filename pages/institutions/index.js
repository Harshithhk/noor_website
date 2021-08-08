import styles from "./institutions.module.css"

const index = () => {
  return(
    <section className={styles.institutions_page_wrapper}>
      <div className={styles.heading}>
        <div style={{ fontSize: "48px" }}>Institution Reach</div>
      </div>
      <div className={styles.institution_reach_information}>
        <div className={styles.institution_reach_image}>
            <img src="/assets/images/institution-reach.svg" height="90%" width="90%" style={{paddingLeft:"20px"}}></img>
        </div>
        <div className={styles.information}>
            <div className={styles.subheading}>
              We at Noor partner with multiple institutions across the city to provide mental healthcare
            </div>
            <div className={styles.text_info}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
        </div>
      </div>
    </section>
  )
}

export default index