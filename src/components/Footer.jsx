import React from "react";
import logo from "../assets/logo.png";
import location from "../assets/location.png";
import message from "../assets/message.png";
import call from "../assets/call.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";
import { FaSnapchat, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#222222]">
      <div className=" mt-6  mx-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 justify-end text-white max-sm:mx-5 max-sm:flex max-sm:flex-col">



        <div className=" mt-8   flex-col p-4  col-span-2 items-end flex">
          <img src={logo} alt="logo" className="mr-6 mb-8" />
          <p className="text-right 2xl:text-[16px] text-sm    leading-9">
            يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع الرائدة فى مجال
            البلكات الأسمنتية وتم تأسيسه عام 2016 بهيئة مدن الصناعية بالمدينة
            المنورة ، مستوي من الكفاءة والجوده لضمان خروج منتج عالى الجودة
          </p>
        </div>
        <div className="col-span-2 columns-3 flex-col items-end flex ">
          <h1 className="2xl:text-3xl text-xl font-bold relative right-6 my-8">اتصل بنا</h1>
          <div className="grid grid-flow-row  grid-cols-4  relative left-14 row-start-3 ">
            <p className="max-sm:pr-2 col-span-3 w-80 relative right-2 text-sm max-sm:right-12 max-sm:text-right">
              الادارة : المدينة المنور ة - شارع الملك عبد العزيز - مبنى الخمرى
              بلازا - الدور السابع - مكتب 13
            </p>
            <img
              src={location}
              alt="location"
              className="relative left-2 col-span-1 max-sm:left-3"
            />
          </div>
          
          <p className="relative right-[74px] mb-5 mt-2 text-sm max-sm:right-12">
            المصنع : المنطقة الصناعية الجديدة - مدن شارع (63)
          </p>
          <div className="grid grid-flow-row  grid-cols-4  relative left-6 row-start-3 mb-6">
            <a className="col-span-3 pr-6 text-sm max-sm:pr-2 ">Nama-sales@khomrigroup.com</a>
            <img
              src={message}
              alt="message"
              className="relative left-2 col-span-1 max-sm:left-3"
            />
          </div>
          <div className="grid grid-flow-row  grid-cols-4  relative left-4 row-start-3 my-4 pb-8 ">
            <a className="col-span-3 pr-6 text-sm max-sm:pr-2">0555301707 - 0500361234</a>
            <img
              src={call}
              alt="call"
              className="relative left-2 col-span-1 max-sm:left-3"
            />
          </div>
        </div>
     
        <div className="col-span-1 flex flex-col items-end  ">
          <h1 className="2xl:text-3xl text-xl font-bold relative  my-8">خريطة الموقع</h1>
          <div className="flex flex-col">
            <div className="flex gap-6 flex-wrap justify-end mb-8  lg:flex-col max-sm:items-end">
              <Link to="/" className="underline text-sm">
                الرئيسية
              </Link>
              <Link to="/about" className="underline  text-sm">
                من نحن
              </Link>
              <Link to="/products" className="underline text-sm">
                منتجاتنا
              </Link>
              <Link to="/partners" className="underline text-sm">
                شركاء النجاح
              </Link>
              <Link to="/quality" className="underline text-sm">
                الجودة
              </Link>
            </div>
            <div className="flex justify-center md:justify-end gap-3 max-sm:pb-5 max-sm:gap-6">
              <a href="https://www.facebook.com/profile.php?id=100086364507234" target="_blank">
                {" "}
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/NamaTaiba" target="_blank">
                {" "}
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/nama_taiba/" target="_blank">
                {" "}
                <img src={instagram} alt="instagram" />
              </a>

              <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US" target="_blank">
                {" "}
                <FaSnapchat className="w-[33px] h-[33px]" />
              </a>
              <a href="https://www.tiktok.com/@nama_taiba?_t=8Z63GNdCZaE&_r=1" target="_blank">
                <FaTiktok className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
