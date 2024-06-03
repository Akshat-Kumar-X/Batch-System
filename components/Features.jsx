"use client"

import Image from 'next/image'
import { useEffect } from 'react';

const Features = () => {
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
    <section id="features" className="px-6 md:px-20 py-12 ">
      <div className="flex max-md:flex-col-reverse gap-16">
        
        <div className='flex-1 relative min-h-[550px]'>
          <Image
            src="/images/rings.png" 
            width={700}
            height={700}
            alt="logo"
            className='absolute z-40 top-0 left-[-35px]'
          />
          <Image 
            src="/images/featuresMobile.png" 
            width={350}
            height={350}
            alt="Mobile"
            className='absolute z-50 top-0 md:left-28 left-[75px] slideinright'
          />
          <div className='absolute w-[600px] h-[500px] rev-gradient  z-[-1] top-[-80px] left-[-100px]'/>

        </div>
        <div className='relative flex-1 flex flex-col justify-center items-center '>
          <div className='absolute w-[500px] h-[400px] hero-gradient  z-[-1] top-[-100px] right-[-350px]'/>
          <h3 className='text-[#FF5555] font-medium text-2xl reveal'>Features</h3>
          <h2 className='text-5xl font-bold reveal'>Uifry Premium</h2>
          <div className="flex flex-col justify-center items-center gap-6 mt-10 ">
            <div className='reveal'>
              <h4 className='flex gap-2 font-semibold justify-start items-center text-xl'>
                <Image 
                  src="/icons/starShape.svg" 
                  width={25}
                  height={25}
                  alt="star"
                  className=''
                />
                Budgeting Intervals
              </h4>
              <p className='text-gray-500 font-medium mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>

            <div className='reveal'>
              <h4 className='flex gap-2  font-semibold items-center justify-start text-xl'>
                <Image 
                  src="/icons/cube.svg" 
                  width={25}
                  height={25}
                  alt="star"
                />
                Budgeting Intervals
              </h4>
              <p className='text-gray-500 font-medium mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>

            <div className='reveal'>
              <h4 className='flex gap-2 font-semibold items-center justify-start text-xl'>
                <Image 
                  src="/icons/box.svg" 
                  width={25}
                  height={25}
                  alt="star"
                />
                Budgeting Intervals
              </h4>
              <p className='text-gray-500 font-medium mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features