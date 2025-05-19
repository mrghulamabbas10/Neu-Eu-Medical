'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from 'framer-motion';

const data = [
    {
        heading: "Access to GLP-1",
        para: "Access to compounded GLP-1's of varying strengths."
    },
    {
        heading: "No Insurance",
        para: "Cash Pay, no insurance needed"
    },
    {
        heading: "Appointments with the Provider",
        para: "Telehealth provider appointments"
    },
    {
        heading: "Nutrition",
        para: "Nutritional guidance"
    },
    {
        heading: "Fitness Support",
        para: "Physical Fitness support"
    },
    {
        heading: "Monthly Updates",
        para: "Monthly updates to meal & fitness regimens"
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const fadeInFromBottomLeft = {
    hidden: { opacity: 0, x: -50, y: 50 },
    show: (custom = 1) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            delay: custom * 0.2,
            ease: "easeOut",
        },
    }),
};



export default function Product() {
    return (
        <motion.div
            className='md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 sm:px-6 lg:px-10'
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.2 } }
            variants={ fadeUp }
            custom={ 0 }
        >
            {/* Left Text */ }
            <motion.div
                className='mt-10 space-y-8 sm:space-y-12'
                variants={ fadeUp }
                custom={ 0 }
            >
                <h2 className='text-2xl sm:text-3xl font-medium'>
                    Be apart of the millions of men & women who are <br />
                    <span className='text-[#751010]'>taking control of their health.</span>
                </h2>
                <p className='text-base sm:text-lg'>
                    The most powerful weight loss <br /> program - is yours
                </p>
                <Link href="" className='flex items-center gap-2 text-lg text-[#751010] hover:underline'>
                    What’s included? <HiOutlineArrowNarrowRight />
                </Link>
            </motion.div>

            {/* Center Image */ }
            <motion.div
                className="flex justify-center items-center"
                variants={ fadeInFromBottomLeft }
                initial="hidden"
                whileInView="show"
                custom={ 1 }
                viewport={ { once: true } }
            >
                <Image
                    src="/images/product-1.png"
                    alt="product-1"
                    width={ 516 }
                    height={ 594 }
                    className="w-full max-w-[400px] md:max-w-full"
                    quality={ 100 }
                />
            </motion.div>



            {/* Right List */ }
            <motion.div
                className='space-y-5 mt-5 md:mt-0'
                variants={ fadeUp }
                custom={ 2 }
            >
                { data.map((item, idx) => (
                    <motion.div
                        key={ idx }
                        className='flex gap-5 items-start'
                        variants={ fadeUp }
                        custom={ idx + 3 }
                    >
                        <BsPatchCheckFill className='pt-1 text-2xl sm:text-3xl text-[#98423D]' />
                        <div>
                            <h3 className='text-lg sm:text-xl font-semibold'>{ item.heading }</h3>
                            <p className='text-[#00000075] text-base sm:text-lg font-medium'>{ item.para }</p>
                        </div>
                    </motion.div>
                )) }
            </motion.div>
        </motion.div>
    );
}
