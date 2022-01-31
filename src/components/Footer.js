import React from 'react';
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className=" bg-title text-button-text py-10 ">

      <form action="" className="flex place-content-center mb-10 ">
          <input type="email" placeholder=" Input your email " className=" rounded-full mr-2 py-2 px-4 text-sm text-title " />
          <button className=" bg-button text-button-text py-2 px-6 font-semibold text-sm rounded-full ">Go</button>
      </form>

      <div className=" text-sm text-button-text flex w-[80%] m-auto justify-evenly items-start mb-10 " >
        <ul className="grid gap-1 " >
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className=" grid gap-1 " >
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="logo w-90% m-auto mb-10 ">
        <div className="img-container mb-4">
          <img src={logo} alt="" className=" m-auto " />
        </div>
        <div className="social-links flex place-content-center gap-4 ">
          <img src={facebook} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <div className=" text-center text-sm text-button-text " >
        <p>Copyright {year}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
