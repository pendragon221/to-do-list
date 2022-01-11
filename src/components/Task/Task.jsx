import React from 'react'
import styles from './Task.module.css'


const Task = ({ task, number, remove }) => {
    return (
        <div className={styles.task__container}>
            <div>
                <div className={styles.task__header}>
                    <p>{number}. {task.header}</p>
                </div>
                <div className={styles.task__content}>
                    <p>{task.content}</p>
                </div>
            </div>
            <div className={styles.deleteButton__container}>
                <button className={styles.deleteButton} onClick={() => remove(task)}>Delete</button>
            </div>
        </div>
    )
}

export default Task
