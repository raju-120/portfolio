import React from 'react';

const Contact = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] mb-96' id='contact'>
      <div className='items-center'>
        <h1 className='text-5xl font-semibold text-center'>Get In Touch</h1>
        <div className='mt-14 items-center text-center'>
          <p className='mx-w-sm text-center'>Currently, I'm looking for any new opportunities.Feel free to inbox me. <br />
            Whether you have a question or just want to 
            say hi, <br /> I'll try my best to get back to you!
          </p>
          <button className='btn btn-sm mt-20 btn-primary'>
            <a className='email-link text-2xl'  href="mailto:ashfaqraju27@gmail.com">Say Hello !</a>
          </button>
        </div>
        
      </div>
      
      <footer className="footer footer-center p-4 text-xl mt-44 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved to <br />
           <span className='text-xl text-white'>Asfak Hossain Raju</span></p>
        </div>
    </footer>
    </section>
  );
};

export default Contact;
