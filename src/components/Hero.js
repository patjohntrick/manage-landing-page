import React from 'react';
import heroImg from '../images/illustration-intro.svg'
import HeroDesign from './HeroDesign';

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-w-[70rem] m-auto my-12">
        <div className="text-container w-[40%]">
            <h1 className="text-5xl font-bold text-title leading-tight">
                Bring everyone together to build better products.
            </h1>
            <p className="my-6 leading-relaxed text-paragraph break-words w-[80%]">
                Manage make it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <ul>
                <li className="py-2 px-4 rounded-full bg-button text-button-text w-max shadow-md shadow-button-shadow cursor-pointer transition-all hover:shadow-lg hover:shadow-button-shadow">Get Started</li>
            </ul>
        </div>
        <div className="img-container w-1/2 flex justify-center">
            <img src={heroImg} alt=""/>
        </div>
        <HeroDesign />
    </div>
  );
};

export default Hero;
