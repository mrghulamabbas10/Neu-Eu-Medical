
"use client"
import React from 'react'

import { motion } from 'framer-motion';
import AccordionSection from './ui/AccordionItem';

export default function FAQs() {
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


    const heading = "QUESTIONS? WE’VE GOT ANSWERS.".split(" ");

    return (
        <div className='join pt-32 md:pb-20 pb-10 mt-[-10vw]' id='FAQS'>


            <motion.h1
                className="text-2xl md:text-4xl lg:w-2/6 mx-auto text-[#751010] font-semibold text-center leading-tight flex flex-wrap justify-center gap-2"
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


            <AccordionSection />
        </div>
    )
}
