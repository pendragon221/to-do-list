import React from 'react'
import styles from './Task.module.css'


const Task = () => {
    return (
        <div className={styles.task__container}>
            <div>
                <div className={styles.task__header}>
                    <p>Task 1</p>
                </div>
                <div className={styles.task__content}>
                    <p>Make dinner</p>
                </div>
            </div>
            <div className={styles.delete__button}>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Task
