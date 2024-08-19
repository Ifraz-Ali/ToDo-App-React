import React from 'react'
import './Todo.css'

const TodoList = ({ val, deleteTodo, editTodo, handleComplete }) => {

    const handle = (e) => {
        console.log(e.target.checked, val.isComplete);
        handleComplete(e.target.checked);
    }

    return (
        <div className=' flex justify-around items-center bg-white text-gray-900 w-1/2 m-auto rounded-full mt-3 '>
            <div className=''>
                <input type='checkbox'
                    className='w-5 h-5 rounded-full accent-green-500 cursor-pointer' onChange={handle} checked={val.isComplete} />
            </div>
            <div className=' w-1/2 '>
                <p className='flex justify-between items-center flex-col '>

                    {!val.isComplete ?
                        <span className='font-semibold text-lg'>
                            {val.text}
                        </span>
                        : <span className={'font-semibold text-lg line-through decoration-2'}
                        >
                            {val.text}
                        </span>
                    }
                    <span className='text-gray-500'>{!val.editTime ? new Date(val.addTime).toLocaleTimeString() : `${new Date(val.editTime).toLocaleTimeString()} [edited]`}</span>
                </p>
            </div>
            <div className='w-1/5 flex justify-center '>
                <button className='bg-blue-500 rounded-xl w-1/2 h-7 text-md font-medium text-white mr-1'
                    onClick={editTodo}>
                    Edit
                </button>
                <button className='bg-blue-500 rounded-xl w-1/2 h-7 text-md font-medium text-white'
                    onClick={deleteTodo}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoList;