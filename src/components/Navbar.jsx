import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo24.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaSnapchat,
  FaWindowClose,
  FaTiktok,
} from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
import { productDetails, products } from "./Constants";
import chat from "../assets/chat.png";
import Chat from "./Chat";
import downar from "../assets/downar24.png";
// import whatsapp from "../assets/whatsapp.png";
import vision from "../assets/vision.png"
import cart from '../assets/cart24.png'
import { UserContext } from "../context/UserContext";

import whatsapp from '../assets/social/whatsapp.png';
import phone from '../assets/social/phone.png';
import Test from "./Test";

const Navbar = ({ textColor, socialDisplay }) => {
  const { user, setUser } = useContext(UserContext);
  const navigation = [
    // { name: "العروض", href: "/product/discount", current: false },
    { name: "شركاء النجاح", href: "/partners", current: false },
    { name: "الجودة", href: "/quality", current: false },
    { name: "من نحن", href: "/about", current: false },
    { name: "منتجاتنا", href: "/products", current: false },
    { name: "الرئيسية", href: "/", current: true },
  ];
  const navigationMob = [
    { name: "الرئيسية", href: "/", current: true },
    { name: "منتجاتنا", href: "/products", current: false },
    { name: "من نحن", href: "/about", current: false },
    { name: "الجودة", href: "/quality", current: false },
    { name: "شركاء النجاح", href: "/partners", current: false },
    // { name: "العروض", href: "/product/discount", current: false },
    // { name: "التسجيل كمندوب", href: "/join", current: false },
    { name: " تسجيل الدخول", href: "/login", current: false },

  ];


  // use state for search menu
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  // use state for mob nav menu
  const [show, setShow] = useState(false);
  // toggle function for mob nav menu
  const toggle = () => {
    setShow(!show);
  };
  // use effect for search
  // useEffect(() => {
  //   if (searchTerm.length > 0) {
  //     setSearch(true);
  //   } else {
  //     setSearch(false);
  //   }
  // }, [searchTerm]);
  const handleLogout = () => {
    // Perform any necessary logout actions (e.g., clearing local storage, API requests, etc.)

    // Clear the user state
    setUser(null);
  }
  return (
    <div className="z-50">

      <div className="hidden lg:block lg:fixed z-[99] bg-black  w-full h-[91px] 2xl:h-[126px]  bg-opacity-60 ">
        <nav
          className={` text-white hidden md:flex justify-around items-center gap-6 h-full `}
        >

          {user && Object.keys(user).length > 1 && user !== null ? (
            <div className="flex">
              {/* <p className="p-4 rounded-md text-sm font-semibold">{user}</p> */}
              <Link to="/invoice" className="bg-[#FF7315] px-4 py-0 flex items-center rounded-md text-sm font-semibold  m-0 ">اضافة فاتورة</Link>
              <button className=" p-2 rounded-md text-sm font-semibold mx-2" onClick={handleLogout}>تسجيل الخروج</button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="p-4 rounded-md text-dm font-semibold">تسجيل الدخول</button>
              </Link>
              <Link to="/join">
                <button className="bg-[#FF7315] p-4 rounded-md text-sm font-semibold">التسجيل كمندوب</button>
              </Link>
            </div>
          )}


          <div className="flex  justify-between items-center">
            <div className="hidden lg:flex  gap-x-10">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`font-medium  text-lg 2xl:text-2xl  cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>


          </div>
          <div><img src={logo} alt="asd" className=" " /></div>
        </nav>
      </div>

      {/* social media Icons */}
      {/* <div className="max-sm:hidden flex flex-col text-white 2xl:w-10 w-10 relative  left-20     z-50 ">
        
        <div className={`gap-y-8 flex flex-col ${socialDisplay} absolute top-36 2xl:top-48 left-[-1rem] z-[999]`}>
          <a href="https://www.facebook.com/profile.php?id=100086364507234" target="_blank">
            <FaFacebook className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 text-blue-500" />
          </a>
          <a href="https://www.instagram.com/nama_taiba/" target="_blank">
            <FaInstagram className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 text-red-600 " />
          </a>
          <a href="https://twitter.com/NamaTaiba" target="_blank">
            <FaTwitter className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 text-blue-400" />
          </a>
          <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US" target="_blank">
            <FaSnapchat className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 text-yellow-400 " />
          </a>
          <a href="https://www.tiktok.com/@nama_taiba?_t=8Z63GNdCZaE&_r=1" target="_blank">
            <FaTiktok className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 text-gray-800" />
          </a>

        
        </div>
      </div> */}
      {/* <Test/> */}



      {/* Whatsapp icon , login & vision */}
      <div className="flex flex-col">
        <div className="bg-gray- p-2 rounded-xl fixed  h-52 z-[99]  left-5 top-[630px] max-sm:h-36 max-sm:left-2 max-sm:top-[580px]">
          <a href="https://wa.me/9660555301707" target="_blank" >
            <img src={whatsapp} alt="whatsapp" className="md:w-16 w-10" />
          </a>
        </div>
        <div className="bg-gray- p-2 rounded-xl fixed  h-52 z-50  left-5 top-[550px] max-sm:h-36 max-sm:left-2 max-sm:top-[530px]">
          <a href="tel:+9660555301707" target="_blank" >
            <img src={phone} alt="whatsapp" className="md:w-16 w-10" />
          </a>
        </div>
      </div>
      <div className={`${window.location.pathname === "/join" && 'hidden'} rounded-xl hidden z-50  sm:hidden  max-sm:left-[8.5rem] max-sm:top-[580px]`}>
        {user && Object.keys(user).length > 1 && user !== null ? (
          <div className="flex">
            {/* <p className="p-4 rounded-md text-sm font-semibold">{user}</p> */}
            <Link to="/invoice" className="bg-[#FF7315] px-4 py-0 flex items-center rounded-md text-sm font-semibold  m-0 ">اضافة فاتورة</Link>
            <button className=" p-2 rounded-md text-sm font-semibold mx-2" onClick={handleLogout}>تسجيل الخروج</button>
          </div>
        ) : (
          <div>
            <Link to="/join">
              <button className="bg-[#FF7315] p-4 rounded-md text-sm font-semibold">التسجيل كمندوب</button>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-gray- p-2 rounded-xl fixed  h-28 z-50  right-5  top-[610px] max-sm:h-20 max-sm:right-2 max-sm:top-[560px]">
        <img src={vision} alt="vision" className="h-[50px]" />
      </div>




      {/* Mobile version */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-[999]" dir="rtl">
        <div className="bg-[#252525] h-20  z-[99]  w-full px-2">
          <div className="flex justify-between h-full  mx-4  items-center">
            <div><img src={logo} alt="logo" className="w-[100px] h-[auto]" /></div>
            <div className="flex items-center">
              <div className="mx-2">
                {user && Object.keys(user).length > 1 && user !== null ? (
                  // User is logged in
                  <div className="flex">
                    <Link to="/invoice" className="bg-[#FF7315] px-4 py-0 flex items-center rounded-md text-sm font-semibold  m-0 ">اضافة فاتورة</Link>
                    <button className=" p-2 rounded-md text-white text-sm font-semibold mx-2" onClick={handleLogout}>تسجيل الخروج</button>
                  </div>
                ) : (
                  // User is not logged in
                  <div>
                    <Link to="/join">
                      <button className="bg-[#FF7315] p-4 rounded-md text-sm font-semibold">التسجيل كمندوب</button>
                    </Link>
                   
                  </div>
                )}

              </div>
              {!show && <div><GiHamburgerMenu onClick={() => toggle()} className="text-white w-[30px] h-10 z-50 cursor-pointer" /></div>}
              {show && <div><AiOutlineClose onClick={() => toggle()} className="text-white  w-[30px] h-10 z-50 cursor-pointer" /></div>}
            </div>
          </div>
        </div>
        {show &&
          <>
            {/* //make navbar for mobile here  */}

            <div className="absolute top-20 left-7 max-w-36 transition-all ease-out duration-300 max-h-96 rounded-l-xl bg-black text-white z-[99]">
              <div className="flex  flex-col justify-center px-4 py-2 items-center  h-full">
                <div className="flex flex-col gap-2  ">
                  {navigationMob.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={`font-medium  text-lg  border-b border-white last:border-0 text-center pb-2  cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

          </>
        }
      </div>
    </div>
  );
};

export default Navbar;