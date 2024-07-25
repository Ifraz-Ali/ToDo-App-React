import React from 'react'

const TodoList = ({ val, deleteTodo, editTodo }) => {
    console.log(val);

    return (
        <div>
            <p>
                {val.text}
                <span>{!val.editTime ? val.addTime.toLocaleTimeString() : `${val.editTime.toLocaleTimeString()} edited`}</span>
            </p>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={editTodo}>Edit</button>
        </div>
    )
}

export default TodoList;