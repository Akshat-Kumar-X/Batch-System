"use client"

import Image from 'next/image'
import { useEffect } from 'react';

const Advantages = () => {
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
    <>
      <section id="about" className="px-6 md:px-20 py-12 ">
        <div className="flex max-md:flex-col gap-16">
          <div className='relative flex-1 flex flex-col justify-center items-center'>
            <h3 className='text-[#FF5555] font-medium text-2xl reveal'>Advantages</h3>
            <h2 className='text-5xl font-bold text-center reveal'>Why Choose Uifry?</h2>
            <div className="flex flex-col justify-start items-center gap-6 mt-10 reveal">
              <h4 className='flex gap-2 font-semibold justify-start items-center text-3xl pe-3'>
                <Image 
                  src="/icons/bell.svg" 
                  width={35}
                  height={35}
                  alt="star"
                  className=''
                />
                Clever Notifications
              </h4>
              <p className='text-gray-500 font-medium '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
          </div>
          <div className='flex-1 relative min-h-[550px] '>
            <Image
              src="/images/rings.png" 
              width={700}
              height={700}
              alt="logo"
              className='absolute z-40 top-0 left-[-35px]'
            />
            <Image 
              src="/images/Advantage.png" 
              width={350}
              height={350}
              alt="Mobile"
              className='absolute z-50 top-0 md:left-28 left-[75px] slideinleft'
            />
          <div className='absolute w-[600px] h-[500px] hero-gradient  z-[-1] top-[100px] left-[-120px]'/>
        </div>
      </div>
    </section>
    <section className="px-6 md:px-20 py-12 ">
      <div className="flex max-md:flex-col-reverse gap-16">
        <div className='flex-1 relative min-h-[550px]'>
          <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-50 absolute md:top-[-100px] top-[-350px] md:left-[500px] left-[400px]'
          />
          <Image
            src="/images/rings.png" 
            width={700}
            height={700}
            alt="logo"
            className='absolute z-40 top-0 left-[-35px]'
          />
          <Image 
            src="/images/Advantages-2.png" 
            width={350}
            height={350}
            alt="Mobile"
            className='absolute z-50 top-0 md:left-28 left-[75px] slideinleft'
          />
          <div className='absolute w-[700px] h-[600px] hero-gradient  z-[-1] top-[100px] left-[-120px]'/>

        </div>
        <div className='relative flex-1 flex flex-col justify-center items-center reveal'>
          <div className=" flex-col justify-start items-center gap-6 mt-10">
            <h4 className='flex gap-2 font-semibold justify-start items-center text-3xl pe-3 mb-7'>
              <Image 
                src="/icons/bell.svg" 
                width={35}
                height={35}
                alt="star"
                className=''
              />
              Fully Customizable
            </h4>
            <p className='text-gray-500 font-medium '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
          <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-50 absolute bottom-[-40px] left-[500px]'
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Advantages