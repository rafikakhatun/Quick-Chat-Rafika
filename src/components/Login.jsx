import { Eye, EyeOff, Mail, User } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { useState } from "react";

const Login = () => {

    // password show hide state

    const [showPassword, setShowPassword] = useState(null);

    const handleSubmit = () => {
        alert("sign In")


    }




    return (

        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Particles */}
            <ParticlesBackground />

            {/* Login Form */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="bg-[#1D2666] p-8 border-[0.5px] border-blue-100 rounded-xl shadow-xl  max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center text-white drop-shadow ">Quick Chat with Rafika</h2>
                    <form action="" className="space-y-4">
                        {/*UserName */}
                        <div className="relative w-full">
                            <label className="text-white" htmlFor="userName">Username</label>
                            <input type="text" id="userName" placeholder="Enter your name" className="w-full mt-2 px-4 py-2 rounded-md  bg-[#1D2666] outline-none shadow border-[0.5px] border-gray-50 text-white " />
                            <User className="absolute top-10 right-3 items-center text-white" size={20} />

                        </div>

                        {/*Email*/}
                        <div className="relative w-full">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-2 rounded-md  bg-[#1D2666] outline-none shadow border-[0.5px] border-gray-50 text-white " />
                            <Mail className="absolute top-10 right-3 items-center text-white" size={20} />

                        </div>

                        {/*Password*/}

                        <div className="relative w-full">
                            <label className="text-white" htmlFor="password">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" className="w-full mt-2 px-4 py-2 rounded-md  bg-[#1D2666] outline-none shadow border-[0.5px] border-gray-50 text-white " />
                            {/* Eye / EyeOff Toggle */}
                            <div
                                className="absolute top-10 right-3 cursor-pointer text-white"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>

                        {/*Remember me and forgot password */}
                        <div className="flex items-center justify-between">
                            <div>
                                <input type="checkbox" id="RememberMe" />
                                <label className="text-white ml-2" htmlFor="RememberMe">Remember Me</label>
                            </div>

                            {/* forgot password */}
                            <div>
                                <span className="text-blue-500">forgot password</span>

                            </div>
                        </div>
                        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white rounded-md px-4 py-2 font-semibold mt-2">Sign In</button>
                    </form>



                </div>
            </div>

        </div>
    );
};

export default Login;
