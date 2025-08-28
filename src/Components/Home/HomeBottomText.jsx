import React from 'react';
import { Link } from 'react-router';

const HomeBottomText = () => {
    return (
        <div className='text-7xl font-[font1] flex justify-center items-center gap-4'>
           <Link to={'/projects'} className='text-[6.5vw] border-3 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] rounded-full px-8 uppercase'>Work</Link>
           <Link to={'/agence'} className='text-[6.5vw] border-3 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] rounded-full px-8 uppercase'>agency</Link>
        </div>
    );
};

export default HomeBottomText;