import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './CreateTask.module.css'

const CreateTask = () => {

    const onAddPost = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.createTask__container}>
            <MyInput placeholder='Task name' />
            <MyInput placeholder='Task text' />
            <MyButton onClick={onAddPost}>Add</MyButton>
        </form>
    )
}

export default CreateTask
