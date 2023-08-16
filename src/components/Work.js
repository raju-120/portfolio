import React from 'react';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';

import {FaGithub} from 'react-icons/fa';
import { BiLinkExternal } from "react-icons/bi";

const Work = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] mt-24 lg:mb-80' id='work'>
      <h2 className='text-center text-5xl font-bold'>Projects</h2>
      <div className='container mx-auto mt-5'>
          <div className='flex flex-col lg:flex-row gap-x-10'>
            <div className='flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0'>
              
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My Latest <br />
                  Work.
                </h2>
                <p className='max-w-sm mb-16'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Odit culpa rerum illum voluptatem aut optio consequuntur 
                  consequatur dicta velit cumque accusantium deleniti laboriosam
                  facere porro, excepturi dolorem reiciendis hic! Eos?
                </p>
              </div>
            
              <div className='group relative overflow-hidden border-2
               border-white/50 rounded-xl' >
                
                <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>
                
                <img src={img1} className='group-hover:scale-125 transition-all duration-500' alt="img1" />
                
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web-Development</span>
                </div>
                
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Doctor's Portal</span>
                </div>
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-10 transition-all duration-1000 z-50 flex'>
                  <div>
                  <span><a href="https://github.com/raju-120/doctor-portal-client">
                      <FaGithub/>
                    </a></span>
                  </div>
                  <div className='ml-5'>
                  <span><a href="https://dental-portal25896.netlify.app">
                      <BiLinkExternal/>
                    </a></span>
                  </div>
                </div>
                
              </div>

            </div>
            <div className='flex-1 flex flex-col gap-y-9'>
              <div className='group relative overflow-hidden border-2
               border-white/50 rounded-xl mb-10' >
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img src={img2} className='group-hover:scale-125 transition-all duration-500' alt="img1" />
                {/* preTitle */}
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web-Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Resell Market</span>
                </div>
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-10 transition-all duration-1000 z-50 flex'>
                  <div>
                  <span><a href="https://github.com/raju-120/used-phone-market-client">
                      <FaGithub/>
                    </a></span>
                  </div>
                  <div className='ml-5'>
                  <span><a href="https://resellmarket.netlify.app">
                      <BiLinkExternal/>
                    </a></span>
                  </div>
                </div>
              </div>

              <div className='group relative overflow-hidden border-2
               border-white/50 rounded-xl' >
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute
                z-40 transition-all duration-300'></div>
                {/* img */}
                <img src={img1} className='group-hover:scale-125 transition-all duration-500' alt="img1" />
                {/* preTitle */}
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Web-Development</span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Doctor's Portal</span>
                </div>
                <div className='absolute -bottom-full left-12
                 group-hover:bottom-10 transition-all duration-1000 z-50 flex'>
                  <div>
                  <span><a href="https://github.com/raju-120/Genius-Car-Client">
                      <FaGithub/>
                    </a></span>
                  </div>
                  <div className='ml-5'>
                  <span><a href="https://github.com/raju-120">
                      <BiLinkExternal/>
                    </a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Work;
