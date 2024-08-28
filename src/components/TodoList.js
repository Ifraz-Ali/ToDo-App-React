import React, { useEffect, useState } from 'react'
import './Todo.css'

const TodoList = ({ index, val, deleteTodo, editTodo, handleComplete, duration }) => {
    const [complete, setComplete] = useState(val.isComplete);

    const [second, setSecond] = useState(Math.floor(((duration || 0) / 1000) % 60));
    const [minute, setMinute] = useState(Math.floor(((duration || 0) / 1000 / 60) % 60));
    const [hour, setHour] = useState(Math.floor(((duration || 0) / 1000 / 60 / 60) % 24));

    const handleChnage = (e) => {
        setComplete(e.target.checked);
        handleComplete(index, e.target.checked, new Date().getTime());
    }


    return (
        // not responsive
        // <div className=' flex justify-around items-center bg-white text-gray-900 w-1/2 m-auto rounded-full mt-3'>
        //     <div className='flex flex-col items-center justify-center '>
        //         {complete ? <input type='checkbox'
        //             className='w-5 h-5 rounded-full accent-green-500 cursor-pointer' onChange={handleChnage}
        //             checked={complete} disabled />
        //             :
        //             <input type='checkbox'
        //                 className='w-5 h-5 rounded-full accent-green-500 cursor-pointer' onChange={handleChnage}
        //                 checked={complete} />
        //         }
        //         {complete ? <div className=''>
        //             <span className='text-red-500'>completed:</span>
        //             <span className=' '>{hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : `${minute}`}:{second < 10 ? `0${second}` : second}</span>
        //         </div>
        //             : <span>Not Completed</span>
        //         }
        //     </div>
        //     <div className=' w-1/2 '>
        //         <p className='flex justify-between items-center flex-col '>
        //             {complete ?
        //                 <span className={'font-semibold text-lg line-through decoration-2 text-gray-400'}>
        //                     {val.text}
        //                 </span>
        //                 :
        //                 <span className='font-semibold text-lg'>
        //                     {val.text}
        //                 </span>
        //             }
        //             <span className='text-gray-500'>{!val.editTime ? new Date(val.addTime).toLocaleTimeString() : `${new Date(val.editTime).toLocaleTimeString()} [edited]`}</span>
        //         </p>
        //     </div>
        //     <div className='w-1/5 flex justify-center '>
        //         {complete ? <button className='bg-blue-500 rounded-2xl w-1/2 h-8 text-md font-medium text-white mr-1 disabled:bg-blue-300'
        //             onClick={editTodo} disabled>
        //             Edit
        //         </button>
        //             :
        //             <button className='bg-blue-500 rounded-2xl w-1/2 h-8 text-md font-medium text-white mr-1'
        //                 onClick={editTodo}>
        //                 Edit
        //             </button>
        //         }
        //         <button className='bg-blue-500 rounded-2xl w-1/2 h-8 text-md font-medium text-white'
        //             onClick={deleteTodo}>
        //             Delete
        //         </button>
        //     </div>
        // </div>

        // complete responsive 
        <div className='flex md:flex-row justify-around items-center bg-white text-gray-900 w-full md:w-3/4 lg:w-1/2 m-auto rounded-full mt-3 p-1.5  max-[640px]:p-0.5 max-[640px]:justify-center'>
            <div className='flex flex-col items-center justify-center md:mb-0 max-[640px]:w-1/5 sm:w-1/4 '>
                {complete ? (
                    <input
                        type='checkbox'
                        className='w-5 h-5 rounded-full accent-green-500 cursor-pointer disabled:cursor-not-allowed'
                        onChange={handleChnage}
                        checked={complete}
                        disabled
                    />
                ) : (
                    <input
                        type='checkbox'
                        className='w-5 h-5 rounded-full accent-green-500 cursor-pointer'
                        onChange={handleChnage}
                        checked={complete}
                    />
                )}
                {complete ? (
                    <div className='mt-2 max-[640px]:flex max-[640px]:flex-col'>
                        <span className='text-red-500 max-[640px]:ml-2'>Completed:</span>
                        <span className='sm:text-center max-[640px]:ml-4'>{hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : `${minute}`}:{second < 10 ? `0${second}` : second}</span>
                    </div>
                ) : (
                    <span className=' max-[640px]:text-center'>Not Completed</span>
                )}
            </div>
            <div className='w-1/2 md:w-1/2 md:mb-0 max-[640px]:w-1/2 '>
                <p className='flex flex-col items-center sm:items-center md:items-center lg:items-center'>
                    {complete ? (
                        <span className='font-semibold text-lg line-through decoration-2 text-gray-400'>
                            {val.text}
                        </span>
                    ) : (
                        <span className='font-semibold text-lg'>
                            {val.text}
                        </span>
                    )}
                    <span className='text-gray-500 text-sm mt-1'>
                        {!val.editTime ? new Date(val.addTime).toLocaleTimeString() : `${new Date(val.editTime).toLocaleTimeString()} [edited]`}
                    </span>
                </p>
            </div>
            <div className='w-full  sm:w-1/4 sm:gap-1 md:w-1/4 flex justify-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:w-1/5 max-[640px]:pr-1 max-[640px]:gap-1'>
                {complete ? (
                    <button
                        className='bg-blue-500 rounded-2xl w-full md:w-1/2 h-8 text-md font-medium text-white disabled:bg-blue-300 disabled:cursor-not-allowed'
                        onClick={editTodo}
                        disabled
                    >
                        Edit
                    </button>
                ) : (
                    <button
                        className='bg-blue-500 rounded-2xl w-full md:w-1/2 h-8 text-md font-medium text-white hover:bg-blue-600'
                        onClick={editTodo}
                    >
                        Edit
                    </button>
                )}
                <button
                    className='bg-blue-500 rounded-2xl w-full md:w-1/2 h-8 text-md font-medium text-white hover:bg-blue-600'
                    onClick={deleteTodo}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoList;