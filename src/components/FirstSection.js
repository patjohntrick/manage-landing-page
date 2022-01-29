import React from 'react';

const FirstSection = () => {
  return (
        <section className=" w-[90%] m-auto md:flex md:justify-between mb-24 ">
            <div className=" md:w-[40%] ">
                <div className=" text-center mb-8 md:text-left ">
                    <p className=" text-2xl font-bold text-title leading-tight ">What's the different about Manage?</p>
                    <p className=" text-paragraph text-sm leading-6 my-4 py-1 sm:w-[80%] sm:m-auto md:w-[80%] md:ml-0 ">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                </div>
            </div>
            <div className=" md:w-[50%] sm:w-[70%] sm:m-auto ">
                <div className="mb-8 " >
                    <p className=" text-sm font-bold mb-4 text-title"><span className=" mr-2 bg-button text-button-text py-1 px-4 rounded-full font-semibold ">01</span>Track company-wide progress</p>
                    <p className="text-paragraph text-sm">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
                <div className="mb-8 " >
                    <p className=" text-sm font-bold mb-4 text-title "><span className=" mr-2 bg-button text-button-text py-1 px-4 rounded-full font-semibold  ">02</span>Advance built-in reports</p>
                    <p className="text-paragraph text-sm">Set internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you to build out the reports you need to keep your stakeholders informed.</p>
                </div>
                <div className="mb-8 " >
                    <p className=" text-sm font-bold mb-4 text-title" ><span className=" mr-2 bg-button text-button-text py-1 px-4 rounded-full font-semibold  ">03</span>Everything you need in one place</p>
                    <p className="text-paragraph text-sm">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers all-in-one team productivity situation.</p>
                </div>
            </div>
        </section>
  );
};

export default FirstSection;
