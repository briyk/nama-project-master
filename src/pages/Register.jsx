import React, { useState, useContext } from "react";
import { Navbar } from "../components";
import { FaLessThan } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../firebase";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      // Assuming you have user information after successful registration
      const registeredUser = {
        name: formData.firstName + " " + formData.lastName,
      };
      setUser(formData.firstName); // Set the user's name in the context
      localStorage.setItem("user", JSON.stringify({ name: user }));

      setFormData({ // Reset the form
        lastName: "",
        firstName: "",
        city: "",
        phone: "",
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  console.log(user);

  return (
    <div>
      <Navbar />
      <div className='2xl:mx-20 mx-12 max-m-8 mt-[100px] md:mt-[120px] '>
        <div className="flex justify-end mt-40 items-baseline gap-4  max-sm:my-5">
          <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl"> حساب جديد</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
        </div>
      </div>
      <form action="post" onSubmit={handleSubmit}>
        <div className='flex justify-center gap-14 max-sm:gap-8 mt-20 max-sm:mt-10'  >



          <div className='flex flex-wrap gap-10 text-right w-[650px] max-sm:w-full max-sm:justify-end'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>الاسم الأخير</h2>
              <input autoComplete='off' type="text" name='lastName' value={formData.lastName}
                onChange={handleChange} required className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder='اسم العائلة' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>الاسم الأول</h2>
              <input autoComplete='off'
                type="text" name='firstName' value={formData.firstName}
                onChange={handleChange} required className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder='ادخل اسمك' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>المدينة</h2>
              <input autoComplete='off'
                type="text" name='city' value={formData.city}
                onChange={handleChange} required className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder='اسم المدينة' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>رقم الهاتف</h2>
              <input autoComplete='off'
                type="number" name='phone' value={formData.phone}
                onChange={handleChange} required className='w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder='برجاء ادخال رقم الهاتف المحمول' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>البريد الالكترونى</h2>
              <input autoComplete='off'
                type="email" name='email' value={formData.email}
                onChange={handleChange} required className='w-[620px] max-sm:w-full h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder='ادخل بريدك الاكتروني' />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg 2xl:text-xl '>كلمة المرور</h2>
              <input autoComplete='off'
                type="password" name='password' value={formData.password}
                onChange={handleChange} required className='w-[620px] max-sm:w-full h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base' dir='rtl' placeholder=' كلمة المرور' />
            </div>

          </div>

        </div>
        <div className='flex justify-center items-center my-10 w-full'>
          <button className=' bg-[#FF7315] w-72  p-2 text-white rounded-md' type='submit'> تسجيل</button>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}

      </form>

    </div>
  )
}
export default Register