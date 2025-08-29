import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Loading = ({ children }) => {
    const location = useLocation().pathname;
    const stairParentRef = useRef(null);
    const pageRef = useRef(null)
    // GSAP animation
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(stairParentRef.current, { display: 'block' })
        tl.from('.stairs', { height: 0, stagger: { amount: -0.20 } })
        tl.to('.stairs', { y: '100%', stagger: { amount: -0.20 } })
        tl.to(stairParentRef.current, { display: 'none' })
        tl.to('.stairs', { y: '0%', })

        gsap.from(pageRef.current, {
            opacity: 0, 
            scale: 1.2,
            delay:1.3
        })
    }, [location])

    return (
        <div>
            <div
                ref={stairParentRef}
                className={`fixed top-0 left-0 w-full h-screen z-50`}
            >
                <div className="h-full w-full flex">
                    <div className="stairs h-full w-1/5 bg-black"></div>
                    <div className="stairs h-full w-1/5 bg-black"></div>
                    <div className="stairs h-full w-1/5 bg-black"></div>
                    <div className="stairs h-full w-1/5 bg-black"></div>
                    <div className="stairs h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    );
};

export default Loading;
