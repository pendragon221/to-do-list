import React from 'react'
import Task from '../Task/Task'
import styles from './TasksList.module.css'

const TasksList = () => {
    return (
        <div className={styles.tasksList}>
            <h1>All tasks</h1>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default TasksList
