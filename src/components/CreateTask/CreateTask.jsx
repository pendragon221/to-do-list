import React, { useRef, useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './CreateTask.module.css'

const CreateTask = ({ tasks, setTask }) => {

    const [header, setHeader] = useState('')
    const [content, setContent] = useState('')

    const onAddPost = (e) => {
        e.preventDefault()
        const newTask = {
            id: tasks.length + 1,
            header,
            content
        }
        setTask([...tasks, newTask])
        setHeader('')
        setContent('')
    }

    return (
        <form className={styles.createTask__container}>
            <MyInput value={header}
                onChange={(e) => { setHeader(e.target.value) }}
                placeholder='Task title' />
            <MyInput value={content}
                onChange={(e) => { setContent(e.target.value) }}
                placeholder='Task text' />
            <MyButton onClick={onAddPost}>Add</MyButton>
        </form>
    )
}

export default CreateTask
