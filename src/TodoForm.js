import React, { useState } from 'react';
import "./App.css"

const TodoForm = (props) => {

    const [value, setValue] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === '') {
            alert("Write something")
            return
        }
        props.submit(value)
        setValue('')
    }

    const onChangeText = (e) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" value={value} placeholder="Add a task" onChange={onChangeText} />
        </form>
    )
}

export default TodoForm;
