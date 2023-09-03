import React from 'react';
import logo from '../assets/logo-removebg.png';

const Header = () => {
  return(
     
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src={logo} className='w-20' alt="" />

          <button className='btn btn-primary'>
            <a 
              href="https://drive.google.com/file/d/1pzml79V1JUp7dsizpc_gyKzh-tap4qUC/view?usp=sharing"
              >
                Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;
