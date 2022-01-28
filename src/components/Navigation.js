import React from 'react';
import Weblogo from '../images/logo.svg'

const Navigation = () => {
  return (
      <nav className="m-auto max-w-[70rem] flex justify-between items-center text-sm py-4 font-medium text-title">
          <div className="logo">
            <img src={Weblogo} alt="" />
          </div>
          <ul className="flex w-6/12 justify-around">
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
          </ul>
          <div className="other-links">
              <ul className="text-gray-50">
                <li className="py-2 px-4 rounded-full bg-button text-button-text shadow-md shadow-button-shadow cursor-pointer transition-all hover:shadow-lg hover:shadow-button-shadow">Get Started</li>
              </ul>
          </div>
      </nav>
  )
};

export default Navigation;
