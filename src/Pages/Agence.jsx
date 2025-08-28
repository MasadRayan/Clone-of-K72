import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import p1 from '../assets/images/1.jpg'
import p2 from '../assets/images/2.jpg'
import p3 from '../assets/images/3.jpg'
import p4 from '../assets/images/4.jpg'
import p5 from '../assets/images/5.jpg'
import p6 from '../assets/images/6.jpg'
import p7 from '../assets/images/7.jpg'
import p8 from '../assets/images/8.jpg'
import p9 from '../assets/images/9.jpg'
import p10 from '../assets/images/10.jpg'
import p11 from '../assets/images/11.jpg'
import p12 from '../assets/images/12.jpg'
import p13 from '../assets/images/13.jpg'
import p14 from '../assets/images/14.jpg'


const Agence = () => {

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const photoArray = [
        p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14
    ]

    useGSAP(() =>{
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: true,
                start: 'top 20.1%',
                end: 'top -150%',
                pin: true,
                scrub: true,
                onUpdate: (elem) => {
                    // console.log(Math.round(elem.progress * photoArray.length));
                    let imageIndex;

                    if (elem.progress < 1) {
                        imageIndex = Math.round(elem.progress * photoArray.length);
                    }
                    else
                    {
                        imageIndex = photoArray.length-1
                    }

                    imageRef.current.src = photoArray[imageIndex]
                }
            }
        })
    })

    return (
        <div>
            <div className='section1'>
                <div ref={imageDivRef} className='absolute top-35 left-[30vw] h-[20vw] w-[15vw] rounded-4xl overflow-hidden'>
                    <img ref={imageRef} className='h-full w-full object-cover' src={p1} alt="" />
                </div>
                <div className='font-[font1] relative'>
                    <div className='mt-[55vh]'>
                        <h1 className='text-[20vw] text-center leading-[18vw]'>SEVEN7Y <br />
                            TWO</h1>
                    </div>
                    <div className='pl-[40%] mt-10'>
                        <p className='text-[50px] leading-tight '>
                            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
                        </p>
                    </div>
                </div>
            </div>
            <div className='section-2 h-screen'>

            </div>
        </div>
    );
};

export default Agence;