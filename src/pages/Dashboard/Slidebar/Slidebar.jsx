import { useState } from 'react'
// Components
import useAuth from '../../../hooks/useAuth'
import MenuItem from './MenuItem'
import { NavLink } from 'react-router-dom'
// Icons
import { GrLogout } from 'react-icons/gr'
import { LuListTodo } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineBars } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { logOut } = useAuth()


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <NavLink to={'/'}><h1 className='text-2xl cursor-pointer'>
                            <span className='text-red-500 text-3xl'>Task</span>vision</h1>
                        </NavLink>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <NavLink to={'/'}><h1 className='text-2xl cursor-pointer'>
                                <span className='text-red-500 text-3xl'>Task</span>vision</h1>
                            </NavLink>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        <nav>
                            <MenuItem
                                icon={CgProfile}
                                label='Profile'
                                address='/dashboard'
                            />
                            {/* Menu Items */}
                            <MenuItem
                                icon={IoCreateOutline}
                                label='Create Task'
                                address='Create-Task'
                            />
                            <MenuItem
                                icon={LuListTodo}
                                label='Task Management'
                                address='TaskManagement'
                            />
                        </nav>
                    </div>
                </div>

                <div>
                    <button onClick={logOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar