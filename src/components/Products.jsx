import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Button";
// updates 
import { homePageProducts as products } from './Constants'
// import { products } from "./Constants";
// import pdf from "../assets/file/NamaTaiba-profile.pdf";
import code from "../assets/code.png"
import vision from "../assets/vision.png"
import gurante from "../assets/gurante.png"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../index.css";






const Products = () => {
  const [showModal, setShowModal] = React.useState(false);
  //id of product
  const [id, setId] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // make esc key close model
  const keyPress = React.useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        // console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  // make modal refrence to close model
  React.useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const modalRefs = React.useRef();

  // make closeModal function to close model
  const closeModal = (e) => {
    if (e.target === modalRefs.current) {
      setShowModal(false);
    }
  };
  // make modal close when click outside model
  React.useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => document.removeEventListener("mousedown", closeModal);
  }, [setShowModal]);





  return (
    <div id="products">
     {showModal && (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer  fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
              ref={modalRefs}>
              {products
                .filter((product) => product.id === id)
                .map((product) => (
                  <div key={product.id}
                    onClick={() => {
                      closeModal, setShowModal(true);
                    }}
                    className="  flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-80 relative group  rounded-3xl bg-white shadow-lg   ">
                    <div className="h-44 w-full ">
                      <Swiper
                        modules={[
                          Navigation,
                          Pagination,
                          Scrollbar,
                          A11y,
                          EffectFade,
                          Autoplay,
                        ]}
                        effect={"fade"}
                        navigation>
                        <SwiperSlide className="rounded-t-3xl">
                          <div className="  h-64 w-full flex justify-center items-center  ">
                            <img
                              className="transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-96  w-72 h-72 hover:h-96 object-contain  "
                              src={product.image}
                              alt="productImage"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-t-3xl">
                          <div className="  h-64 w-full flex justify-center items-center   ">
                            <img
                              className="transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-96  w-72 h-72 hover:h-96 object-contain"
                              src={product.image}
                              alt="productImage"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>

                    <div className={` text-center text-black 2xl:text-lg text-sm h-32 2xl:h-40 w-full rounded-b-lg pb-5   flex flex-col  gap-2 py-2`}>
                      <div className="mx-4 flex flex-col justify-center items-center gap-1   text-sm">
                        <p className="text-[#FF7315] text-lg">{product.name}</p>
                        <p className="text-gray-800 bg-white px-6 rounded-md">{product.size} </p>
                        <h2 className={`font-semibold ${product.bg}  text-center m-2 px-4 text-white p-1`}>{product.use}</h2>
                      </div>
                      {/* <div className="flex justify-center mx-2">
                      <p>{product.size}</p>
                    </div> */}
                    </div>
                  </div>
                ))}
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black overflow-hidden"></div>
          </>
        )}

      <div className="2xl:m-20 m-12 ">
        <h1 className="2xl:text-5xl text-4xl  text-[#3A3535] font-bold text-center mb-20">
          منتجاتنا
        </h1>
       {/* ============ new card  */}
       <div className="hidden md:flex flex-wrap flex-row justify-center  gap-32 2xl:gap-x-32  gap-x-[125px] mt-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className=" flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-96 relative group  rounded-lg border border-gray-50 shadow-lg  ">
              <div className=" w-full">
                <div className="flex justify-between w-full absolute z-10">
                  <img
                    src={gurante}
                    alt="gurante"
                    className="object-contain w-16"
                  />
                  <div className="flex">
                    {!product.gur && (
                      <img
                        src={code}
                        alt="code"
                        className="object-contain w-12 rounded-tr-lg"
                      />
                    )}
                    <img
                      src={vision}
                      alt="code"
                      className="object-contain w-12 -rotate-90 -mr-1 rounded-tr-lg"
                    />
                  </div>
                </div>
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    EffectFade,
                    Autoplay,
                  ]}
                  effect={"fade"}
                  navigation>
                  <SwiperSlide>
                    <div className=" h-64 w-full flex justify-center items-center  ">
                      <img
                        className="transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-96  w-72 h-72 hover:h-96 object-contain"
                        src={product.image}
                        alt="productImage"
                        onClick={() => {
                          closeModal,
                            setShowModal(true),
                            setId(product.id),
                            console.log(id);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" h-64 pt-1 w-full flex justify-center items-center  ">
                      <img
                        className="transition duration-[2000]   delay-300 hover:transition-all ease-out     hover:w-96  w-72 h-72 hover:h-96 object-contain  "
                        src={product.image}
                        alt="productImage"
                        onClick={() => {
                          closeModal,
                            setShowModal(true),
                            setId(product.id),
                            console.log(id);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className={`${product.bg} text-right text-black 2xl:text-lg text-sm h-32 2xl:h-40 w-full rounded-b-lg pb-5   flex flex-col  gap-2 py-2`}>
                <div className="flex flex-col gap-4 items-center mx-2">
                  <p>{product.name}</p>
                  <div className="flex font-bold  gap-2 ">
                    {/* <p className="text-gray-800 text-lg">ر.س الحبة</p> */}
                    {/* <p className="text-gray-800 bg-white px-6 rounded-md">{product.price} </p> */}
                  </div>
                </div>
                <div className="flex justify-center mx-2">
                  <p>{product.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="2xl:m-20 m-4 ">




          {/* Mobile version */}



          <div className="flex flex-wrap flex-row justify-center  h-[450px] md:hidden">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade,
                Autoplay,
              ]}
              pagination={{
                dynamicBullets: true,
                clickable: true,
                dynamicMainBullets: 4
              }}
              effect={"fade"}
              // navigation
              // speed={2500}
              // autoplay={{ delay: 1500, disableOnInteraction: false }}
              style={{
                "--swiper-pagination-color": "#FF7315",
                "--swiper-pagination-bullet-inactive-color": "gray",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "10px",
              }}
              className="">
              {products.map((product) => (
                <SwiperSlide key={product.id} >
                  <div

                    className=" flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-96 relative group  rounded-lg border border-gray-50 shadow-lg mb-20 "
                  >
                    <div className=" w-full">
                      <div className="flex justify-between gap-[140px] absolute z-10 mt-3">
                        <img src={gurante} alt="gurante" className="object-contain w-16  " />
                        {!product.gur && <img src={code} alt="code" className="object-contain w-14 rounded-tr-lg ml-2" />}
                      </div>
                      <Swiper
                        modules={[
                          Navigation,
                          Pagination,
                          Scrollbar,
                          A11y,
                          EffectFade,
                          Autoplay,
                        ]}

                        effect={"fade"}
                        navigation
                      // speed={2500}
                      // autoplay={{ delay: 1500, disableOnInteraction: false }}

                      >
                        <SwiperSlide>
                          <div className=" h-64 w-full flex justify-center items-center  ">
                            <img
                              className="transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-44  w-36 h-36 hover:h-44 object-contain"
                              src={product.image}
                              alt="productImage"
                              onClick={() => {
                                closeModal, setShowModal(true), setId(product.id);
                              }}
                            />

                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className=" h-64 pt-1 w-full flex justify-center items-center  ">
                            <img
                              className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out    hover:w-48  w-36 h-36 hover:h-48  rotate-90 object-contain"
                              src={product.image}
                              alt="productImage"
                              onClick={() => {
                                closeModal, setShowModal(true), setId(product.id);
                              }}
                            />
                          </div>
                        </SwiperSlide>

                      </Swiper>
                    </div>

                    <div className={`${product.bg} text-right text-black 2xl:text-lg text-sm h-32 2xl:h-40 w-full rounded-b-lg pb-5   flex flex-col  gap-2 py-2`}>
                      <div className="flex flex-col gap-4 items-center mx-2">
                        <p className="text-lg py-2">{product.name}</p>
                        <div className="flex font-bold  gap-2 ">
                          {/* <p className="text-gray-800 text-lg">ر.س الحبة</p> */}
                          {/* <p className="text-gray-800 bg-white px-6 rounded-md">{product.price} </p> */}
                        </div>
                      </div>
                      <div className="flex justify-center mx-2">
                        <p>{product.size}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex-col items-center justify-center text-center   2xl:mt-36">
          <a
            href="https://drive.google.com/u/0/uc?id=1Umv1aegzEwBb8JTRtNcrhAa7oCNEIlT5&export=download"
            download
            className="text-[#FF7315]  text-center  2xl:text-4xl text-3xl border-b border-[#FF7315] buttonss   ">
            تحميل ملف نما طيبة
          </a>
          <div className="-mt-10 mb-20 ">
            <div className="flex justify-center">
              <Link to="/products">
                <button className="text-lg text-[#FF7315] bg-[#232020] rounded-xl w-[122px] h-[51px] text-center mt-20 transition ease-in-out hover:text-xl hover:bg-[#FF7315] hover:text-[#232020] ">
                  عرض المزيد
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Products;