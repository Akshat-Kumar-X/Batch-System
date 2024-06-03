"use client"

import Image from 'next/image'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Download = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const ScrollReveal = require('scrollreveal').default;
    
          ScrollReveal().reveal('.reveal', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            reset: false,
          });
        }
      }, []);

    const handleDownloadClick = () => {
    toast.success('Download Complete');
    };
    
  return (
    <section id="download" className="px-6 md:px-20 py-12 relative"> 
        <div className='absolute w-[400px] h-[400px] hero-gradient  z-[-1] top-[-100px] left-[-20px]'/>
      <div 
        className='bg-cover bg-center bg-no-repeat h-[509px] text-white rounded-xl' 
        style={{ backgroundImage: "url('/images/Frame.png')" }}
      >
        <div>
            <div className='flex flex-col  justify-center items-start gap-4 pt-[123px] ms-14 reveal'>
                <h4 className='flex gap-2 font-bold justify-start items-center text-5xl pe-3 mb-3'>
                    Ready To Get Started?
                </h4>
                <p className='font-thin text-[20px] '>Risus habitant leo egestas mauris diam eget morbi <br />  tempus vulputate.</p>
                <button onClick={handleDownloadClick} className='bg-white flex justify-center items-center gap-2 font-semibold rounded-[5px] px-9 py-3 text-black hover:bg-blue-400 hover:scale-105  duration-300'>
                    Download App
                    <Image 
                        src="/icons/apple.svg" 
                        width={30}
                        height={30}
                        alt="apple"
                        className='pb-1'
                    />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
