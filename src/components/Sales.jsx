import React from 'react'
import sale from '../assets/sale.jpeg'
const Sales = () => {
  return (
    <div className='m-20'>
        <h1 className='text-5xl font-bold text-[#3A3535] text-center my-10'>اعلانات</h1>
        <div className='flex justify-around items-center'>
            <img src={sale} alt="sale image" className='w-96 h-96'/>
            <p className='font-semibold w-[35rem] text-2xl leading-10'>
            لفترة محدودة عروض نما طيبة بمناسبة يوم التأسيس 
1000 بلُك مجانًا عند التعاقد على 10.000 بلُك لأول 100 اتصال🤝
التوصيل لكافة أنحاء المملكة العربية السعودية.
<br />
يسعدنا تواصلكم على:
0500631234 - 0555301707
<br />
أو من خلال الواتساب: https://wa.me/966555301707
العنوان: المدينة المنورة الصناعية الجديدة
            </p>
        </div>
    </div>
  )
}

export default Sales