import React from 'react';
import image  from '../assets/photo.png';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6' > 
         {/* text */}
         <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[30px] font-bold leading-[1] lg:text-[60px]'>AsfaK Hossain Raju</h1>
            <div className='mb-6 text-[20px] lg:text-[40px] font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='mr-4'>I am a </span>
              <TypeAnimation 
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'ReactJs developer',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam, beatae mollitia! Aperiam sit reiciendis, quia officiis 
                quo praesentium aliquam eligendi soluta provident temporibus 
                blanditiis minus eaque autem voluptatem voluptate veniam!
            </p>
            
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
            {/* social media */}
            <div className='flex text-[20px] gap-x-16 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub/>
              </a>
              <a href="#">
                <FaLinkedin/>
              </a>
              <a href="#">
                <FaInstagram/>
              </a>
              <a href="#">
                <FaFacebook/>
              </a>
              <a href="#">
                <FaWhatsapp/>
              </a>
            </div>
         </div>
        
        {/* img */}
         <div className='hidden lg:flex flex-2 max-w-[320px] lg:max-w-[480px]'>
          <img src={image} style={{width: '250px', backgroundColor:'gray',borderRadius:'50px'}} alt="" />
          
         </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
