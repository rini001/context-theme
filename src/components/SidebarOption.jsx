import React from 'react'
import styles from './Sidebar.module.css'
export const SidebarOption = ({Icon}) => {
  return (
    <div className={styles.icon}>
        <Icon/>
    </div>
  )
}
