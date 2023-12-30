import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../components'
import ReactToPrint from 'react-to-print';
import { FaLessThan } from 'react-icons/fa';
import { useRef } from 'react';
import { Order } from '../components';

import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import swal from 'sweetalert';


const Join = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  })

  const { firstName, lastName, phone, email, address, city, notes } = FormData;

  const onChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }


  /* function to add new user to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'users'),
        { FormData, created: Timestamp.now() }
      ),
        swal({
          title: "تم الاشتراك بنجاح",
          text: "سيتم التواصل معك قريبا",
          icon: "success",
          button: "شكرا"
        });
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        notes: '',
      })
      // onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (

    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className='2xl:mx-20 mx-12 max-m-8 mt-[100px] md:mt-[120px] '>
        <div className="flex justify-end mt-40 items-baseline gap-4  max-sm:my-5">
          <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl">التسجيل</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
        </div>
        <div className='flex justify-end mt-20 max-sm:mt-10'>
          <h2 className='text-4xl font-bold text-[#FF7315] max-sm:text-2xl'>بيانات المندوب</h2>
        </div>

        <form action="post" onSubmit={handleSubmit}>
          <div className='flex justify-center gap-14 max-sm:gap-8 mt-20 max-sm:mt-10'  >



            <div className='flex flex-wrap gap-10 text-right w-[650px] max-sm:w-full max-sm:justify-end'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>الاسم الأخير</h2>
                <input
                  autoComplete='off'
                  type="text"
                  name='lastName'
                  value={lastName}
                  onChange={onChange}
                  required
                  className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='اسم العائلة'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>الاسم الأول</h2>
                <input
                  autoComplete='off'
                  type="text"
                  name='firstName'
                  value={firstName}
                  onChange={onChange}
                  required
                  className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='ادخل اسمك'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>المدينة</h2>
                <input
                  autoComplete='off'
                  type="text"
                  name='city'
                  value={city}
                  onChange={onChange}
                  required
                  className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='اسم المدينة'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>رقم الهاتف</h2>
                <input
                  autoComplete='off'
                  type="number"
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  required
                  className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='برجاء ادخال رقم الهاتف المحمول'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>البريد الالكترونى</h2>
                <input
                  autoComplete='off'
                  type="email"
                  name='email'
                  value={email}
                  onChange={onChange}
                  required
                  className='w-[620px] max-sm:w-full h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='ادخل بريدك الاكتروني'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>العنوان</h2>
                <textarea
                  autoComplete='off'
                  type="text"
                  name='address'
                  value={address}
                  onChange={onChange}
                  required
                  className='w-[620px] max-sm:w-full h-20 border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='العنوان بالتفصيل'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>ملاحظات</h2>
                <textarea
                  autoComplete='off'
                  type="text"
                  name='notes'
                  value={notes}
                  onChange={onChange}
                  className='w-[620px] max-sm:w-full h-28 border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base'
                  dir='rtl'
                  placeholder='...'
                />
              </div>
            </div>


          </div>
          <div className='flex justify-center items-center my-10'>
            <button className=' bg-[#FF7315] w-72  p-2 text-white rounded-md' type='submit'>ارسال الطلب</button>
          </div>
        </form>

      </div>

      <Footer />
    </>
  )
}

export default Join