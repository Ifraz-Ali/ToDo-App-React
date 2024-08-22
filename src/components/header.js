import React from 'react'
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Header = ({ userName, logoutUser }) => {
    
    const letter = userName.split('');
    return (
        <div className='relative'>
            <div className='border-zinc-700 border-b-2 h-20 flex items-center justify-center '>
                <div className=''>
                    <h2 className='text-white text-4xl '>My <span className='text-blue-500 font-medium'>Todo</span> App</h2>
                </div>
                <div className='absolute right-32 w-1/12 '>
                    {/* <Link to={'/login'}> */}
                        <span>
                            <button className='bg-blue-500 rounded w-full h-8 text-lg font-medium text-left ps-3 '
                                onClick={logoutUser}>Log out
                            <TbLogout className='size-5 absolute right-0 bottom-1.5 me-2' />
                            </button>
                        </span>
                    {/* </Link> */}
                </div>
                <div className=' absolute right-6 flex flex-col items-center'>
                    <div className='bg-blue-500 size-10 rounded-full flex justify-center items-center'> {letter[0].toUpperCase()} </div>
                    <h4 className='text-blue-500 text-xl'>{userName}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header