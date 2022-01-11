import React from 'react'
import styles from './Task.module.css'


const Task = ({ task }) => {
    return (
        <div className={styles.task__container}>
            <div>
                <div className={styles.task__header}>
                    <p>{task.id}. {task.header}</p>
                </div>
                <div className={styles.task__content}>
                    <p>{task.content}</p>
                </div>
            </div>
            <div className={styles.delete__button}>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default Task
