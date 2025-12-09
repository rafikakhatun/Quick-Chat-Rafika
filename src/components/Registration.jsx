import React from 'react';
import SpaceEffectRegisterPage from './SpaceEffectRegisterPage';
import { Link } from 'react-router-dom';

const Registration = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        alert("Register successfull")
    }



    return (
        <>

            <div className='relative w-full h-screen overflow-hidden'>
                <SpaceEffectRegisterPage></SpaceEffectRegisterPage>

                {/* Register Form */}

                <div className='relative h-full z-10 flex justify-center items-center'>
                    <div className="p-8 rounded-xl shadow-xl max-w-md w-full" style={{
                        backdropFilter: 'blur(1px)',
                        backgroundColor: 'rgba(13, 6, 35, 0.65)',
                        border: '1px solid rgba(138, 43, 226, 0.3)',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(138, 43, 226, 0.3)'
                    }}>

                        <h2 className="text-2xl font-semibold mb-4 text-center drop-shadow bg-clip-text text-transparent " style={{
                            backgroundImage: 'linear-gradient(45deg, #e2b0ff, #9F2BC1, #6bb5ff)',
                            textShadow: '0 0 10px rgba(138, 43, 226, 0.5)'
                        }}>Create Account</h2>

                        <form action="">
                            {/* Name Field */}
                            <div className='flex flex-col space-y-1'>
                                <label className='text-white' htmlFor="name">Full Name</label>
                                <input className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                                    style={{
                                        backgroundColor: 'rgba(30, 14, 63, 0.5)',
                                        border: '1px solid rgba(138, 43, 226, 0.3)'
                                    }} placeholder='Enter Your name' id="name" />
                            </div>

                            {/* Email Field */}
                            <div className='flex flex-col space-y-1 mt-5'>
                                <label className='text-white' htmlFor="email">Email Address</label>
                                <input className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                                    style={{
                                        backgroundColor: 'rgba(30, 14, 63, 0.5)',
                                        border: '1px solid rgba(138, 43, 226, 0.3)'
                                    }} placeholder='Enter Your Email' id="email" />
                            </div>

                            {/* Password */}
                            <div className='flex flex-col space-y-1 mt-5'>
                                <label className='text-white' htmlFor="password">Password</label>
                                <input className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                                    style={{
                                        backgroundColor: 'rgba(30, 14, 63, 0.5)',
                                        border: '1px solid rgba(138, 43, 226, 0.3)'
                                    }} placeholder='Enter Your Password' id="password" />
                            </div>

                            {/* Terms and Condition*/}
                            <div className='flex jus-center gap-2 mt-3 ml-1'>
                                <input id="terms" className='' type="checkbox" />
                                <label className='text-white text-sm' htmlFor="terms">I agree to the <a href="#" className='text-purple-700'>Terms & Condition</a></label>
                            </div>

                            {/* register button*/}
                            <button
                                onClick={handleRegister}
                                type="submit"
                                className="w-full mt-6 py-3 px-4 rounded-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300"
                                style={{
                                    background: 'linear-gradient(45deg, #9F2BC1, #4C00FF)',
                                    boxShadow: '0 4px 15px rgba(76, 0, 255, 0.4)'
                                }}
                            >
                                Register
                            </button>

                            <div className="mt-6 text-center text-sm">
                                <p className='text-white'>Already have an account? <Link to='/' className="text-purple-700 hover:underline">Sign In</Link></p>
                            </div>




                        </form>



                    </div>

                </div>


            </div>

        </>
    );
};

export default Registration;


