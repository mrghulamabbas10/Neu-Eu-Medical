"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import PlayIcon from "../assets/play-icon";
import Eligible from "../assets/eligible";
import Arrow from "../assets/arrow";
import { IoIosCall } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Star from "../assets/star";


const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const tagContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const tagItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};


const heading = "Weight loss that works".split(" ");

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



export default function Hero() {
    return (
        <div className="bg-[#FFE6DF] rounded-b-3xl pt-10 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">
            {/* Left Content */ }
            <motion.div
                className="space-y-6 md:pb-10"
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true } }
                variants={ fadeInUp }
            >
                {/* Tagline */ }
                <motion.div className="flex items-center gap-2" variants={ fadeInUp }>
                    <PlayIcon />
                    <p className="text-sm md:text-base">Join our virtual weight loss clinic</p>
                </motion.div>

                {/* Main Heading */ }
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl text-[#751010] font-bold leading-tight flex flex-wrap gap-2"
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


                {/* Description */ }
                <motion.p className="text-base text-gray-800" variants={ fadeInUp } custom={ 2 }>
                    Prescribed Medication Assisted Weight Loss Program That Gets Results
                </motion.p>

                {/* CTA Button */ }
                <motion.div variants={ fadeInUp } custom={ 3 }>
                    <Link
                        href="#"
                        className="flex items-center gap-3 bg-[#B16464] hover:bg-[#814a4a] px-6 py-3 text-white rounded-full w-fit text-sm md:text-base"
                    >
                        <Eligible />
                        <span>Am I Eligible?</span>
                    </Link>
                </motion.div>

                {/* Features Grid */ }
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    variants={ staggerContainer }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true } }
                >
                    {/* Left Box */ }
                    <motion.div variants={ fadeInFromRight } className="relative">
                        <p className="absolute top-4 left-4 font-medium text-white z-10">
                            Licensed <br /> Providers
                        </p>
                        <Image
                            src="/images/doctor.png"
                            alt="doctor"
                            width={ 260 }
                            height={ 206 }
                            className="w-full rounded-xl"
                        />
                    </motion.div>

                    {/* Right Box */ }
                    <motion.div variants={ fadeInFromRight } className="relative bg-white rounded-3xl overflow-hidden">
                        <div className="absolute text-sm flex flex-col justify-between h-full p-6">
                            <p className="font-medium">Neu Eu Medical</p>
                            <p className="text-gray-600 text-sm mt-4 leading-snug">
                                Achieve Your Weight Loss <br /> Goals with Neu Eu Medical's <br /> Telehealth Solutions
                            </p>
                            <Link
                                href="tel:+9723325266"
                                className="flex items-center mt-4 gap-2 px-4 py-1 rounded-full bg-[#F5DFA2] text-sm"
                            >
                                <IoIosCall /> +9723325266
                            </Link>
                        </div>
                        <Image
                            src="/images/box-2.png"
                            alt="doctor"
                            width={ 260 }
                            height={ 206 }
                            className="w-full"
                        />
                    </motion.div>
                </motion.div>


                {/* Talk to Providers */ }
                <motion.div
                    className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 mt-4"
                    variants={ fadeInUp }
                    custom={ 5 }
                >
                    <div className="flex items-center  gap-5 bg-[#FFF0EC] px-4 py-2 rounded-full w-fit">
                        <Image src="/images/docters.png" alt="doctors" width={ 115 } height={ 42 } />
                        <span className="h-5 border-r border-gray-400 block"></span>
                        <p className="text-sm">Talk to our health providers</p>
                    </div>
                    <Link href="#" className="transition-transform duration-300 hover:scale-110">
                        <Arrow />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Avatar Image */ }
            <motion.div
                className="relative w-full h-full"
                initial={ { opacity: 0, scale: 1.1 } }
                whileInView={ { opacity: 1, scale: 1 } }
                transition={ { delay: 0.3, duration: 0.8, ease: "easeOut" } }
                viewport={ { once: true } }
            >
                {/* Star Decoration */ }
                <span className="absolute md:top-[50%] top-[30%] right-5 md:right-10">
                    <Star />
                </span>

                {/* Main Image */ }
                <Image
                    src="/images/main-avatar.png"
                    alt="main avatar"
                    width={ 745 }
                    height={ 900 }
                    className="w-full mx-auto md:absolute md:bottom-0 md:right-0 h-full object-center"
                />

                {/* Tags */ }
                <motion.div
                    className="absolute bottom-4 right-4 space-y-2 text-xs"
                    variants={ tagContainer }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true } }
                >
                    <motion.div variants={ tagContainer } className="flex items-center justify-end gap-2 flex-wrap">
                        <motion.span variants={ tagItem } className="bg-[#84848433] px-3 py-1 rounded-full border border-white text-white flex items-center">
                            <LuDot /> Clinic
                        </motion.span>
                        <motion.span variants={ tagItem } className="bg-white px-3 py-1 rounded-full border border-white text-black flex items-center">
                            <LuDot /> Medicine CL
                        </motion.span>
                    </motion.div>

                    <motion.div variants={ tagContainer } className="flex items-center justify-end gap-2 flex-wrap">
                        <motion.span variants={ tagItem } className="bg-[#84848433] px-3 py-1 rounded-full border border-white text-white flex items-center">
                            <LuDot /> Lifestyle
                        </motion.span>
                        <motion.span variants={ tagItem } className="bg-[#84848433] px-3 py-1 rounded-full border border-white text-white flex items-center">
                            <LuDot /> Medical
                        </motion.span>
                        <motion.span variants={ tagItem } className="bg-[#84848433] px-3 py-1 rounded-full border border-white text-white flex items-center">
                            <LuDot /> Healthcare
                        </motion.span>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    );
}
