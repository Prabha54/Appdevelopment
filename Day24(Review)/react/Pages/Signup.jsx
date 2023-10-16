import { useState } from "react"
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Navigate, useNavigate } from "react-router-dom";
import { userRegister } from "../services/api";


const Signup = () => {
    const nav = useNavigate();
    const [signup, setSignup] = useState({
        email: '',
        username: '',
        // phonenumber: '',
        password: '',
        confirmpassword: '',
        role: 'VNDOR'
    });
    // const[programs,setPrograms]=useState();
    // const handleSelectChange=(e)=>{
    //     const {name,value}=e.target;
    //     setPrograms({...programs,[name]:value});
    // }
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value })
        console.log(signup)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // nav("/")
        const validationErrors = {}
        if (!signup.email.trim()) {
            validationErrors.email = "email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(signup.email)) {
            validationErrors.email = "email is invalid";
        }
        if (!signup.username.trim()) {
            validationErrors.username = "name is required";
        }
        if (!signup.password.trim()) {
            validationErrors.password = "password is required";
        }
        else if (!signup.password.length > 8) {
            validationErrors.password = "password should be more than 8 characters";
        }
        if (!signup.confirmpassword.trim()) {
            validationErrors.confirmpassword = "confirm password is required";
        }
        else if (!(signup.confirmpassword === signup.password)) {
            validationErrors.confirmpassword = "password is invalid";
        }
        // if (!signup.phonenumber.trim()) {
        //     validationErrors.phonenumber = "phone number is required";
        // }
        // else if (!signup.phonenumber.length == 10) {
        //     validationErrors.phonenumber = "phone number is invalid";
        // }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log("phjasngj")
            const res = await userRegister(signup);
            if (res.data == "User registered successfully") {
                nav('/login')
            }
        }

    }
    return (
        <div className="Mainclass" class="flex  items-center justify-center w-[100vw]  h-screen bg-gradient-to-r from-blue-200 to-indigo-400 ">

            <div className="flex items-center w-[80vw]  justify-center">
                <div class="flex flex-row jusify-center h-full p-3">
                    {/* <form class="relative flex flex-col bg-white shadow-2xl rounded-2xl  space-y-8 md:flex-row md:space-x-0">
                <span class="text-4xl text-md">Welcome to the world of joy</span>

            </form> */}
                    <div className="left" class="">
                        <img src='https://img.freepik.com/premium-vector/online-payment-concept-with-people-scene-flat-design-woman-transfers-money_198565-2874.jpg?w=740' className="h-[100%] w-[100%]"></img>
                    </div>
                    <form onSubmit={handleSubmit} class="relative flex flex-col  space-y-3 w-[500px]  bg-white shadow-2xl h-[80%]  md:flex-row md:space-y-0">
                        <div class="flex flex-col md:p-14">
                            <h1 className="text-center text-2xl font-bold font-serif text-green-600 text-2xl">Calculate Your Tax</h1>

                            <div className="py-1 justify-between w-[400px]">
                                <label class="mb-2 text-md font-serif">Email:*</label>
                                <input type="text" placeholder="Enter email"
                                    id='email'
                                    name="email"
                                    value={signup.email}
                                    class="w-full rounded  border-slate-600 font-serif hover:bg-green-600 p-2 hover:placeholder:text-black outline-none"
                                    onChange={handleChange} ></input>
                                {errors.email && <span class="text-red-500">{errors.email}</span>}
                            </div>
                            <div className="py-1 justify-between w-[400px]">
                                <label class="mb-2 text-md font-serif">Username:*</label>
                                <input type="text"
                                    id='username'
                                    placeholder="Enter username"
                                    value={signup.username}
                                    name="username"
                                    class="w-full rounded border-slate-600  hover:bg-green-600 p-2 hover:placeholder:text-black outline-none "
                                    onChange={handleChange} ></input>
                                {errors.username && <span class="text-red-500">{errors.username}</span>}

                            </div>
                            <div className="py-1 justify-between w-[400px]">
                                <label class="mb-2 text-md font-serif">Password:*</label>
                                <input type="password" placeholder="Enter password"
                                    id='password'
                                    name="password"
                                    class="w-full rounded border-slate-600  hover:bg-green-600 p-2 hover:placeholder:text-black outline-none "
                                    value={signup.password}
                                    onChange={handleChange} ></input>
                                {errors.password && <span class="text-red-500">{errors.password}</span>}


                            </div>
                            <div className="py-1 justify-between w-[400px]">
                                <label class="mb-2 text-md font-serif">Confirm Password:</label>
                                <input type="password" placeholder="Enter password"
                                    id='confirmpassword'
                                    name="confirmpassword"
                                    class="w-full rounded border-slate-600 hover:bg-green-600 p-2 hover:placeholder:text-black outline-none"
                                    value={signup.confirmpassword}
                                    onChange={handleChange} ></input>
                                {errors.confirmpassword && <span class="text-red-500">{errors.confirmpassword}</span>}

                            </div>
                            {/* <div className="py-4 justify-between" >
                        <label className="mb-2 text-md">
                            Interested Programs
                        </label>
                        <select name="programs" className="w-full rounded p-1 border-slate-600 hover:bg-slate-400 p-1 hover:placeholder:text-black outline-none" onChange={handleSelectChange}>
                            <option value="">Select</option>
                            <option value="B.E">B.E</option>
                            <option value="B.Sc">B.Sc</option>
                        </select> 
                        {/* {programs === 'custom' && } */}
                            {/* </div> */}
                            {/* <div class="flex py-4 justify-content">
                    <input type="checkbox" name="ch" id="ch"></input>
                       <label className="text-md" >I{" "}<span>agree to the{" "}</span>
                       <span class="text-blue-400 hover:underline cursor-pointer">terms{" "}</span>
                       <span >and{" "}</span>
                       <span class="text-blue-400 hover:underline cursor-pointer">condition{" "}</span>
                       </label>

                    </div> */}
                            <button class="w-full bg-black text-white p-2 rounded-lg mt-5
                 font-bold font-serif hover:text-black hover:bg-green-600 " type="submit">
                                Sign up
                            </button>



                            <div class="flex flex-row cursor-pointer">
                                <span>Already have an account?{" "}
                                    <p className="hover:underline hover:text-green-600" onClick={() => nav('/login')}>Login</p></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup;