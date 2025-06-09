'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const providersdata = [
    {
        name: 'Joy Ikeri',
        title: 'DNP, AGACNP-BC',
        image: '/images/lady-1.png',
    },
    {
        name: 'Ugochi Azubuike',
        title: 'AGACNP-BC & PMHNP-BC',
        image: '/images/lady-2.png',
    },
];

const cardVariants = {
    hidden: {
        opacity: 0,
        x: -80,
        skew: 10,
        scale: 0.9,
        rotate: -5
    },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        skew: 0,
        scale: 1,
        rotate: 0,
        transition: {
            delay: i * 0.15,
            type: 'spring',
            stiffness: 150,
            damping: 12,
        },
    }),
};


// Container animation
const fadeInUpContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Child animation (word)
const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};


const heading = "You deserve Providers who listen.".split(" ");

export default function Providers() {
    return (
        <motion.div
            className='Providers py-20 md:px-10 px-4 relative overflow-hidden md:-mt-[5vw] -mt-[15vw] text-center'
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { type: 'spring', stiffness: 100, damping: 14 } }
        >
            {/* Title */ }
            <motion.h1
                className="md:text-5xl text-3xl lg:w-2/5 mx-auto text-[#751010] font-semibold text-center leading-tight flex flex-wrap justify-center gap-2"
                variants={ fadeInUpContainer }
                initial="hidden"
                whileInView="show"
                viewport={ { once: true } }
            >
                { heading.map((word, index) => (
                    <motion.span key={ index } variants={ wordAnimation }>
                        { word }
                    </motion.span>
                )) }
            </motion.h1>

            <motion.p
                className='text-[#751010] mt-4 md:text-base text-sm'
                initial={ { rotateY: -90, opacity: 0 } }
                whileInView={ { rotateY: 0, opacity: 1 } }
                viewport={ { once: true } }
                transition={ { duration: 0.6, delay: 0.2, type: 'spring' } }
            >
                Our network of board certified providers are ready to work with you to develop a plan
                <br className='hidden md:block' />
                & help you reach your goals.
            </motion.p>

            {/* Cards */ }
            <div className='w-full lg:w-3/6 mx-auto mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    { providersdata.map((provider, i) => (
                        <motion.div
                            key={ provider.name }
                            className='bg-white p-3 rounded-3xl shadow-lg'
                            custom={ i }
                            initial="hidden"
                            whileInView="visible"
                            viewport={ { once: true } }
                            variants={ cardVariants }
                        >
                            <div className='relative overflow-hidden rounded-3xl'>
                                <Image
                                    src={ provider.image }
                                    alt={ provider.name }
                                    width={ 310 }
                                    height={ 273 }
                                    className='rounded-3xl w-full h-auto object-cover'
                                    quality={ 100 }
                                />
                                <div className='px-5 py-2 bg-black/20 w-full absolute bottom-0 left-0 text-start text-white backdrop-blur-sm'>
                                    <h3 className='text-lg font-bold'>{ provider.name }</h3>
                                    <p className='text-sm'>{ provider.title }</p>
                                </div>
                            </div>
                        </motion.div>
                    )) }
                </div>
            </div>
        </motion.div>
    );
}
