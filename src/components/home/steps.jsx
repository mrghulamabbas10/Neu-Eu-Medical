'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { motion } from 'framer-motion';

const stepsData = [
    {
        img: '/images/step-1.png',
        text: 'Fill out our short survey to determine eligibility for services.',
    },
    {
        img: '/images/step-2.png',
        text: 'Meet with your provider to assess your diet, fitness, & health, & customize a personalized weight loss plan.',
    },
    {
        img: '/images/step-3.png',
        text: 'On your appointment day, your provider will order your medication, & a U.S. pharmacy will process & ship it.',
    },
    {
        img: '/images/step-4.png',
        text: 'Take your medication as prescribed & follow your treatment plan—many patients lose up to 10 lbs in the first month!',
    },
];

export default function Steps() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % stepsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + stepsData.length) % stepsData.length);
    };

    return (
        <div className='steps pt-[8vw] pb-[18vw] md:px-10 px-4 relative overflow-hidden'>
            {/* Arrow Buttons */ }
            <div className='flex flex-col md:gap-10 gap-3 absolute lg:top-[50%] md:top-[15%] md:-translate-y-[15%] top-[38%] lg:-translate-y-[50%] -translate-y-[30%] lg:left-20 left-5 z-50'>
                <button onClick={ handlePrev } className='bg-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg'>
                    <IoIosArrowRoundUp />
                </button>
                <button onClick={ handleNext } className='bg-[#B16464] text-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg'>
                    <IoIosArrowRoundDown />
                </button>
            </div>

            {/* Title */ }
            <h2 className='text-center md:text-5xl text-3xl font-semibold text-[#751010]'>
                Your
                <span className='bg-[#F26969] px-2 text-white rounded-sm inline-block -translate-y-2 -rotate-6 mx-2 text-3xl'>
                    4 - STEP
                </span>
                Journey to
                <br className='md:block hidden' />
                Weight Loss
            </h2>

            {/* Steps Layered */ }
            <div className='relative md:mt-14 mt-6 '>
                { stepsData.map((step, index) => { 
                    return (
                        <motion.div
                            key={ index }
                            className='w-full !sticky top-10 mx-auto md:w-[741px] flex items-center justify-center mt-10'
                            
                        >
                            <div className='relative w-full flex items-center justify-center'>
                                <p className='absolute inset-0 z-10 lg:w-2/4 md:w-2/6 w-[45%] lg:left-[3vw] md:left-[20vw] left-[11vw] lg:top-[5vw] md:top-[14vw] top-[9vw] md:text-2xl text-[11px] font-medium text-[#7A3333]'>
                                    { step.text }
                                </p>
                                <Image
                                    src={ step.img }
                                    alt=''
                                    width={ 841 }
                                    height={ 325 }
                                    className='mx-auto w-full scale-110'
                                    quality={ 100 }
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    );
                }) }
            </div>
        </div>
    );
}





// 'use client';

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
// import { motion } from 'framer-motion';

// const stepsData = [
//     {
//         img: '/images/step-1.png',
//         text: 'Fill out our short survey to determine eligibility for services.',
//     },
//     {
//         img: '/images/step-2.png',
//         text: 'Meet with your provider to assess your diet, fitness, & health, & customize a personalized weight loss plan.',
//     },
//     {
//         img: '/images/step-3.png',
//         text: 'On your appointment day, your provider will order your medication, & a U.S. pharmacy will process & ship it.',
//     },
//     {
//         img: '/images/step-4.png',
//         text: 'Take your medication as prescribed & follow your treatment plan—many patients lose up to 10 lbs in the first month!',
//     },
// ];

// export default function Steps() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % stepsData.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev - 1 + stepsData.length) % stepsData.length);
//     };

//     return (
//         <div className='steps py-20 md:px-10 px-4 relative overflow-hidden'>
//             {/* Arrow Buttons */ }
//             <div className='flex flex-col md:gap-10 gap-3 absolute md:top-[50%] top-[38%] md:-translate-y-[50%] -translate-y-[30%] md:left-20 left-5 z-50'>
//                 <button onClick={ handlePrev } className='bg-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg'>
//                     <IoIosArrowRoundUp />
//                 </button>
//                 <button onClick={ handleNext } className='bg-[#B16464] text-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg'>
//                     <IoIosArrowRoundDown />
//                 </button>
//             </div>

//             {/* Title */ }
//             <h2 className='text-center md:text-5xl text-3xl font-semibold text-[#751010]'>
//                 Your
//                 <span className='bg-[#F26969] px-2 text-white rounded-sm inline-block -translate-y-2 -rotate-6 mx-2 text-3xl'>
//                     4 - STEP
//                 </span>
//                 Journey to
//                 <br className='md:block hidden' />
//                 Weight Loss
//             </h2>

//             {/* Steps Layered */ }
//             <div className='relative md:mt-10 mt-6 md:h-[380px] h-[150px]'>
//                 { stepsData.map((step, index) => {
//                     const isActive = index === currentIndex;
//                     return (
//                         <motion.div
//                             key={ index }
//                             className='absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[841px] flex items-center justify-center'
//                             style={ {
//                                 zIndex: isActive ? 30 : 20 - index,
//                                 pointerEvents: isActive ? 'auto' : 'none',
//                             } }
//                             animate={ {
//                                 opacity: isActive ? 1 : 0.5,
//                                 y: isActive ? -20 : 0,
//                                 scale: isActive ? 1 : 0.95,
//                                 rotate: isActive ? '0deg' : index % 2 === 0 ? '-2deg' : '2deg',
//                             } }
//                             transition={ { type: 'spring', stiffness: 100, damping: 15 } }
//                         >
//                             <div className='relative w-full'>
//                                 <p className='absolute md:w-2/6 w-2/5 md:left-[10vw] left-[14vw] md:top-[8vw] top-[9vw] md:text-xl text-[10px] font-medium text-[#7A3333]'>
//                                     { step.text }
//                                 </p>
//                                 <Image
//                                     src={ step.img }
//                                     alt=''
//                                     width={ 841 }
//                                     height={ 325 }
//                                     className='mx-auto w-full'
//                                     quality={ 100 }
//                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
//                                 />
//                             </div>
//                         </motion.div>
//                     );
//                 }) }
//             </div>
//         </div>
//     );
// }
