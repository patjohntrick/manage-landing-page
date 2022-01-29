import React from 'react';
import firstImg from '../images/avatar-ali.png'

const SecondSection = () => {
  return (
    <section>
        <p className=" text-2xl text-title text-center font-bold mb-16 ">What they've said</p>
            <div className=" text-center">
                <div className=" bg-stone-100 p-4 mb-10 w-[90%] m-auto ">
                    <div className=" ">
                        <div className="img-container flex place-content-center mb-6 ">
                            <img src={firstImg} alt="" className=" w-[70px] " />
                        </div>
                        <p className=" mb-6 font-bold text-title " >Ali Bravo</p>
                        <p className=" text-sm text-paragraph mb-6 " >"We have been able to cancel so many other subscriptions since using Manage. There is no corss-channel confusion and everyone is much more focused."</p>
                    </div>
                </div>
                <ul className=" flex place-content-center ">
                    <li className=" bg-button text-button-text py-2 px-4 shadow-button-shadow shadow-md w-fit rounded-full text-sm mb-6 font-semibold ">Get Started</li>
                </ul>
            </div>
    </section>
  );
};

export default SecondSection;
