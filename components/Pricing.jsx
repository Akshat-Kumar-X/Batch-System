"use client"

import { pricing } from "@/constants";
import Image from "next/image";
import { useEffect } from 'react';
import toast from "react-hot-toast";

const PriceCard = ({ plan, price, features }) => {
  const handleClick = () => {
    toast.success('Plan Activated');
  };
  return (
    <div
      className="flex flex-col items-center border p-6 m-4 bg-slate-50 rounded-lg shadow-lg h-[320px] w-[300px] hover:scale-105 duration-300"
    >
      <h3 className="text-[#FF5555] font-medium text-2xl">{plan}</h3>
      <p className="text-2xl font-bold my-2">{price}</p>
      <ul className="text-gray-800 font-medium mt-2">
        {features.map((feature, index) => (
          <li key={index} className="flex justify-start items-center gap-2">
            <Image 
              src="/icons/tick.svg" 
              width={20}
              height={20}
              alt="tick"
              className=''
            />
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className="mt-auto bg-zinc-800 px-8 py-[10px] rounded-md font-bold text-white hover:bg-slate-700 duration-300"
        onClick={handleClick}
      >
        Subscribe
      </button>
    </div>
  );
};




const Pricing = () => {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;

      ScrollReveal().reveal('.reveal', {
        distance: '70px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false,
      });
    }
  }, []);

  return (
    <section id="pricing" className="px-6 md:px-20 py-12">
      <div className="flex flex-col justify-center items-center relative">
        <h3 className="text-[#FF5555] font-medium text-2xl">Pricing</h3>
        <h2 className="text-5xl font-bold text-center">Check Our Plans.</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-14 reveal">
          {pricing.map((plan, index) => (
            <PriceCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
        <div className='absolute w-[400px] h-[400px] rev-gradient  z-[-1] md:top-[-10px] top-[100px] right-[-30px]'/>
        <div className='absolute w-[400px] h-[400px] rev-gradient  z-[-1] md:top-[200px] top-[700px] left-[-70px]'/>
      </div>
    </section>
  );
};

export default Pricing;
