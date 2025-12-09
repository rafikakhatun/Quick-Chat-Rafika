import React from 'react';
import SpaceEffectRegisterPage from './SpaceEffectRegisterPage';

const Registration = () => {
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

                            


                        </form>



                    </div>

                </div>


            </div>

        </>
    );
};

export default Registration;
//feat(form): add Email field to Registration form

