import React, { useState } from 'react'
import TodoList from './TodoList';
import { Link } from 'react-router-dom';

const UITodo = () => {
    const [task, setTask] = useState(undefined);
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(undefined);
    const [isEdit, setIsEdit] = useState(false);
    const [index, setIndex] = useState(undefined);

    const loginUser = window.localStorage.getItem('loginKey');
    // console.log(loginUser, loginUser.indexOf(loginUser));
    const users = JSON.parse(localStorage.getItem("userid"));
    console.log(users)
    const userInfo = users.find((user) => user.id === loginUser);
    console.log(userInfo);
    const { id, userName } = userInfo;
    // const userName = userInfo.userName;
    // const userId = users[newIndex].id;

    const addTodo = () => {
        const newTodo = {
            text: task,
            addTime: new Date(),
        };
        setTodos([
            {
                id: id,
                todo: [...todos, newTodo]
            }
        ]);
        console.log(todos);
        // setTodos([...todos, newTodo]);
        // const temp = [...todos];
        // temp.push(task);
        // setTodos(temp);
        // console.log(temp);
        setTask('');
    }
    const deleteTodo = (index) => {
        // console.log(index);
        const newTodo = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodo);
        // console.log(todos);
    }
    const editTodo = (index) => {
        // console.log('edit');
        setIsEdit(true);
        const todo = todos[index].text;
        // console.log(todo);
        setEdit(todo);
        setIndex(index);
    }
    const updateTodo = () => {
        const updatedTodos = [...todos];
        updatedTodos[index] = {
            text: edit,
            editTime: new Date()
        };
        setTodos(updatedTodos);
        // console.log(...updatedTodos[index])
        // const updateTodo = [...todos]
        // // console.log(updateTodo);
        // updateTodo[index] = edit;
        // setTodos(updateTodo);
        setIsEdit(false);
    }
    return (
        <div>
            <div>
                <h2>My Todo App</h2>
                <h4>Welcome {userName}</h4>
                {!isEdit ?
                    <div>
                        <input type='text' id='todo' name='todo' onChange={(e) => setTask(e.target.value)} value={task} />
                        <button onClick={() => addTodo()}>Add</button>
                    </div> :
                    <div>
                        <input type='text' id='editTodo' name='editTodo' onChange={(e) => setEdit(e.target.value)} value={edit} />
                        <button onClick={() => updateTodo()}>Save</button>
                    </div>}
                {todos.map((val, i) => {
                    // console.log(val.todo)
                    return (
                        <div>
                            <TodoList
                                val={val}
                                deleteTodo={() => deleteTodo(i)}
                                editTodo={() => editTodo(i)}
                                isEdit={isEdit}
                            />
                        </div>
                    )
                })}
            </div>
            <Link to={'/login'}>
                <button>Logout</button>
            </Link>
        </div>
    )

}

export default UITodo;