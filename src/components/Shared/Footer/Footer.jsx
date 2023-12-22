import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import the icons you need
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='px-4 divide-y text-gray-800 relative bottom-0 left-0'>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2023 SCC Technovision Inc. All rights reserved.
      </div>
      <div className='flex justify-center py-4'>
        <a href='#' className='mx-2'>
          <FaTwitter size={24} className='text-blue-500 hover:text-blue-700 cursor-pointer' />
        </a>
        <a href='#' className='mx-2'>
          <FaFacebook size={24} className='text-blue-500 hover:text-blue-700 cursor-pointer' />
        </a>
        <a href='#' className='mx-2'>
          <FaInstagram size={24} className='text-pink-500 hover:text-pink-700 cursor-pointer' />
        </a>
        <a href='mailto:info@example.com' className='mx-2'>
          <HiOutlineMail size={24} className='text-gray-500 hover:text-gray-700 cursor-pointer' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
