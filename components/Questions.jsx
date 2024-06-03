"use client"

import Image from 'next/image'
import { useEffect } from 'react';

const Questions = () => {
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
          ScrollReveal().reveal('.slideinleft', {
            distance: '70px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'right',
            reset: false,
          });
          ScrollReveal().reveal('.slideinright', {
            distance: '70px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'left',
            reset: false,
          });
        }
      }, []);

  return (
    <section id="questions" className="px-6 md:px-20 py-12 relative">
        <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-0 absolute md:top-[100px] top-[-50px] md:left-[700px] '
        />
        <h3 className="text-[#FF5555] font-medium text-2xl reveal">FAQ</h3>
        <h2 className="text-5xl font-bold reveal">Frequently Asked <br /> Questions</h2>
        <div className="flex max-md:flex-col mt-10 gap-10">
            <div className='flex-1 flex flex-col justify-center items-center gap-3'>  
                <div className='flex-1 bg-[#FF5555] text-white px-5 py-5 rounded-lg slideinright'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
                <div className='flex-1   px-5 py-5 rounded-lg slideinright'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
                <div className='flex-1 bg-[#FF5555] text-white px-5 py-5 rounded-lg slideinright'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center gap-3 '>  
                <div className='flex-1   px-5 py-5 rounded-lg slideinleft'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
                <div className='flex-1 bg-[#FF5555] text-white px-5 py-5 rounded-lg slideinleft'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
                <div className='flex-1   px-5 py-5 rounded-lg slideinleft'>
                    <h4 className='flex gap-2 font-bold justify-start items-center text-2xl pe-3 mb-3'>
                        The Best Financial Accounting <br /> App Ever!
                    </h4>
                    <p className='font-medium text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions