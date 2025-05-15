"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HomeData = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Appointment", path: "/appointment" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:px-8 px-3 md:pt-8 pt-3">
            <div className="bg-[#FFE6DF] py-4 px-6 md:px-10 flex items-center justify-between rounded-tl-3xl rounded-tr-3xl relative z-50">
                {/* Logo */ }
                <div>
                    <Image src="/images/logo.png" alt="logo" width={ 107 } height={ 40 } />
                </div>

                {/* Desktop Navigation */ }
                <div className="hidden md:flex items-center gap-12 bg-[#FFFFFF66] border border-[#FFFFFF] px-10 p-2 rounded-full">
                    { HomeData.map((item, idx) => (
                        <Link key={ idx } href={ item.path }>
                            { item.name }
                        </Link>
                    )) }
                </div>

                {/* Right Side */ }
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        href="tel:+9723325266"
                        className="flex items-center bg-[#FFFFFF66] border border-[#FFFFFF] px-3 py-1 gap-3 rounded-full"
                    >
                        <span>+9723325266</span>
                        <span className="w-8 h-8 rounded-full bg-[#131111] flex items-center justify-center text-white">
                            <IoCall />
                        </span>
                    </Link>
                    <div className="flex items-center justify-center cursor-pointer bg-[#FFFFFF66] border border-[#FFFFFF] w-10 h-10 rounded-full">
                        <FiSearch />
                    </div>
                </div>

                {/* Mobile Menu Button */ }
                <div className="md:hidden">
                    <button
                        className="text-3xl text-black"
                        onClick={ () => setIsOpen(!isOpen) }
                    >
                        { isOpen ? <HiX /> : <HiMenuAlt3 /> }
                    </button>
                </div>
            </div>

            {/* Overlay and Sidebar */ }
            <AnimatePresence>
                { isOpen && (
                    <>
                        {/* Overlay */ }
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-40 z-40"
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            onClick={ () => setIsOpen(false) }
                        />

                        {/* Sidebar */ }
                        <motion.div
                            className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-[#FFE6DF] p-6 z-50 flex flex-col gap-6 shadow-lg"
                            initial={ { x: "-100%" } }
                            animate={ { x: 0 } }
                            exit={ { x: "-100%" } }
                            transition={ { type: "spring", stiffness: 300, damping: 30 } }
                        >
                            {/* Logo in sidebar */ }
                            <div>
                                <Image src="/images/logo.png" alt="logo" width={ 100 } height={ 40 } />
                            </div>

                            {/* Links */ }
                            <nav className="flex flex-col gap-4 mt-4">
                                { HomeData.map((item, idx) => (
                                    <Link
                                        key={ idx }
                                        href={ item.path }
                                        onClick={ () => setIsOpen(false) }
                                        className="text-lg font-medium"
                                    >
                                        { item.name }
                                    </Link>
                                )) }
                            </nav>

                            {/* Call Button */ }
                            <Link
                                href="tel:+9723325266"
                                className="flex items-center justify-center gap-3 bg-white border border-[#ccc] px-4 py-2 rounded-full mt-3"
                            >
                                <span>+9723325266</span>
                                <span className="w-8 h-8 rounded-full bg-[#131111] flex items-center justify-center text-white">
                                    <IoCall />
                                </span>
                            </Link>
                        </motion.div>
                    </>
                ) }
            </AnimatePresence>
        </div>
    );
}
