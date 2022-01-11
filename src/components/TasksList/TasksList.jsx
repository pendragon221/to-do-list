import React from 'react'
import Task from '../Task/Task'
import styles from './TasksList.module.css'

const TasksList = ({ tasks, setTasks }) => {

    const onDelete = (post) => {
        setTasks(tasks.filter((el) => el.id !== post.id))
    }

    return (
        <div className={styles.tasksList}>
            <h1>All tasks</h1>
            {tasks.map((el, index) => (
                <Task task={el} number={index + 1} remove={onDelete} key={el.id} />
            ))}
        </div>
    )
}

export default TasksList
