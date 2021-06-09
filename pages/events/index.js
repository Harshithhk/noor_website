import React,{useState} from 'react'
import styles from './events.module.css'
import NavBar from '../../components/navbar/NavBar'

const borderUpcoming = {
    borderBottom: "1px solid #f6c1c1"
}

const borderPast = {
    
    borderBottom: "1px solid #f6c1c1"
}

const index = () => {

    const [nav, setNav] = useState(0);

    return (
        <section>
        <NavBar/>
        <div className={styles.heading}>
            <div style={{fontSize:"48px"}}>Events</div>
        </div>
        <div className={styles.innernav}>
            <div style={{flex:1}}></div>
            <div className={styles.upcoming_past}>
                <div className={styles.upcoming} style={nav === 0 ? borderUpcoming : {}} onClick={()=>setNav(0)}>Upcoming</div>
                <div className={styles.past} style={nav === 1 ? borderPast:{}} onClick={()=>setNav(1)}>Past</div>
            </div>
            <div style={{flex:1}}></div>

        </div>
        </section>

    )
}

export default index
