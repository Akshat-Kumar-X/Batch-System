"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import toast from 'react-hot-toast';

const Hero = () => {

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
    });
    ScrollReveal().reveal('.slideinleft', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'right',
        reset: false,
    });
    ScrollReveal().reveal('.slideinright', {
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'left',
        reset: false,
    });
  }, []);

  const handleClick = () => {
    toast.success('Getting Started');
  };

  return (
    <section id="hero" className="px-6 md:px-20 py-12 ">
      <div className="flex max-md:flex-col gap-16">
        <div className='relative flex-1 flex-col justify-center items-center'>
          <div className='absolute w-[350px] h-[300px] hero-gradient  z-[-1] -top-[100px] left-[80px]'/>
          <h2 className='text-5xl font-bold reveal'>Make The Best Financial Decisions</h2>
          <p className='text-gray-500 font-medium mt-8 reveal'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className='flex justify-start items-center gap-10 mt-8'>
            <button onClick={handleClick} className='bg-zinc-900 rounded-[5px] px-10 py-4 text-white hover:bg-zinc-700 hover:scale-105  duration-300'>Get Started →</button>
            <Link href='/'>
              <div className='flex justify-center items-center gap-2 hover:scale-105 duration-300 hover:text-gray-700'>
                <Image 
                    src="/icons/play.svg" 
                    width={30}
                    height={30}
                    alt="logo"
                />
                <p className='text-xl font-medium'>Watch Video</p>
              </div>
            </Link>
          </div>
          <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-50 absolute md:top-[300px]  top-[400px] left-[40px]'
          />
          <Image 
            src="/images/film.png" 
            width={420}
            height={420}
            alt="logo"
            className='mt-5 reveal'
          />
        </div>
        <div className='flex-1 relative min-h-[550px]'>
          <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-50 absolute top-[450px] left-[40px]'
          />
          <Image 
            src="/images/Star.png" 
            width={50}
            height={50}
            alt="logo"
            className='z-50 absolute md:top-[50px] top-[0px] md:right-[40px] right-[20px]'
          />
          <Image 
            src="/images/mobile-1.png" 
            width={500}
            height={500}
            alt="logo"
            className='absolute top-[-100px] left-[-80px] z-30 slideinleft'
          />
          <Image 
            src="/images/mobile-2.png" 
            width={500}
            height={500}
            alt="logo"
            className='absolute top-[-20px] left-[30px] z-20 slideinleft'
          />
          <Image 
            src="/images/mobile-1.png" 
            width={500}
            height={500}
            alt="logo"
            className='absolute top-[60px] left-[130px] z-10 slideinleft'
          />
          <Image 
            src="/images/rings.png" 
            width={900}
            height={900}
            alt="logo"
            className='absolute top-[-100px] left-[-30px] z-0'
          />
          <div className='absolute w-[250px] h-[200px] red-gradient  z-[0] top-[350px] left-[60px]'/>
          <div className='absolute w-[250px] h-[200px] red-gradient  z-[-1] top-[220px] left-[220px]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero