"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Footer() {
  return (
    <footer className="md:px-8 px-3 bg-[#fae9d9] py-6 -mt-10 ">
      {/* Footer Bottom */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center justify-between bg-white p-5 rounded-3xl gap-4 text-sm"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          {/* Logo */}
          <Link href={"/"} className="block">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={107}
              height={40}
              quality={100}
            />
          </Link>
          <p className="mt-2">
            Prescribed Medication Assisted <br /> Weight Loss Program That Gets Results
          </p>
        </div>
        <div>
          <Link
            href="/https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20PesWrliNOdYy-TL5lNHSZ3F4D2DhusMxOSgHC4D2_LT6u9ThzCFAxFOPKlBFRoEN-zKCBIa3"
            className="block mb-2"
          >
            <motion.button
              className="bg-[#B16464] px-6 py-2 rounded-full text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Consultation
            </motion.button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 text-[#333] opacity-80">
          <Link href="/terms-and-conditions">Plans</Link>
          <Link href="/contact">Services</Link>
          <Link href="/privacy-policies">About</Link>
          <Link href="/privacy-policies">Steps</Link>
          <Link href="/privacy-policies">legal</Link>
          <Link href="/privacy-policies">Terms</Link>
          <Link href="/privacy-policies">Privacy</Link>
        </div>
      </motion.div>
    </footer>
  );
}
