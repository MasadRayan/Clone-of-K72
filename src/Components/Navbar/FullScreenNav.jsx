import React from 'react';
import p1 from '../../assets/images/Navbar/1.jpg'

const FullScreenNav = () => {
    return (
        <div id='full Screen nav' className='text-white h-screen py-40 w-full absolute bg-amber-900 z-100'>
            <div className=''>
                <div className='link1 border-t-1 '>
                    <h1 className='font-[font2] leading-[0.8] pt-[8px] text-[8vw] uppercase text-center '>work</h1>
                    {/* <div>
                        <div>
                            <h2>See Everything</h2>
                            <img src={p1} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default FullScreenNav;