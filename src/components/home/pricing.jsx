import React from 'react'
import CheckIcon from '../assets/check'
import Image from 'next/image'
import PricingPlans from './pricingPlans'


const data = [
    "Connect with a board-certified clinician to discuss your weight loss goals.",
    "Receive personalized recommendations tailored to your needs.",
    "Understand the best program options available for you."

]

export default function Pricing() {
    return (
        <div className='bg-[#FFE6DF] py-10 md:px-[132px] px-8 -mt-10 relative z-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                <div>
                    <h2 className='text-4xl text-[#751010]'>A <span className='font-bold'>PLAN</span> THAT
                        <br />
                        WORKS FOR
                        <br />YOU!</h2>
                    <p className='md:w-2/5 ml-auto text-[#751010]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna </p>

                    <div className='bg-white p-8 mt-10 text-[#751010] font-semibold border-[#EAEAEA] text-center text-xl border rounded-2xl'>
                        *Prices are for up to 200units per vial
                    </div>
                    <div className='bg-white p-8 mt-5 text-[#751010 border-[#EAEAEA] text-center border rounded-2xl space-y-3'>
                        <button className='bg-[#B16464] px-6 py-2 rounded-full text-white '>
                            Book a Consultation
                        </button>
                        <p className='text-base opacity-80'>Kickstart your journey with a complimentary 20-minute consultation.
                            Talk with a licensed provider to discuss your goals, ask questions,
                            & see if our program is right for you—no commitment required!</p>
                    </div>
                </div>
                {/* grid 2  */ }
                <div className='bg-white md:p-8 p-4 mt-5  border-[#EAEAEA] border rounded-2xl shadow_class'>
                    <h3 className='text-2xl text-center text-[#751010] md:w-2/3 mx-auto font-semibold'>Get your hands on a effective Weight loss medication now.</h3>
                    <h4 className='ml-10 mt-5 opacity-80'>What’s included?</h4>
                    <div className='my-4'>
                        { data.map((item, idx) => (
                            <div key={ idx } className='flex gap-3 mb-3 text-[#751010] text-xl font-medium'>
                                <span className='pt-2'> <CheckIcon /></span>
                                <p className='text-sm md:text-base'>{ item }</p>
                            </div>
                        )) }
                    </div>
                    <Image src="/images/plane-image.png"
                        alt='plane-image'
                        width={ 400 }
                        height={ 312 } className='w-full'
                    />
                </div>
            </div>
            <PricingPlans />
        </div>
    )
}
