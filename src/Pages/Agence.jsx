import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import p1 from '../assets/images/Agency/1.jpg'
import p2 from '../assets/images/Agency/2.jpg'
import p3 from '../assets/images/Agency/3.jpg'
import p4 from '../assets/images/Agency/4.jpg'
import p5 from '../assets/images/Agency/5.jpg'
import p6 from '../assets/images/Agency/6.jpg'
import p7 from '../assets/images/Agency/7.jpg'
import p8 from '../assets/images/Agency/8.jpg'
import p9 from '../assets/images/Agency/9.jpg'
import p10 from '../assets/images/Agency/10.jpg'
import p11 from '../assets/images/Agency/11.jpg'
import p12 from '../assets/images/Agency/12.jpg'
import p13 from '../assets/images/Agency/13.jpg'
import p14 from '../assets/images/Agency/14.jpg'


const Agence = () => {

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const photoArray = [
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14
    ]

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: 'top 28%',
                end: 'top -100%',
                pin: true,
                scrub: true,
                pinSpacing: true,
                pinType: 'transform',
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    const index = Math.min(
                        Math.floor(elem.progress * photoArray.length),
                        photoArray.length - 1
                    );
                    imageRef.current.src = photoArray[index];

                }
            }
        })
    })

    return (
        <div className=''>
            <div id='page1' className='py-1 '>
                <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
                    <img ref={imageRef} className='h-full object-cover w-full' src={p1} alt="" />
                </div>
                <div className='relative font-[font2]'>
                    <div className='lg:mt-[55vh] mt-[30vh]'>
                        <h1 className='text-[20vw] text-center leading-[18vw]'>SEVEN7Y <br />
                            TWO</h1>
                    </div>
                    <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                        <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                    </div>
                </div>
            </div>
            <div className='font-[font2] text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[12vw] container mx-auto'>

                <div className='flex gap-20 justify-start items-start lg:hidden'>
                    <div className=' pl-10'><h2>Expertise</h2></div>
                    <div className=''>
                        <div className='flex flex-col items-start'>
                            <p>Strategy</p>
                            <p>Advertising</p>
                            <p>Branding</p>
                            <p>Design</p>
                            <p>Content</p>
                        </div>
                    </div>
                </div>
                <div className='text-center flex-1 hidden lg:block'><h2>Expertise</h2></div>
                <div className=' justify-center lg:mb-30 hidden lg:block'>
                    <div className='flex flex-col items-start'>
                        <p>Strategy</p>
                        <p>Advertising</p>
                        <p>Branding</p>
                        <p>Design</p>
                        <p>Content</p>
                    </div>
                </div>
                <div className='text-center'></div>
                <div className='text-center  '>
                    <p>Our Work_ Born in curiosity, raised by <br /> dedication and fed with a steady diet of <br /> creativity.</p>
                </div>
                <div className='text-center'>
                    <p>
                        Our Creative_ Simmering in an environment <br /> where talent can come to a full boil. <br /> Encouraged to become the best versions of <br />ourselves.
                    </p>
                </div>
                <div className='text-center'>
                    <p>
                        Our Culture_ We’re open to <br /> each other. Period. The team <br /> works together to create a <br /> space that makes us proud.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Agence;