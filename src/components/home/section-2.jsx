"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import RightArrow from "../assets/right-arrow";
import UserIcon from "../assets/user-icon";
import QuotsIcon from "../assets/quots";

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function Section2() {
    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            { [1, 2, 3, 4].map((item, index) => (
                <motion.div
                    key={ index }
                    className="relative overflow-hidden rounded-3xl group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                    custom={ index }
                    variants={ fadeInUp }
                >
                    {/* Background Image */ }
                    <Image
                        src={ `/images/section-box-${item}.png` }
                        alt={ `box-${item}` }
                        className="w-full h-[280px] sm:h-[300px] lg:h-[284px] object-cover rounded-3xl"
                        width={ 390 }
                        height={ 284 }
                        quality={ 100 }
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"

                    />

                    {/* Overlay content */ }
                    <div className="absolute inset-0 p-5 flex flex-col justify-between rounded-3xl">
                        { item === 1 && (
                            <div className="flex items-center justify-between mt-auto">
                                <p className="text-base font-medium">View our stories</p>
                                <RightArrow />
                            </div>
                        ) }

                        { item === 2 && (
                            <div className="mt-auto">
                                <p className="text-lg font-medium">
                                    Choose a plan that works for you.
                                </p>
                            </div>
                        ) }

                        { item === 3 && (
                            <>
                                <p className="text-sm md:text-xl lg:text-base font-medium opacity-80">REVIEWS</p>
                                <p className="text-sm md:text-xl lg:text-base font-medium mt-2 mb-4 leading-snug">
                                    My provider helped me understand the difference between hunger, being bored, and food addiction.
                                </p>
                                <div className="flex items-center justify-between gap-3">
                                    <UserIcon />
                                    <div className="text-xs">
                                        <h2 className="font-mediem">R.J.</h2>
                                        <p>Verified Neu Eu Medical patient</p>
                                    </div>
                                    <QuotsIcon />
                                </div>
                            </>
                        ) }

                        { item === 4 && (
                            <div className="mt-auto">
                                <p className="text-lg font-medium text-center">
                                    Take control of your health.
                                </p>
                            </div>
                        ) }
                    </div>
                </motion.div>
            )) }
        </div>
    );
}
