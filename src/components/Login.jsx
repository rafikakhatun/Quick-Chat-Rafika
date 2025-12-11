import { Eye, EyeOff, Mail, User } from "lucide-react";
import ParticlesBackground from "./ParticlesBackgroundLoginPage";
import { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBackgroundLoginPage from "./ParticlesBackgroundLoginPage";

const Login = () => {

    // password show hide state

    const [showPassword, setShowPassword] = useState(false);

    // name regex patterns 
    const nameRegex = /^[A-Za-z\s]{3,}$/; // only letters, min 3 chars
    //email regex pattern 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email regex
    // password regex patterns
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/; // min 6 chars + 1 special char


    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // all input field value get
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        console.log("registration data", { name, email, password })


        // Temporary error object
        let newError = {}





    }




    return (

        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Particles */}
            <ParticlesBackgroundLoginPage />

            {/* Login Form */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="p-8 rounded-xl shadow-xl max-w-md w-full" style={{
                    backdropFilter: 'blur(3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                    <h2 className="text-xl font-semibold mb-4 text-center text-white drop-shadow ">Quick Chat with Rafika</h2>
                    <form action="" onSubmit={handleSubmitLogin} className="space-y-4 text-sm">
                        {/*UserName */}
                        <div className="relative w-full">
                            <label className="text-white" htmlFor="name">Username</label>
                            <input type="text" id="name" placeholder="Enter your name" className="w-full mt-2 px-4 py-2 rounded-md  outline-none shadow border-[0.5px] border-gray-50 text-white " style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }} />
                            <User className="absolute top-10 right-3 items-center text-white" size={20} />

                        </div>

                        {/*Email*/}
                        <div className="relative w-full">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-2 rounded-md  outline-none shadow border-[0.5px] border-gray-50 text-white " style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }} />
                            <Mail className="absolute top-10 right-3 items-center text-white" size={20} />

                        </div>

                        {/*Password*/}

                        <div className="relative w-full">
                            <label className="text-white" htmlFor="password">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" className="w-full mt-2 px-4 py-2 rounded-md outline-none shadow border-[0.5px] border-gray-50 text-white " style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                color: 'white',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }} />
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
                                <span className="text-blue-300">forgot password</span>

                            </div>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white rounded-md px-4 py-2 font-semibold mt-2">Sign In</button>
                    </form>

                    {/* Sign-up prompt for users who don't have an account */}
                    <div className="text-center mt-6 text-sm ">
                        <p className="text-white">Don't have an Account? { } <Link className="text-blue-300" to="/register">Register</Link> </p>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default Login;
