import styles from "./institutions.module.css"

const index = () => {
    return(
        <section className={styles.institutions_page_wrapper}>
          <div className={styles.heading}>
            <div style={{ fontSize: "48px" }}>Institution Reach</div>
          </div>
          <div className={styles.institution_reach_information}>
            <div className={styles.institution_reach_image}>
                <img src="/assets/images/institution-reach.svg" height="40%" width="40%" style={{paddingLeft:"50px"}}></img>
            </div>
            <div className={styles.information}>
                
            </div>
          </div>
        </section>
    )
}

export default index