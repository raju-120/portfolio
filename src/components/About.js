import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import img from '../assets/photo.png'

const About = () => {
  
  return (
    
     <div className='mt-16 lg:mb-96 min-h-[85vh] lg:min-h-[78vh]' id='about'>
      <h1 className='text-5xl font-semibold text-center'>About Me</h1>
      <section className='mt-14 flex items-center' >
        
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6' > 
           
            <div className='flex-1 text-center font-secondary lg:text-left'>
  
              <motion.p
                variants={fadeIn('up', 0.3)} 
                initial='hidden'
                whileInView={'show'} 
                viewport={{once: false, amount: 0.3}} 
                className='text-xl mb-8 max-w-lg mx-auto lg:mx-0'> 
                  Hello! My name is <span className='font-bold'>Raju</span> and I enjoy creating things that live on 
                  the internet. My interest in web development started back in 2022
                  when I was a undergrad Student. I Built some of the web projects 
                  in my undergrad life and got interested building the things for the
                  Web. That's lead to now as I'm working as a Full Stack Developer.
              </motion.p>
              <div className=''>
                <motion.h2
                variants={fadeIn('up', 0.5)} 
                initial='hidden'
                whileInView={'show'} 
                viewport={{once: false, amount: 0.5}}  className='text-xl'>
                  Here are a few technologies I've been working with recently:
                  </motion.h2>
                <div>
                  <motion.ul 
                    variants={fadeIn('up', 0.7)} 
                    initial='hidden'
                    whileInView={'show'} 
                    viewport={{once: false, amount: 0.7}} 
                    className='list-inside mt-5 list-disc grid grid-cols-2  lg:w-1/2 mx-auto lg:mx-0 items-center'>
                    <li>JavaScript (ES6)</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>mongoDB</li>
                    <li>Figma</li>
                  </motion.ul>
                </div>
              </div>
            </div>
          
            {/* img */}
           <motion.div
            variants={fadeIn('down', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            className='ml-14 lg:flex max-w-[380px] lg:max-w-[480px]'>
            <img src={img} style={{width: '250px', backgroundColor:'gray',borderRadius:'50px'}} alt="" />
            
           </motion.div>
  
          </div>
        </div>
      </section>
      
     </div>
  );
};

export default About;
