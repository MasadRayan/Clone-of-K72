import React from 'react';
import p1 from '../../assets/images/Navbar/1.jpg';
import p2 from '../../assets/images/Navbar/2.jpg';

const FullScreenNav = () => {
    return (
        <div className='text-white h-screen overflow-x-hidden w-full absolute top-0 left-0 bg-black z-[100] flex flex-col justify-center'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>  
            <div>
                <div className='flex w-full justify-between p-3 items-start'>
                    <div className=''>
                        <div className='w-26'>
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                        <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                    </div>
                </div>
                <div className="w-full pt-20 ">
                    {/* WORK */}
                    <div className='link relative border-t border-white'>
                        <h1 className='font-[font2] leading-none text-[8vw] uppercase text-center'>
                            Work
                        </h1>
                        <div className='movelink'>
                            <div className='moveX bg-[#D3FD50] text-black'>
                                {/* First set */}
                                <div className='flex gap-5 items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        See Everything
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        See Everything
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                                {/* Duplicate set for smooth loop */}
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        See Everything
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        See Everything
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AGENCY */}
                    <div className='link relative border-t border-white'>
                        <h1 className='font-[font2] leading-none text-[8vw] uppercase text-center'>
                            Agency
                        </h1>
                        <div className='movelink'>
                            <div className='moveX  bg-[#D3FD50] text-black'>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Know Us
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Know Us
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                                {/* Duplicate */}
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Know Us
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Know Us
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className='link relative border-t border-white '>
                        <h1 className='font-[font2] leading-none text-[8vw] uppercase text-center'>
                            Contact
                        </h1>
                        <div className='movelink'>
                            <div className='moveX  bg-[#D3FD50] text-black'>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Send Us a Fax
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Send Us a Fax
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                                {/* Duplicate */}
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Send Us a Fax
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Send Us a Fax
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BLOG */}
                    <div className='link relative border-y border-white'>
                        <h1 className='font-[font2] leading-none text-[8vw] uppercase text-center'>
                            Blog
                        </h1>
                        <div className='movelink'>
                            <div className='moveX  bg-[#D3FD50] text-black'>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Read Articles
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Read Articles
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                                {/* Duplicate */}
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Read Articles
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p1} alt="" />
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-none'>
                                        Read Articles
                                    </h2>
                                    <img className='py-2 w-80 h-30 rounded-full object-cover shrink-0' src={p2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FullScreenNav;
