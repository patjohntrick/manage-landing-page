import React from 'react';
import firstImg from '../images/avatar-ali.png'

const SecondSection = () => {
  return (
    <section>
      <p className=" text-2xl font-bold text-title text-center mb-28 " >
        What they've said
      </p>
      <div className="box-container">
        <div className="box bg-slate-100 w-[90%] m-auto rounded-sm relative  mb-10">
          <div className="img-container flex place-content-center relative top-[-50%] translate-y-[-50%] ">
            <img src={firstImg} alt="" className=" w-20 " />
          </div>
          <div className="text-container text-center p-4 -mt-8 ">
            <p className=" text-title font-bold mb-6 " >Ali Bravo</p>
            <p className=" text-paragraph text-sm " >"We have been able to cancel so many other subscriptions since using Manage. There is no corss-channel confusion and everyone is much more focused."</p>
          </div>
        </div>

        {/* <div className="box bg-slate-100 w-[90%] m-auto rounded-sm relative ">
          <div className="img-container flex place-content-center relative top-[-50%] translate-y-[-50%] ">
            <img src={firstImg} alt="" className=" w-20 " />
          </div>
          <div className="text-container text-center p-4 -mt-8 ">
            <p className=" text-title font-bold mb-6 " >Ali Bravo</p>
            <p className=" text-paragraph text-sm " >"We have been able to cancel so many other subscriptions since using Manage. There is no corss-channel confusion and everyone is much more focused."</p>
          </div>
        </div> */}
      </div>
      <ul className=" flex place-content-center mb-10 " >
        <li className=" bg-button text-button-text py-2 px-4 shadow-button-shadow shadow-md w-fit rounded-full text-sm font-semibold">Get Started</li>
      </ul>
        
    </section>
  );
};

export default SecondSection;
