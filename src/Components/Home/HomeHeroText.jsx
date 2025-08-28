import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
    return (
        <>
            <div className='font-[font1] uppercase text-[9.5vw] mb-[2.5rem] leading-[8.5vw] pt-4 text-center'>
                <div className=''>
                    The spark for
                </div>
                <div className='flex justify-center items-center'>
                    all <div className='h-[7vw] -mt-5 w-[16vw] overflow-hidden rounded-full'>
                        <Video></Video>
                        </div>      
                    things
                </div>
                <div>
                    creative
                </div>
            </div>
        </>
    );
};

export default HomeHeroText;