"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ConsentFormPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreed) {
            alert("Please agree to the terms and conditions.");
            return;
        }
        console.log("Form Submitted", formData);
    };

    return (
        <motion.div
            initial={ { opacity: 0, y: 50 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
            className=" px-4 py-10 flex items-center justify-center"
        >
            <div className="md:max-w-3xl w-full md:p-8 p-4 space-y-6">
                <div className="text-center space-y-4">
                    <p className="text-lg font-medium 0">Almost there!</p>
                    <h1 className="text-3xl font-bold text-[#751010]">Consent</h1>
                    <p className=" text-gray-500">
                        Read and accept our terms and conditions by signing below.
                    </p>
                </div>

                <form onSubmit={ handleSubmit } className="space-y-8 mt-10">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            name="agreed"
                            checked={ formData.agreed }
                            onChange={ handleChange }
                            className="mt-1 h-7 w-7 text-[#891a1f] rounded border-gray-300 focus:ring-[#891a1f]"
                        />
                        <label className="text-base text-gray-500">
                            Please check this box to indicate that you have read and agree to our
                            terms and conditions
                        </label>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-[#891a1f]">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }
                            className="w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f]"
                            placeholder="Type here"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-[#891a1f]">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }
                            className="w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f]"
                            placeholder="Type here"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-[#891a1f]">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={ formData.phone }
                            onChange={ handleChange }
                            className="w-full px-4 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#891a1f]"
                            placeholder="Type here"
                            required
                        />
                    </div>

                    <div className="text-center text-sm text-[#891a1f] font-semibold">
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>{ " " }
                        |{ " " }
                        <a href="#" className="hover:underline">
                            Terms of Service
                        </a>
                    </div>
                    <div className="mx-auto w-full flex justify-center">

                        <motion.button
                            whileHover={ { scale: 1.05 } }
                            whileTap={ { scale: 0.95 } }
                            type="submit"
                            className="w-fit px-20 py-3  rounded-full bg-[#a65758] text-white font-semibold hover:bg-[#8a3f40] transition-colors"
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}