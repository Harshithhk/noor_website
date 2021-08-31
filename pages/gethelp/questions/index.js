import React from "react"
import styles from "./questions.module.css"
import Head from "next/head"

const index = () => {
  return (
    <section className={styles.questions_page_wrapper}>
      <Head>
        <title>Noor</title>
        <meta name="description" content="Be your own light" />
        <link rel="icon" href="/assets/images/Logos/favicon.ico" />
      </Head>
      <main>
        <div className={styles.heading}>
          <div>A few questions</div>
        </div>
        <section>
          <div style={{ paddingLeft: "14rem" }}>
            <div className={styles.question_container} style={{ borderRadius: "12px 0px 0px 12px", background: "#FFC8DD", paddingRight: "17rem" }}>
              <div className={styles.question}>Q1. Lorem ipsum dolor sit amet? The quick, brown fox jumps oveg.</div>
              <textarea className={styles.answer} style={{ resize: "none;" }}></textarea>
            </div>
          </div>
          <div style={{ paddingRight: "14rem" }}>
            <div className={styles.question_container} style={{ borderRadius: "0px 12px 12px 0px", background: "#EEE2F7", paddingLeft: "17rem" }}>
              <div className={styles.question}>Q2. Lorem ipsum dolor sit amet? The quick, brown fox jumps oveg.</div>
              <textarea className={styles.answer} style={{ resize: "none;" }}></textarea>
            </div>
          </div>
          <div style={{ paddingLeft: "14rem" }}>
            <div className={styles.question_container} style={{ borderRadius: "12px 0px 0px 12px", background: "#FFC8DD", paddingRight: "17rem" }}>
              <div className={styles.question}>Q3. Lorem ipsum dolor sit amet? The quick, brown fox jumps oveg.</div>
              <textarea className={styles.answer} style={{ resize: "none;" }}></textarea>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <button className={styles.payment_button}> SUBMIT</button>
          </div>
        </section>
      </main>
    </section>
  )
}

export default index
