import { Mail, User } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Login = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Particles */}
            <ParticlesBackground />

            {/* Login Form */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="bg-[#1D2666] p-6 rounded-xl shadow-xl border-gray-50 w-80">
                    <h2 className="text-xl font-semibold mb-4 text-center text-white drop-shadow ">Quick Chat with Rafika</h2>
                    <form action="" className="space-y-4">
                        {/*UserName */}
                    <div className="relative w-full">
                        <label className="text-white" htmlFor="userName">Username</label>
                        <input type="text" id="userName" placeholder="Enter your name" className="w-full mt-2 px-4 py-2 rounded-md  bg-[#1D2666] outline-none shadow border border-gray-50 text-white " />
                         <User className="absolute top-10 right-3 items-center text-white" size={20} />

                    </div>

                    {/*Email*/}
                    <div className="relative w-full">
                        <label className="text-white" htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="w-full mt-2 px-4 py-2 rounded-md  bg-[#1D2666] outline-none shadow border border-gray-50 text-white " />
                         <Mail className="absolute top-10 right-3 items-center text-white" size={20} />

                    </div>
                    </form>


                    {/* <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3 bg-[#1D2666] text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-3"
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded mt-2">
            Sign In
          </button> */}
                </div>
            </div>

        </div>
    );
};

export default Login;
