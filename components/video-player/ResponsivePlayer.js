import React from "react"
import ReactPlayer from "react-player"

import styles from "./responsive-player.module.css"

const ResponsivePlayer = () => {
  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer className={styles.react_player} url="/drive1.mp4" width="100%" height="100%" controls={true} />
    </div>
  )
}

export default ResponsivePlayer
