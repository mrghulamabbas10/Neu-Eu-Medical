'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CheckIcon from '../assets/check'
import Image from 'next/image'
import PricingPlans from './pricingPlans'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const data = [
    "Connect with a board-certified clinician to discuss your weight loss goals.",
    "Receive personalized recommendations tailored to your needs.",
    "Understand the best program options available for you."
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function Pricing() {


    return (
        <div className='bg-[#FFE6DF] py-10 md:px-[132px] px-8 -mt-10 relative z-10'>
            <motion.div
                className='grid lg:grid-cols-2 grid-cols-1 gap-8'
                initial="hidden"
                whileInView="show"
                viewport={ { once: true, amount: 0.2 } }
                transition={ { duration: 0.6 } }
                variants={ containerVariants }
            >
                {/* Left Section */ }
                <motion.div variants={ itemVariants }>
                    <motion.h2 className='text-4xl text-[#751010]'
                        initial={ { x: -50, opacity: 0 } }
                        animate={ { x: 0, opacity: 1 } }
                        transition={ { duration: 0.6, ease: 'easeOut' } }
                    >
                        A <span className='font-bold'>PLAN</span> THAT
                        <br />
                        WORKS FOR
                        <br />YOU!
                    </motion.h2>

                    <motion.p
                        className='md:w-2/5 ml-auto text-[#751010]'
                        initial={ { x: 50, opacity: 0 } }
                        animate={ { x: 0, opacity: 1 } }
                        transition={ { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                    </motion.p>

                    <motion.div
                        className='bg-white p-8 mt-10 text-[#751010] font-semibold border-[#EAEAEA] text-center text-xl border rounded-2xl'
                        initial={ { scale: 0.95, opacity: 0 } }
                        whileInView={ { scale: 1, opacity: 1 } }
                        transition={ { duration: 0.4, delay: 0.4 } }
                        viewport={ { once: true } }
                    >
                        *Prices are for up to 200units per vial
                    </motion.div>

                    <motion.div
                        className='bg-white p-8 mt-5 text-[#751010 border-[#EAEAEA] text-center border rounded-2xl space-y-3'
                        initial={ { y: 30, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.5, delay: 0.5 } }
                        viewport={ { once: true } }
                    >
                        <Link href='/https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20PesWrliNOdYy-TL5lNHSZ3F4D2DhusMxOSgHC4D2_LT6u9ThzCFAxFOPKlBFRoEN-zKCBIa3' className='block mb-2'>
                            <motion.button
                                className='bg-[#B16464] px-6 py-2 rounded-full text-white'
                                whileHover={ { scale: 1.05 } }
                                whileTap={ { scale: 0.95 } }
                            >
                                Book a Consultation
                            </motion.button >
                        </Link>
                        <p className='text-base opacity-80'>
                            Kickstart your journey with a complimentary 20-minute consultation.
                            Talk with a licensed provider to discuss your goals, ask questions,
                            & see if our program is right for you—no commitment required!
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Section */ }
                <motion.div
                    className='bg-white md:p-8 p-4 mt-5 border-[#EAEAEA] border rounded-2xl shadow_class'
                    variants={ itemVariants }
                >
                    <h3 className='text-2xl text-center text-[#751010] md:w-2/3 mx-auto font-semibold'>
                        Get your hands on a effective Weight loss medication now.
                    </h3>
                    <h4 className='ml-10 mt-5 opacity-80'>What’s included?</h4>

                    <motion.div className='my-4' variants={ containerVariants } initial="hidden" whileInView="show" viewport={ { once: true } }>
                        { data.map((item, idx) => (
                            <motion.div key={ idx } className='flex gap-3 mb-3 text-[#751010] text-xl font-medium' variants={ itemVariants }>
                                <span className='pt-2'><CheckIcon /></span>
                                <p className='text-sm md:text-base'>{ item }</p>
                            </motion.div>
                        )) }
                    </motion.div>

                    <motion.div
                        initial={ { opacity: 0, y: 30 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                        viewport={ { once: true } }
                    >
                        <Image
                            src="/images/plane-image.png"
                            alt='plane-image'
                            width={ 400 }
                            height={ 312 }
                            className='w-full'
                            quality={ 100 }
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            <PricingPlans />
        </div>
    )
}
