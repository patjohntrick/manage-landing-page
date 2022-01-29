import React from 'react';
import heroImg from '../images/illustration-intro.svg'

const Hero = () => {
  return (
    <div className=" md:flex lg:flex lg:justify-center mb-24 ">
        <div className="img-container flex justify-center order-2 md:w-[50%]">
            <img src={heroImg} alt="" className=" w-[100%] " />
        </div>
        <div className="text-container w-[80%] m-auto md:w-[40%] ">
            <p className=" text-3xl font-bold text-center text-title leading-tight md:text-left">Bring everyone together to build better products.</p>
            <p className=" text-sm text-paragraph m-auto text-justify w-[90%] leading-6 font-normal my-4 md:text-left md:w-[75%] md:mx-0 ">Manage make it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <ul className=" flex justify-center md:justify-start">
                <li className=" bg-button text-button-text py-2 px-4 shadow-button-shadow shadow-md w-fit rounded-full text-sm font-semibold">Get Started</li>
            </ul>
        </div>  
    </div>
  );
};

export default Hero;
