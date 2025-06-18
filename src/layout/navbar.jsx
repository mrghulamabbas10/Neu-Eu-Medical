"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeData = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Signup", path: "/eligibility" },
];

const logoVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navItemVariant = {
  hidden: { y: 20, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const rightSectionVariant = {
  hidden: { x: 30, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
  },
};

export default function Navbar({ className, containerClass }) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter()

  return (
    <div className={`${className ? containerClass : ""} pt-3`}>
      <div
        className={`${
          className ? className : "rounded-t-3xl"
        } py-4 px-6 md:px-10 flex items-center justify-between  relative z-50`}
      >
        {/* Logo */}
        <motion.div variants={logoVariant} initial="hidden" animate="show">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={107}
              height={40}
              quality={100}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex items-center gap-12 bg-[#FFFFFF66] border border-[#FFFFFF] px-10 p-2 rounded-full"
          variants={navItemVariant}
          initial="hidden"
          animate="show"
        >
          {HomeData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={navItemVariant}
              initial="hidden"
              animate="show"
            >
              <Link
                href={item.path}
                className={
                  pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-[#CA6464]"
                }
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hidden lg:flex items-center gap-2"
          variants={rightSectionVariant}
          initial="hidden"
          animate="show"
          
        >
          <button  onClick={() => router.push("/eligibility")} className="bg-primary px-8 py-3 rounded-full text-white hover:bg-[#CA6464] transition duration-150 cursor-pointer">
            Book Now!
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-3xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Overlay and Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-[#FFE2D6] p-6 z-50 flex flex-col gap-6 shadow-lg"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Logo in sidebar */}
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={100}
                    height={40}
                    quality={100}
                  />
                </div>
                <button
                  className="text-3xl text-black"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose />
                </button>
              </div>

              {/* Links */}
              <motion.nav
                variants={rightSectionVariant}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-4 mt-4 justify-center items-center"
              >
                {HomeData.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium py-3 border-b border-[#F4A7A7] text-center w-full"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.nav>

              <motion.div
                className="flex items-center gap-2"
                variants={rightSectionVariant}
                initial="hidden"
                animate="show"
              >
                <button
                  onClick={() => router.push("/eligibility")}
                  className="bg-primary px-8 py-3 w-full rounded-full text-white hover:bg-[#CA6464] transition duration-150 cursor-pointer"
                >
                  Book Now!
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
