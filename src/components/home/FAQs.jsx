
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

    return (
        <div className='join pt-32 md:pb-20 pb-10 mt-[-10vw]'>
            <motion.h2
                className="text-2xl md:text-4xl text-[#751010] font-semibold text-center"
                variants={ textVariant }
                initial="hidden"
                animate="show"
                viewport={ { once: true, amount: 0.3 } }
            >
                QUESTIONS?
                <br />
                WE’VE GOT ANSWERS.
            </motion.h2>


            <AccordionSection />
        </div>
    )
}
