import React from 'react'
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = ({ userName, logoutUser }) => {

    const letter = userName.split('');
    return (
        <>
            <div className='h-20 flex border-zinc-700 border-b-2'>
                <div className=' w-11/12 flex justify-end'>
                    <div className='w-2/5 flex items-center '>
                        <h2 className='text-white text-4xl  '>My <span className='text-blue-500 font-medium'>Todo</span> App</h2>
                    </div>
                </div>
                <div className='w-1/3 flex justify-around items-center '>
                    <div className='px-6 py-1.5 gap-2 flex items-center justify-between bg-blue-500 rounded '>
                        <button className='bg-blue-500 rounded text-lg font-medium '
                            onClick={logoutUser}>Log out
                        </button>
                        <TbLogout className=' size-6 ' />
                    </div>
                    <div className='flex flex-col items-center '>
                        <div className='bg-blue-500 size-10 rounded-full flex justify-center items-center'> {letter[0].toUpperCase()} </div>
                        <h4 className='text-blue-500 text-xl'>{userName}</h4>
                    </div>
                </div>
            </div>
            {/* <div className='border h-16 flex '>
                <div className='w-11/12 border'></div>
                <div className='w-1/4 border'></div>
            </div> */}

        </>
        // </div>
    )
}

export default Header