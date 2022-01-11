import React from 'react'
import Task from '../Task/Task'
import styles from './TasksList.module.css'

const TasksList = ({ tasks }) => {
    return (
        <div className={styles.tasksList}>
            <h1>All tasks</h1>
            {tasks.map(el => (
                <Task task={el} key={el.id} />
            ))}
        </div>
    )
}

export default TasksList
