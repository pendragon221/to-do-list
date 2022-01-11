import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Task from '../Task/Task'
import styles from './TasksList.module.css'

const TasksList = ({ tasks, setTasks }) => {

    const onDelete = (post) => {
        setTasks(tasks.filter((el) => el.id !== post.id))
    }

    if (!tasks.length)
        return (
            <div className={styles.tasksList}>
                <h1>No tasks</h1>
            </div>
        )
    else {
        return (
            <div className={styles.tasksList}>
                <h1>All tasks</h1>
                <TransitionGroup>
                    {tasks.map((el, index) => (
                        <CSSTransition
                            key={el.id}
                            timeout={500}
                            classNames="task">
                            <Task task={el} number={index + 1} remove={onDelete} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
}

export default TasksList
