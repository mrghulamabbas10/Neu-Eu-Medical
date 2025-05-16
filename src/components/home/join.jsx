'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


export default function Join() {

    // Animation variants
    const textVariant = {
        hidden: {
            clipPath: 'inset(0 100% 0 0)',
            transform: 'skewY(5deg) scale(0.95)',
        },
        show: {
            clipPath: 'inset(0 0% 0 0)',
            transform: 'skewY(0deg) scale(1)',
            transition: {
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
            },
        },
    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const popup = {
        hidden: { opacity: 0, scale: 0.3 },
        show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
    };

    const bubble = {
        hidden: { opacity: 0, scale: 0.3 },
        show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120 } },
    };


    return (
        <div className="px-[20px] md:px-[120px] py-16 overflow-hidden relative">
            <Image src="/images/bubbuls.png" alt="img1" width={ 200 } height={ 200 } className="absolute top-[8vw] right-[3vw]" />

            <motion.h2
                className="text-2xl md:text-4xl text-[#751010] font-medium text-center"
                variants={ textVariant }
                initial="hidden"
                animate="show"
                viewport={ { once: true, amount: 0.3 } }
            >
                JOIN OVER 5000 PATIENTS <br />
                ON THIS <span className="font-bold">TRANSFORMATIVE</span> <br /> JOURNEY
            </motion.h2>

            <motion.p
                className="text-[#751010] font-medium mt-5 md:text-base text-sm text-center"
                variants={ textVariant }
                initial="hidden"
                animate="show"
                transition={ { delay: 0.3 } }
                viewport={ { once: true, amount: 0.3 } }
            >
                Discover real results and lasting change—join thousands who’ve
                <br />
                already started their weight loss journey with us.
            </motion.p>

            <motion.div
                className="mt-10 flex flex-col md:flex-row gap-10 justify-center"
                variants={ container }
                initial="hidden"
                whileInView="show"
                viewport={ { once: true, amount: 0.3 } }
            >
                {/* Left group */ }
                <div className="flex justify-center items-center flex-col w-full md:w-[30%]">
                    <motion.div variants={ popup }>
                        <Image src="/images/avatar-1.png" alt="img1" width={ 114 } height={ 114 } className="-ml-5" />
                    </motion.div>
                    <div className="flex gap-5 mt-4">
                        <motion.div variants={ popup }>
                            <Image src="/images/avatar-3.png" alt="img3" width={ 167 } height={ 167 } />
                        </motion.div>
                        <motion.div variants={ popup } className="-mt-5">
                            <Image src="/images/avatar-2.png" alt="img2" width={ 172 } height={ 172 } />
                        </motion.div>
                    </div>
                    <motion.div variants={ popup } className="-mt-10 ml-9">
                        <Image src="/images/avatar-4.png" alt="img4" width={ 69 } height={ 69 } />
                    </motion.div>

                    <motion.div variants={ popup } className="-mt-5 ml-auto">
                        <Image src="/images/see-more-btn.png" alt="img4" width={ 142 } height={ 142 } />
                    </motion.div>
                </div>

                {/* Center group */ }
                <div className="w-full md:w-[40%] relative">

                    {/* Rating */ }
                    <motion.div
                        variants={ bubble }
                        className="absolute md:right-0 left-0 md:left-auto bg-gray-50 rounded-full p-5 top-[5vw] text-center text-[#751010]"
                    >
                        <p className="text-3xl font-semibold">4.8</p>
                        <p className=" text-xl">★★★★★</p>
                        <p className="text-xs ">8K+ REVIEWS</p>
                    </motion.div>

                    <motion.div variants={ popup } className="ml-32">
                        <Image src="/images/avatar-6.png" alt="img6" width={ 160 } height={ 160 } />
                    </motion.div>
                    <div className="flex gap-2 mt-5">
                        <motion.div variants={ popup } className="-ml-5">
                            <Image src="/images/avatar-5.png" alt="img5" width={ 288 } height={ 288 } />
                        </motion.div>
                        <motion.div variants={ popup } className="mt-5">
                            <Image src="/images/avatar-7.png" alt="img7" width={ 214 } height={ 214 } />
                        </motion.div>
                    </div>
                </div>

                {/* Right group */ }
                <motion.div variants={ popup } className="w-full md:w-[30%] flex items-center justify-center">
                    <Image src="/images/avatar-8.png" alt="img8" width={ 337 } height={ 337 } className="my-auto" />
                </motion.div>
            </motion.div>
        </div>
    );
}
