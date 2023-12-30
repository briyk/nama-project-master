import React, { useState , useContext } from "react";
import { Navbar } from "../components";
import { FaLessThan } from "react-icons/fa";
import { Link, useNavigate , Navigate} from "react-router-dom";
import { signIn } from "../firebase";
import { UserContext } from "../context/UserContext";


const Login = () => {
    const {user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
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
          const userResponse = await signIn(formData.email, formData.password);
          const userEmail = formData.email; // Get the user's email
      
          // Set the user's email in the context
          setUser(userEmail);
      
          // Store user email in localStorage
          localStorage.setItem("user", userEmail);
      
          navigate("/"); // Redirect to the home page
        } catch (error) {
          setError(error.message);
        }
      }
    
    return (
        <div>
            <Navbar />
            <div className='2xl:mx-20 mx-12 max-m-8 mt-[100px] md:mt-[120px] '>
                <div className="flex justify-end mt-40 items-baseline gap-4  max-sm:my-5">
                    <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl">تسجيل الدخول</h1>
                    <span>
                        <FaLessThan />
                    </span>
                    <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
                </div>
            </div>
            <form action="post" className="flex items-center flex-col" onSubmit={handleSubmit}>
                <div className='flex flex-col items-center gap-7 max-sm:gap-8 mt-20 max-sm:mt-10 w-[300px]'  >



                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-lg 2xl:text-xl '> البريد الإلكتروني</h2>
                        <input
                            autoComplete='off'
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base"
                            dir="rtl"
                            placeholder="البريد الإلكتروني"
                        />


                    </div>
                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-lg 2xl:text-xl '>   كلمة المرور</h2>
                        <input
                            autoComplete='off'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-72 max-sm:w-80 h-[50px] border-none bg-gray-100 rounded-lg p-4 text-2xl placeholder:text-base"
                            dir="rtl"
                            placeholder="كلمة المرور"
                        />

                    </div>

                </div>
                <div className='flex justify-center items-center my-10'>
                    <button className=' bg-[#FF7315] w-72  p-2 text-white rounded-md' type='submit'> تسجيل الدخول</button>
                </div>
                <p className="text-center text-gray-600 text-sm">إذا ليس لديك حساب بعد، يمكنك <Link to="/register" className="text-[#FF7315]">التسجيل هنا</Link></p>
                {error && <div className="text-red-500 text-center">{error}</div>}

            </form>

        </div>
    )
}
export default Login