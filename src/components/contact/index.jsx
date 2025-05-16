"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPaperPlane, FaFacebookF, FaInstagram, FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import Star from "../assets/star";


const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.8 } }
            className="min-h-screen relative bg-[#FFE4D1] flex items-center justify-center px-4 py-12"
        >

            {/* Star Decoration */ }
            <span className="absolute md:top-[30%] top-[20%] right-5 md:right-20 blink">
                <Star />
            </span>

            <span className="absolute top-[20%] left-[30%] md:left-20 blink">
                <Star />
            </span>

            <span className="absolute top-[40%] left-[30%] blink">
                <Star />
            </span>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side */ }
                <motion.div
                    variants={ containerVariants }
                    initial="hidden"
                    animate="show"
                    className="md:space-y-10 space-y-6"
                >
                    <motion.div variants={ itemVariants } className="space-y-2">
                        <h2 className="text-lg text-gray-500">Contact Us</h2>
                        <h1 className="text-5xl font-semibold text-[#891a1f]">Get in Touch with Us</h1>
                    </motion.div>

                    <motion.div variants={ itemVariants } className="flex items-center space-x-4">
                        <div className="bg-white p-4 rounded">
                            <MdOutlineCall className="text-[#891a1f] text-xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-[#891a1f] text-lg">Phone Number</p>
                            <p className="text-gray-700">+9723325266</p>
                        </div>
                    </motion.div>

                    <motion.div variants={ itemVariants } className="flex items-center space-x-4">
                        <div className="bg-white p-4 rounded">
                            <HiOutlineMail className="text-[#891a1f] text-xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-[#891a1f] text-lg">Email</p>
                            <p className="text-gray-700">Info@neueu.co</p>
                        </div>
                    </motion.div>

                    <motion.div variants={ itemVariants } className="flex space-x-4 pt-4">
                        <Link href="" className="bg-white flex items-center justify-center px-6 py-2 rounded-md shadow hover:shadow-md">
                            <Image src="/images/facebook.png" alt="facebook" width={ 106 } height={ 30 } />
                        </Link>
                        <Link href="" className="bg-white px-6 py-2 rounded-md shadow hover:shadow-md">
                            <Image src="/images/instagram.png" alt="instagram" width={ 106 } height={ 30 } />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Side Form */ }
                <motion.form
                    onSubmit={ handleSubmit }
                    initial={ { x: 100, opacity: 0 } }
                    animate={ { x: 0, opacity: 1 } }
                    transition={ { duration: 0.8 } }
                    className="bg-white p-8 rounded-lg shadow_class space-y-4"
                >
                    <div className="relative">
                        <FaRegUser className="absolute top-4 left-4 text-gray-600 text-xl" />
                        <input
                            type="text"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }
                            placeholder="Full Name"
                            className="w-full pl-14 pr-4 py-3.5 bg-[#F5F5F5] border border-[#E8E6E6] rounded focus:outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <IoCallOutline className="absolute top-4 left-4 text-gray-600 text-xl" />
                        <input
                            type="tel"
                            name="phone"
                            value={ formData.phone }
                            onChange={ handleChange }
                            placeholder="Phone"
                            className="w-full pl-14 pr-4 py-3.5 bg-[#F5F5F5] border border-[#E8E6E6] rounded focus:outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <HiOutlineMail className="absolute top-4 left-4 text-gray-600 text-xl" />
                        <input
                            type="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }
                            placeholder="Email"
                            className="w-full pl-14 pr-4 py-3.5 bg-[#F5F5F5] border border-[#E8E6E6] rounded focus:outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FaPaperPlane className="absolute top-4 left-4 text-gray-600 text-xl" />
                        <textarea
                            name="message"
                            value={ formData.message }
                            onChange={ handleChange }
                            placeholder="Your Message"
                            className="w-full pl-14 pr-4 py-3.5 bg-[#F5F5F5] border border-[#E8E6E6] rounded focus:outline-none resize-none "
                            rows={ 5 }
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <motion.button
                            whileHover={ { scale: 1.05 } }
                            whileTap={ { scale: 0.95 } }
                            type="submit"
                            className="w-fit px-14 rounded-full bg-[#b35c5c] text-white py-2.5 mx-auto mt-4"
                        >
                            Submit
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    );
}
