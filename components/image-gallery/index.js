import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import styles from "./gallery.module.css"
import Aos from "aos"

const index = ({ images, setGalleryActive }) => {
  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])
  return (
    <div className={styles.ImageGallery}>
      <div className={styles.active} onClick={() => setGalleryActive(false)}>
        X
      </div>
      <ImageGallery items={images} />
    </div>
  )
}

export default index
