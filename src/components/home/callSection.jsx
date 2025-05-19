'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
export default function CallSection() {

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

    const zoomOut = {
        hidden: { scale: 1.2, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
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


    const heading = "Convenient Online Consultation with Licensed Providers".split(" ");


    return (
        <div className='pt-10 space-y-5'>


            {/* Main Heading */ }
            <motion.h1
                className="text-2xl md:text-4xl md:w-2/5 mx-auto text-[#751010] font-semibold text-center leading-tight flex flex-wrap justify-center gap-2"
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

            <motion.div
                variants={ zoomOut }
                initial="hidden"
                whileInView="show"
                viewport={ { once: true } }
            >
                <Image
                    src="/images/call-sec.png"
                    alt="call-sec"
                    width={ 980 }
                    height={ 614 }
                    className="mx-auto"
                    quality={ 100 }
                />
            </motion.div>


        </div>
    )
}
