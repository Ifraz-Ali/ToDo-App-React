import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import Header from './header';


const UITodo = () => {
    const [task, setTask] = useState(undefined);
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(undefined);
    const [isEdit, setIsEdit] = useState(false);
    const [index, setIndex] = useState(undefined);
    const [complete, setComplete] = useState(false);

    const loginUser = window.localStorage.getItem('loginKey');
    const users = JSON.parse(localStorage.getItem("userid"));

    const userInfo = users.find((user) => user.id === loginUser);
    
    const { id, userName } = userInfo;

    const getTodos = window.localStorage.getItem('userTodo');
    const allTodo = JSON.parse(getTodos);

    const filteredData = allTodo?.filter((usertodo) => usertodo.userid === id)[0];
    useEffect(() => {
        setTodos(filteredData?.todo ?? []);
    }, []);
    const addTodo = () => {
        const newTodo = {
            text: task,
            addTime: new Date(),
            isComplete: complete
        };

        const allUserData = [{
            userid: id,
            todo: [...todos, newTodo]
        }];
        setTodos([...todos, newTodo]);
        window.localStorage.setItem('userTodo', JSON.stringify(allUserData));
        setTask('');
    }
    const deleteTodo = (index) => {
        const get = allTodo.indexOf(filteredData);
        console.log(todos);
        const newTodo = [...todos.slice(0, index), ...todos.slice(index + 1)];
        allTodo[get].todo = newTodo;
        setTodos(newTodo);
        allTodo[get] = {
            userid: id,
            todo: newTodo,
        };
        localStorage.setItem("userTodo", JSON.stringify(allTodo));

    }
    const editTodo = (index) => {
        setIsEdit(true);
        const todo = todos[index].text;
        setEdit(todo);
        setIndex(index);
    }
    const updateTodo = () => {
        const userIdIndex = allTodo.findIndex((val) => filteredData.userid === val.userid);
        const updatedTodos = todos;
        const editedTodo = {
            text: edit,
            editTime: new Date(),
            isComplete: complete
        };
        updatedTodos[index] = editedTodo;
        const allTodoCopy = [...allTodo];
        allTodoCopy[userIdIndex] = {
            userid: id,
            todo: updatedTodos,
        };
        setTodos(updatedTodos);
        localStorage.setItem("userTodo", JSON.stringify(allTodoCopy))
        setIsEdit(false);
    }
    const deleteAllTodo = () => {
        const userIdIndex = allTodo.indexOf(filteredData);
        const allTodoCopy = [...allTodo];
        allTodoCopy[userIdIndex] = {
            userid: id,
            todo: [],
        }
        setTodos([]);
        localStorage.setItem('userTodo', JSON.stringify(allTodoCopy));
    }
    const handleComplete = (index) => {
        console.log(complete, "in main")
        const get = allTodo.indexOf(filteredData);
        const updateTodo = todos;
        setComplete(!complete)
        const editTodo = {
            ...updateTodo[index],
            isComplete: complete
        }
        console.log(editTodo);
        updateTodo[index] = editTodo;
        const allTodoCopy = [...allTodo];
        allTodoCopy[get] = {
            userid: id,
            todo: updateTodo,
        };
        setTodos(updateTodo);
        localStorage.setItem("userTodo", JSON.stringify(allTodoCopy));
    }
    const handleLogOut = () => {
        window.localStorage.removeItem('loginKey');
    }
    return (
        <div className='h-screen bg-zinc-800 text-white relative'>
            <Header
                userName={userName}
                logoutUser={handleLogOut}
            />
            <div>
                {!isEdit ?
                    <div className='flex justify-center items-end  '>
                        <div className='pt-2 h-20 w-1/2 flex items-end flex-col justify-center  '>
                            <label htmlFor='todo' className='block text-lg w-1/3 flex '>
                                Enter Tasks
                            </label>
                            <input type='text' id='todo' name='todo' onChange={(e) => setTask(e.target.value)} value={task}
                                className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium '
                                placeholder='Tasks' />
                        </div>
                        <div className='flex justify-evenly items-center w-1/4 h-12 pt-1  '>
                            <button className='bg-blue-500 rounded w-2/5 h-8 text-lg font-medium'
                                onClick={() => addTodo()}>
                                Add
                            </button>
                            <button className='bg-blue-500 rounded w-2/5 h-8 text-lg font-medium '
                                onClick={() => deleteAllTodo()}>
                                Delete All
                            </button>
                        </div>
                    </div> :
                    <div className='flex justify-center items-end h-20'>
                        <div className='pt-2 h-20 w-1/2 flex items-end flex-col justify-center'>
                            <label htmlFor='todo' className='block text-lg w-1/3 flex'>
                                Enter Tasks
                            </label>
                            <input type='text' id='editTodo' name='editTodo' onChange={(e) => setEdit(e.target.value)} value={edit}
                                className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium' />
                        </div>
                        <div className='flex justify-start items-center w-1/4 h-12 pt-1 pl-5'>
                            <button className='bg-blue-500 rounded w-5/12 h-8 text-lg font-medium'
                                onClick={() => updateTodo()}>
                                Save
                            </button>
                        </div>
                    </div>}
                {filteredData?.todo.map((val, i) => {
                    return (
                        <div>
                            <TodoList
                                val={val}
                                deleteTodo={() => deleteTodo(i)}
                                editTodo={() => editTodo(i)}
                                handleComplete={() => handleComplete(i)}
                                isEdit={isEdit}
                            />
                        </div>
                    )
                }) || 'Add some tasks'}
            </div>
        </div>
    )
}

export default UITodo;