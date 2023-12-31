import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import { NavHashLink } from 'react-router-hash-link';
const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          <NavHashLink
            smooth to="#audience"
            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
          >
            Audience
          </NavHashLink>
          <NavHashLink
            smooth to="#about"
            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
          >
            About Us
          </NavHashLink>
          <NavHashLink
            smooth to="#contact"
            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
          >
            Contact Us
          </NavHashLink>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <NavHashLink
              smooth to="#audience"
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Audience
            </NavHashLink>
            <NavHashLink
              smooth to="#about"
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              About Us
            </NavHashLink>
            <NavHashLink
              smooth to="#contact"
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Contact Us
            </NavHashLink>
            {user ? <>
              <h1 className='text-2xl p-2'>{user.displayName}</h1>
              <Link
                to='/dashboard'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Dashboard
              </Link>
              <div
                onClick={logOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                LogOut
              </div></> : <>
              {user ? <> </> : <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link></>}
            </>}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
