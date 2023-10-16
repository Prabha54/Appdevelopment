import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useDispatch } from "react-redux";
import { login1 } from "../redux/userSlice";
import { userLogin } from "../services/api";
import "../assests/Login.css";
const { useState } = require("react");
const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };
  const notify = (e) => {
    e.preventDefault();
    toast.success("Reset Password link sent to your mail");
  }
  const handleClick =async (e) => {
    e.preventDefault();
    // dispatch(login1({
    //   email: login.email
    // }))
    const validationErrors = {}
    if (!login.username.trim()) {
      validationErrors.username = "Username is required";
      toast.error("Enter Username");
    }
    // else if (!/\S+@\S+\.\S+/.test(login.email)) {
    //   validationErrors.email = "Email is invalid";
    // }
    if (!login.password.trim()) {
      validationErrors.password = "Password is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      await userLogin(login).then((response)=>{
         localStorage.setItem('authToken',response.data.token)
         localStorage.setItem('xrole',response.data.role)

        console.log(response);
        localStorage.setItem('username',response.data.username)
        navigate('/dashboard')
      }).catch(()=>{
        console.log("Login failed");
      })
    }
  };

  return (
    <div className="Mainclass" class="flex  items-center justify-center  min-h-screen bg-gradient-to-r from-blue-200 to-indigo-400 ">
      <div className="left">
        <img src='https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif' style={{width:'700px',height:'570px'}}></img>
      </div>
    <div class="flex  items-center justify-center  min-h-screen">

      <form
        onSubmit={handleClick}
        class="relative flex flex-col space-y w-[400px]  bg-white shadow-2xl  md:flex-row md:space-y-0"
      >
        <div class="flex flex-col justify-center align-items-center p-8 md:p-14">
          <Toaster />
          <span className="mb-3 text-4xl font-bold text-green-600">Hello!!!</span>
          <span class="font-light text-gray-400 mb-8 text-2xl">
            Please Enter your details
          </span>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Username:</label>
            <input
              type="text"
              placeholder="Enter email"
              id="username"
              onChange={handleChange}
              class="w-full p-2 border border-white hover:placeholder:text-black ouline-none hover:outline-none hover:bg-yellow-100  rounded-md"
            ></input>
            {errors.email && <span class="text-red-500">{errors.email}</span>}
          </div>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              class=" w-full p-2 border border-white  rounded-md
                    hover:placeholder:text-black
                    hover:text-black  hover:bg-brown-50  hover:outline-none ouline-none"
              onChange={handleChange}
            ></input>
            {errors.password && <span class="text-red-500">{errors.password}</span>}
          </div>
          <div class="flex justify-between w-ful ">
            {/*  <div class="mr-24">
              <label class="text-md" htmlFor="ch">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  class="mr-2 "
                  onChange={handleCheck}
                ></input>
                Remember me
              </label>
            </div> */}
            <span class="font-serif text-md cursor-pointer hover:text-green-600 hover:underline" onClick={notify}>
              Forget password ?
            </span>
          </div>
          <div class="flex flex-col space-y-2">
            <button
              class="w-full bg-black text-white p-2 rounded-lg mt-5
                 font-bold font-serif hover:text-black hover:bg-green-600"
            >
              Sign in
            </button>




          </div>
          <span className="hover:underline hover:text-green-600 font-serif cursor-pointer" onClick={() => nav('/signup')}>Doesn't have an account? Signup</span>
        </div>
      </form>
    </div>
    </div>
  );
};
export default Login;
