"use client"

import Image from 'next/image'
import { useEffect } from 'react';

const Testimonials = () => {
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
    <section id="" className="px-6 md:px-20 py-12 ">
        <div className="flex flex-col justify-center items-center relative">
            <h3 className="text-[#FF5555] font-medium text-2xl reveal">Testimonials</h3>
            <h2 className="text-5xl font-bold text-center reveal">What Other Users <br /> Say About Us</h2>
            <div className="flex max-md:flex-col-reverse gap-16 mt-10">
        
                <div className='flex-1 relative min-h-[550px]'>
                <Image
                    src="/images/rings.png" 
                    width={700}
                    height={700}
                    alt="logo"
                    className='absolute z-40 top-0 left-[-35px]'
                />
                <Image 
                    src="/images/pfp.png" 
                    width={420}
                    height={420}
                    alt="Mobile"
                    className='absolute z-50 md:top-[70px] top-[60px] md:left-[70px] left-[20px] reveal'
                />
                <div className='absolute w-[600px] h-[500px] rev-gradient  z-[-1] top-[-20px] left-[-100px]'/>

                </div>
                <div className='relative flex-1 flex flex-col justify-center items-center slideinright'>
                    <div className="flex flex-col justify-center items-start gap-6 mt-10">
                        <Image 
                            src="/images/Star.png" 
                            width={50}
                            height={50}
                            alt="logo"
                            className='z-50 absolute top-[-40px] left-[400px]'
                        />
                        <h4 className='flex gap-2 font-bold justify-start items-center text-4xl pe-3 mb-7'>
                            The Best Financial Accounting App Ever!
                        </h4>
                        <p className='text-gray-500 font-medium '>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        
                        <div className="flex gap-2 justify-start items-center">
                            <Image
                                src="/images/profiles.png" 
                                width={200}
                                height={100}
                                alt="profiles"
                                className=''
                            />
                        </div>
                        
                        <p className='font-bold text-xl '>Akshat Kumar</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials