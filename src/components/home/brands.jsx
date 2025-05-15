'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const imageData = [
    "/images/brand-1.png",
    "/images/brand-2.png",
    "/images/brand-3.png",
    "/images/brand-4.png",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Brands() {
    return (
        <motion.div
            className='bg-[#F0F0F0] py-8 px-4 flex flex-wrap justify-center gap-8 items-center mt-5 rounded-3xl'
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.3 } }
            variants={ containerVariants }
        >
            { imageData.map((item, idx) => (
                <motion.div key={ idx } variants={ itemVariants } className='w-40 sm:w-52 md:w-[210px]'>
                    <Image
                        src={ item }
                        alt={ `Brand ${idx + 1}` }
                        width={ 210 }
                        height={ 32 }
                        className='w-full h-8 object-contain'
                    />
                </motion.div>
            )) }
        </motion.div>
    );
}
