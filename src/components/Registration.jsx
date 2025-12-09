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
                        


                    </div>

                </div>


            </div>

        </>
    );
};

export default Registration;