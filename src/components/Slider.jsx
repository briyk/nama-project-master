import React, { useState, useEffect } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import "../index.css";

import slide1 from '/slides/1.png'
import slide2 from '/slides/2.png'
import slide3 from '/slides/3.png'
import slide4 from '/slides/4.png'
import slide5 from '/slides/5.png'
import slide6 from '/slides/6.png'
import slide7 from '/slides/7.png'
import slide8 from '/slides/8.png'
import slide9 from '/slides/9.png'
import slide10 from '/slides/10.png'


const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(4); // Default number of slides

  const handleResize = () => {
    // Adjust the number of slides based on window width
    if (window.innerWidth <= 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }
  };


  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function on initial mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="mt-[100px] md:mt-[200px] mb-8 ">
      <div className="container">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          autoplay={{ delay: 1000 }}
          loop={true}
          scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={slide1} alt="" className=" w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide7} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide8} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide9} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide10} alt="" className="w-36 h-24 max-md:w-44 max-md:h-28 object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;