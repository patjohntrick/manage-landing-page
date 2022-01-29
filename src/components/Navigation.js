import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Weblogo from '../images/logo.svg'

const Navigation = ({toggle, navBar}) => {
  return (
      <nav className="flex px-3 m-auto py-5 shadow-sm justify-between items-center text-title font-normal ">
          <div className="logo w-[30%] ">
            <img src={Weblogo} alt="" />
          </div>
          <div className="links hidden lg:flex items-center w-[70%] justify-between ">
            <ul className="flex items-center w-[500px] justify-between ">
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
            <div>
              <ul>
                <li className=" bg-button text-button-text p-2 rounded-full ">Get Started</li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden">
            <FaBars className={navBar ? "hidden" : "block"} onClick={toggle} />
            <FaTimes className={navBar ? "block" : "hidden"} onClick={toggle} />
          </div>
      </nav>
  )
};

export default Navigation;
