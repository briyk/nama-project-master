import envlogo from "../assets/approval/env-logo.png";
import houselogo from "../assets/approval/house-logo.png"
import afa from "../assets/approval/afa.png"
import aces from "../assets/approval/aces.png"
import aso from "../assets/approval/aso.png"




const Approval = () => {
  return (
    <div className=" m-20 2xl:m-28 max-sm:m-5">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="2xl:text-5xl text-4xl font-bold  relative 2xl:mb-10 max-sm:text-2xl"> اعتمادات</h1>
      </div>
        {/* <p className=" text-center mb-10 2xl:text-3xl text-2xl max-sm:text-lg max-sm:leading-9">مصنع نما طيبة حاصل على جميع  والاعتمادات من الجهات السعودية المختصة</p> */}
      <div className="flex justify-center flex-wrap 2xl:gap-48 2xl:gap-x-72 gap-x-52 gap-20 max-sm:gap-10 max-sm:gap-x-16  ">
        <img src={houselogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={envlogo} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
        <img src={aces} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
        <img src={aso} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
        <img src={afa} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
      </div>
    </div>
  );
};

export default Approval;
