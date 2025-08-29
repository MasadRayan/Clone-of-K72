import React from 'react';
import Video from '../Components/Home/Video';
import HomeHeroText from '../Components/Home/HomeHeroText';
import HomeBottomText from '../Components/Home/HomeBottomText';

const Home = () => {
    return (
        <>
            <div className='text-white '>
                <div className='h-screen w-screen fixed'>
                    <Video></Video>
                </div>
                <div className='h-screen w-screen relative flex flex-col justify-between pt-20 lg:pt-0'>
                    <HomeHeroText></HomeHeroText>
                    <HomeBottomText></HomeBottomText>
                </div>
            </div>
        </>
    );
};

export default Home;