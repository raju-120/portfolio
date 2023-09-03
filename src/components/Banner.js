import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <div>
      <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6' > 
         {/* text */}
         <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1>Hi. My name is</h1>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[30px] font-bold leading-[1] lg:text-[60px]'
             >
              AsfaK Hossain Raju
              </motion.h1>
            
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[20px] lg:text-[40px] font-secondary
              font-semibold uppercase leading-[1]'>
              {/* <span className='mr-4'>I am a </span> */}
              <TypeAnimation 
                sequence={[
                  'Mern-Stack Developer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.7)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'> 
                I'm a software engineer specializing in building
                 digital experiences like Web Applications. 
            </motion.p>
            
            {/* <motion.div
             variants={fadeIn('up', 0.9)} 
             initial='hidden'
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>Contact Me</button>
                <a href="#" className='text-white text-xl btn-link'>
                  My Portfolio
                </a>
            </motion.div> */}
            
            {/* social media */}
            <motion.div 
              variants={fadeIn('up', 1)} 
              initial='hidden'
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}}
              className='flex text-[20px] gap-x-16 max-w-max mx-auto lg:mx-0'>
                <a href="https://github.com/raju-120">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/ashfaq-hossen-raju-bbb149a9">
                  <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/ashfaqraju">
                  <FaInstagram/>
                </a>
                
            </motion.div>
         </div>
        
        

        </div>
      </div>
    </section>
    <div className='' >
        <h1 className='text-xl rotate-90 'style={{marginLeft:'1000px',position: 'relative'}}>ashfaqraju27@gmail.com</h1>
      </div>
    </div>
  );
};

export default Banner;
