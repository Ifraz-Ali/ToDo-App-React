
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import Header from './header';
import './Todo.css';


const UITodo = () => {
    const [task, setTask] = useState(undefined);
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(undefined);
    const [isEdit, setIsEdit] = useState(false);
    const [index, setIndex] = useState(undefined);
    const [start, setstart] = useState(0);

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

    useEffect(() => {
        setFilterTodo(todos);
    }, [todos]);

    const [filterTodo, setFilterTodo] = useState(filteredData?.todo);

    const addTodo = () => {
        if (task === "" || task === null) {
            console.log("empty");
        }
        else {
            setstart(new Date().getTime());
            const newTodo = {
                text: task,
                addTime: new Date(),
                isComplete: false
            };
            const allUserData = [{
                userid: id,
                todo: [...todos, newTodo]
            }];
            setTodos([...todos, newTodo]);
            window.localStorage.setItem('userTodo', JSON.stringify(allUserData));
            setTask('');
        }

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
            isComplete: false
        };
        updatedTodos[index] = editedTodo;
        const allTodoCopy = [...allTodo];
        allTodoCopy[userIdIndex] = {
            userid: id,
            todo: updatedTodos,
        };
        setTodos(updatedTodos);
        localStorage.setItem("userTodo", JSON.stringify(allTodoCopy));
        setIsEdit(false);
        setEdit('');
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
    const handleComplete = (index, completed, finish) => {
        console.log("finish > ", finish);
        const get = allTodo.indexOf(filteredData);
        const updateTodo = [...todos];
        const editTodo = {
            ...updateTodo[index],
            isComplete: completed,
            duration: finish - start
        }
        updateTodo[index] = editTodo;
        const allTodoCopy = [...allTodo];
        allTodoCopy[get] = {
            userid: id,
            todo: updateTodo,
        };
        console.log("updated :", updateTodo)
        setTodos(updateTodo);
        localStorage.setItem("userTodo", JSON.stringify(allTodoCopy));
    }
    const getAll = () => {
        console.log('all');
        const noFilter = [...todos];
        setFilterTodo(noFilter);
    }
    const getPending = () => {
        console.log('pending');
        const filterPending = todos.filter((val) => !val.isComplete);
        console.log(filterPending);
        setFilterTodo(filterPending);
    }
    const getCompleted = () => {
        console.log('completed');
        const filterComplete = todos.filter((val) => val.isComplete);
        console.log(filterComplete);
        setFilterTodo(filterComplete);

    }
    const handleLogOut = () => {
        window.localStorage.removeItem('loginKey');
        window.location.href = "login";
    }
    return (
        <div className='h-screen bg-zinc-800 text-white '>
            <Header
                userName={userName}
                logoutUser={handleLogOut}
            />
            <div>
                {!isEdit ?
                    <div className='flex justify-center items-end '>
                        <div className='pt-2 h-20 w-1/2 flex items-end flex-col justify-center max-[640px]:w-3/4 max-[640px]:p-1 max-[640px]:items-center'>
                            <label htmlFor='todo' className='block text-xl w-1/3 max-[640px]:w-1/2'>
                                Enter Tasks
                            </label>
                            <input type='text' id='todo' name='todo' onChange={(e) => setTask(e.target.value)} value={task}
                                className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium max-[640px]:w-11/12'
                                placeholder='Tasks' />
                        </div>
                        <div className='flex justify-evenly items-center w-1/4 h-12 pt-1 max-[640px]:flex-col max-[640px]:h-max max-[640px]:p-1 max-[640px]:w-1/4 gap-1'>
                            <button className='bg-blue-500 rounded w-5/12 h-8 text-lg font-medium max-[640px]:w-full max-[640px]:text-base max-[640px]:font-normal hover:bg-blue-600'
                                onClick={() => addTodo()}>
                                Add
                            </button>
                            <button className='bg-blue-500 rounded w-1/2 h-8 text-lg font-medium max-[640px]:w-full max-[640px]:text-base max-[640px]:font-normal hover:bg-blue-600'
                                onClick={() => deleteAllTodo()}>
                                Delete All
                            </button>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-end h-20 '>
                        <div className='pt-2 h-20 w-1/2 flex items-end flex-col justify-center max-[640px]:w-3/4 max-[640px]:p-1 max-[640px]:items-center'>
                            <label htmlFor='todo' className='block text-lg w-1/3 max-[640px]:w-1/2'>
                                Enter Tasks
                            </label>
                            <input type='text' id='editTodo' name='editTodo' onChange={(e) => setEdit(e.target.value)} value={edit}
                                className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium max-[640px]:w-11/12' />
                        </div>
                        <div className='flex justify-start items-center w-1/4 h-12 pt-1 pl-5 max-[640px]:h-full max-[640px]:items-end max-[640px]:w-1/4 max-[640px]:p-2'>
                            <button className='bg-blue-500 rounded w-5/12 h-8 text-lg font-medium max-[640px]:w-full max-[640px]:text-base max-[640px]:font-normal hover:bg-blue-600'
                                onClick={() => updateTodo()}>
                                Save
                            </button>
                        </div>
                    </div>}
                <div className=' w-3/4 h-12 flex justify-center items-center gap-4 max-[640px]:w-full max-[640px]:bg-zinc-700'>
                    <button className='w-1/12 bg-blue-500 rounded text-md font-medium p-1 max-[640px]:w-1/6 hover:bg-blue-700 focus:bg-blue-600'
                        onClick={() => getAll()}>
                        All
                    </button>
                    <button className=' bg-blue-500 rounded text-md font-medium p-1 max-[640px]:w-1/3 hover:bg-blue-600 focus:bg-blue-700'
                        onClick={() => getPending()}>
                        Pending
                    </button>
                    <button className=' bg-blue-500 rounded text-md font-medium p-1 max-[640px]:w-1/3 hover:bg-blue-600 focus:bg-blue-700'
                        onClick={() => getCompleted()}>
                        Completed
                    </button>
                </div>
                {filterTodo?.map((val, i) => {
                    console.log("val == >", val);
                    console.log(val.isComplete)
                    return (
                        <TodoList
                            key={`${val.text} + ${i} + ${val.duration}  ${val.addTime}`}
                            index={i}
                            val={val}
                            duration={val.duration}
                            deleteTodo={() => deleteTodo(i)}
                            editTodo={() => editTodo(i)}
                            handleComplete={handleComplete}
                            isEdit={isEdit}
                        />
                    )
                }) || 'Add some tasks'}
            </div>
        </div>
    )
}

export default UITodo;