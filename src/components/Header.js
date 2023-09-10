import React from 'react';
import resumePDF from "../assets/raju'sResume.pdf"; // Update the path to your PDF file
import logo from '../assets/logo-removebg.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src={logo} className='w-20' alt="" />

          {/* Resume download link */}
          <a
            href={resumePDF}
            download="raju'sResume.pdf"
            className='btn btn-primary'
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;