import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
// import Switch from '@mui/material/Switch';
import styles from "./Card.module.css"
// const label = { inputProps: { 'aria-label': 'Switch demo' }, onchange={toggleTheme} }
export const Card = () => {
    const [{isDark},toggleTheme]=useContext(ThemeContext)
  return (
  <div className={styles.mainDiv} >
    <div className={styles.firstDiv}>
        <h2>My Dashboard</h2>
        {/* <Switch {...label} /> */}
        <button onClick={toggleTheme}>Switch</button>
    </div>
    <div className={isDark? styles.secondDiv1: styles.secondDiv}>
        <h5>Active Users</h5>
           <div>
            <h4>User1</h4>
            <p>Location</p>
           </div>
           <div>
            <h4>User2</h4>
            <p>Location</p>
           </div>
           <div>
            <h4>User3</h4>
            <p>Location</p>
           </div>
    </div>
    </div>
    
  )
}
