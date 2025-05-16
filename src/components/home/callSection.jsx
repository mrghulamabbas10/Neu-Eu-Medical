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

    return (
        <div className='pt-10 space-y-5'>
            <motion.h2
                className="text-2xl md:text-4xl text-[#751010] font-semibold text-center"
                variants={ textVariant }
                initial="hidden"
                animate="show"
                viewport={ { once: true, amount: 0.3 } }
            >
                Convenient Online Consultation with  <br className='md:block hidden' /> { " " } Licensed Providers

            </motion.h2>
            <Image src="/images/call-sec.png" alt='call-sec' width={ 980 } height={ 614 } className='mx-auto' />
        </div>
    )
}
