import React from 'react'
import styles from './MyButton.module.css'

const MyButton = ({ children, onClick, ...props }) => {
    return (
        <button {...props} onClick={onClick} className={styles.myBtn}>{children}</button>
    )
}

export default MyButton
