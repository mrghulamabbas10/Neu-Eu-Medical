"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import CheckIcon from "@/components/assets/check";

const textVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

const popup = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};



const features = [
    "Prescribed GLP-1's can help patients lose up to 1.5% of your body fat per week.",
    "Get approved with this 5-min quiz, no insurance needed",
];

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "blog" },
    { name: "Book Now", path: "/appointment" },
    { name: "📧 Info@neueu.co", path: "" },
    { name: "📞 +9723325266", path: "" },
];


const headingContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // delay between lines
        },
    },
};

const lineVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};


export default function Eligibale() {
    return (
        <div className='Providers pt-20 md:pb-10 pb-20 px-4 md:px-14 md:mt-[-5vw] mt-[-16vw]'>
            <motion.div
                className="bg-[#95423A] text-white rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
                variants={ container }
                initial="hidden"
                whileInView="show"
                viewport={ { once: true, amount: 0.3 } }
            >
                {/* Left Section */ }
                <div>
                    <motion.h3
                        className="text-base md:text-lg opacity-80"
                        variants={ textVariants }
                    >
                        Join 5000+ weight loss patients
                    </motion.h3>


                    <motion.div
                        variants={ headingContainer }
                        initial="hidden"
                        whileInView="show"
                        viewport={ { once: true } }
                        className="text-2xl md:text-4xl uppercase mt-2 leading-tight md:leading-snug"
                    >
                        <motion.p variants={ lineVariant }>Take our 5 min quiz to</motion.p>
                        <motion.p variants={ lineVariant } className="ml-4 md:ml-10">
                            see if you're eligible,
                        </motion.p>
                        <motion.p variants={ lineVariant } className="ml-6 md:ml-14">
                            no insurance needed
                        </motion.p>
                    </motion.div>


                    <motion.div
                        className="flex items-end gap-5 my-8 md:hidden lg:flex "
                        variants={ popup }
                    >
                        <Image
                            src="/images/footer-lady.png"
                            alt="footer-lady"
                            width={ 120 }
                            height={ 120 }
                            className="w-[100px] md:w-[140px]"
                            quality={ 100 }
                        />

                    </motion.div>
                </div>

                {/* Right Section */ }
                <div className="flex flex-col justify-between space-y-8">
                    <motion.div
                        className="flex justify-end"
                        variants={ popup }
                    >
                        <Link
                            href="/eligibility"
                            className="flex items-center gap-3 px-6 py-2 rounded-full bg-white hover:bg-[#B16464] text-black font-semibold text-base"
                        >
                            Am I Eligible? <MdOutlineArrowRightAlt className="text-2xl" />
                        </Link>
                    </motion.div>

                    <motion.ul
                        className="space-y-3"
                        variants={ container }
                        initial="hidden"
                        whileInView="show"
                        viewport={ { once: true, amount: 0.3 } }
                    >
                        { features.map((feature, i) => (
                            <motion.li
                                key={ i }
                                className="flex items-start gap-2"
                                variants={ textVariants }
                            >
                                <span className="text-lg mt-1 text-white">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm md:text-base font-medium">
                                    { feature }
                                </span>
                            </motion.li>
                        )) }
                    </motion.ul>

                    <motion.ul
                        className="flex flex-wrap gap-5 md:gap-6 items-center pt-6"
                        variants={ container }
                        initial="hidden"
                        whileInView="show"
                        viewport={ { once: true, amount: 0.3 } }
                    >
                        { navLinks.map((item, i) => (
                            <motion.li
                                key={ i }
                                className="text-sm md:text-base opacity-80"
                                variants={ textVariants }
                            >
                                <Link href={ item.path } >  { item.name }</Link>
                            </motion.li>
                        )) }
                    </motion.ul>
                </div>
            </motion.div>
        </div>
    )
}
