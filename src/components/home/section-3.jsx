'use client';

import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
    {
        imagePath: "/images/sec-3-box-1.png",
        text: "Flexible Appointments for Video visits"
    },
    {
        imagePath: "/images/sec-3-box-2.png",
        text: "Customizable treatment plans"
    },
    {
        imagePath: "/images/sec-3-box-3.png",
        text: "Patient Support"
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function Section3() {
    return (
        <motion.div
            className='bg-[#FAF9F3] p-5 sm:p-10 rounded-3xl mt-5'
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.3 } }
            variants={ fadeUp }
            custom={ 0 }
        >
            {/* Header */ }
            <motion.div
                className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6'
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true } }
                variants={ fadeUp }
                custom={ 0 }
            >
                <div className='space-y-4 sm:space-y-6'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium text-[#751010] leading-tight'>
                        Neu Eu Medical
                        <br />
                        Telehealth Made Simple
                    </h1>
                    <p className="text-[#751010] text-sm sm:text-base">
                        Achieve Your Weight Loss Goals with Neu <br className='hidden sm:block' />
                        Eu Medical's Telehealth Solutions
                    </p>
                </div>
                <Link
                    href=""
                    className='flex items-center gap-2 text-black bg-[#B16464] px-5 py-2 rounded-full w-fit text-sm sm:text-base'
                >
                    <IoIosCall />  +9723325266 <MdOutlineArrowRightAlt className='text-xl sm:text-2xl' />
                </Link>
            </motion.div>

            {/* Cards Grid */ }
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10 sm:mt-20 '>
                { data.map((item, idx) => (
                    <motion.div
                        key={ idx }
                        className='sticky top-10'
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                        variants={ fadeUp }
                        custom={ idx + 1 }
                    >
                        <p className='inset-0 p-8 absolute w-3/4 sm:w-2/3 text-[#751010] font-medium text-xl sm:text-lg'>
                            { item.text }
                        </p>
                        <Image
                            src={ item.imagePath }
                            alt={ item.text }
                            width={ 294 }
                            height={ 200 }
                            className='w-full object-cover rounded-2xl'
                        />
                    </motion.div>
                )) }
            </div>
        </motion.div>
    );
}
