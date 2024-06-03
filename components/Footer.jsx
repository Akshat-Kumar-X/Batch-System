"use client"
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Footer = () => {

    const handleClick = () => {
        toast.success('Subscribed to NewsLetter');
      };

  return (
    <section id="" className="px-6 md:px-20 py-12 ">
        <div className="flex flex-row justify-start items-start relative gap-5 ">
            <div className="flex-1 flex-col flex font-medium gap-2">
                <Link href='/' className='flex items-center gap-1'>
                <Image 
                    src="/icons/logo.svg" 
                    width={120}
                    height={120}
                    alt="logo"
                />
                </Link>
                <p className='flex  justify-start items-center gap-2 cursor-pointer'>
                    <Image 
                    src="/icons/Mail.svg" 
                    width={30}
                    height={30}
                    alt="logo"
                    /> 
                    Help@gmail.in
                </p>
                <p className='flex justify-start items-center gap-2  cursor-pointer'>
                    <Image 
                    src="/icons/phone.svg" 
                    width={30}
                    height={30}
                    alt="logo"
                    /> 
                    91+ 8800403533
                </p>
            </div>
            <div className="flex-1 flex-col flex font-medium md:ms-14" >
                <h2 className=' font-semibold text-2xl mb-4'>Links</h2>
                <p className='cursor-pointer'>Name</p>
                <p className='cursor-pointer'>About Us</p>
                <p className='cursor-pointer'>Booking</p>
                <p className='cursor-pointer'>Blog</p>
            </div>
            <div className="flex-1 flex-col flex font-medium">
                <h2 className=' font-semibold text-2xl mb-4'>Legal</h2>
                <p className='cursor-pointer'>Terms Of Service</p>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p className='cursor-pointer'>Cookie Policy</p>
            </div>
            <div className="flex-1 flex-col flex font-medium">
                <h2 className=' font-semibold text-2xl mb-4'>Product</h2>
                <p className='cursor-pointer'>Take Tour</p>
                <p className='cursor-pointer'>Live Chat</p>
                <p className='cursor-pointer'>Reviews</p>
            </div>
            <div className="flex-1 flex-col md:flex font-medium hidden">
                <h2 className=' font-semibold text-2xl mb-4'>NewsLetter</h2>
                <p className='cursor-pointer'>Saty Up to Date</p>
                <div className='flex justify-start items-center'>
                    <input type="text" placeholder='Your Email' className='w-[170px] px-10 py-4' />
                    <button 
                        onClick={handleClick}
                        className=' bg-zinc-900 rounded-[5px] px-10 py-4 text-white hover:bg-zinc-700 hover:scale-105  duration-300'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div className="flex-col flex font-medium md:hidden mt-3">
                <h2 className=' font-semibold text-2xl mb-4 text-center'>NewsLetter</h2>
                <div className='flex justify-center items-center'>
                    <input type="text" placeholder='Your Email' className='w-[170px] px-10 py-4' />
                    <button 
                        onClick={handleClick}
                        className=' bg-zinc-900 rounded-[5px] px-10 py-4 text-white hover:bg-zinc-700 hover:scale-105  duration-300'>
                        Subscribe
                    </button>
                </div>
            </div>
        <div className='mt-16'>
            <hr className='hr-fade' />
            <p className='text-center font-medium text-gray-600 mt-5'> Copyright @Akshat AllrightsReserved</p>

        </div>
    </section>
  )
}

export default Footer