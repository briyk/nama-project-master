import React, { useState } from "react";
import { Navbar } from "../components";
import { FaLessThan } from "react-icons/fa";
import { Link, useNavigate , Navigate} from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";

const Invoice = () => {
  return (
    <div className="mb-16">
        <Navbar/>
         <div className='2xl:mx-20 mx-12 max-m-8 mt-[100px] md:mt-[120px] '>
                <div className="flex justify-end mt-40 items-baseline gap-4  max-sm:my-5">
                    <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl"> تسجيل فاتورة</h1>
                    <span>
                        <FaLessThan />
                    </span>
                    <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
                </div>
            </div>
            <div className='2xl:mx-20 mx-12 max-m-8 mt-[100px] md:mt-[120px]' dir="rtl">
                <InvoiceForm/>
            </div>
    </div>
  )
}
export default Invoice