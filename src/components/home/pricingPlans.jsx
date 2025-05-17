'use client'

import { motion } from 'framer-motion'
import CheckIcon from '../assets/check'

const pricingData = [
    {
        title: "Semaglutide Weight Loss Program",
        price: "$399",
        subtitle: "Price includes medication & appointments",
        features: [
            "Access to prescribed injectable GLP-1 clinically proven medication for weight loss.",
            "Personalized treatment plan developed by our medical team.",
            "Regular virtual consultations to monitor progress.",
            "Ongoing support to ensure long-term weight loss and effective weight loss."
        ],

    },
    {
        title: "Tirzepatide Weight Loss Program",
        price: "$499",
        subtitle: "Price includes medication & appointments",
        features: [
            "Utilize prescribed GLP-1s, an advanced medication shown to aid in significant weight reduction.",
            "Customized treatment strategy tailored to your lifestyle & health goals.",
            "Monthly virtual support & monitoring by our healthcare professionals.",
            "Comprehensive guidance to achieve and maintain your desired weight."
        ]
    },
    {
        title: "Ozempic Weight Loss Program",
        price: "$299",
        subtitle: "Price includes only medication",
        features: [
            "Access to prescribed injectable GLP-1 clinically proven medication for weight loss.",
            "Personalized treatment plan developed by our medical team.",
            "Regular virtual consultations to monitor progress.",
            "Ongoing support to ensure long-term weight loss and effective weight loss."
        ]
    },
    {
        title: "Mounjaro Weight Loss Program",
        price: "$299",
        subtitle: "Price includes only medication",
        features: [
            "Access to prescribed injectable GLP-1 clinically proven medication for weight loss.",
            "Personalized treatment plan developed by our medical team.",
            "Regular virtual consultations to monitor progress.",
            "Ongoing support to ensure long-term weight loss and effective weight loss."
        ]
    }
]

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    })
}

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function PricingPlans() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            { pricingData.map((plan, index) => (
                <motion.div
                    key={ index }
                    className="sticky top-10 z-10 rounded-2xl shadow-lg md:p-6 p-9 border transition-all duration-300 shadow_class border-[#D4D4D4] bg-white hover:scale-105"
                    variants={ cardVariants }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.2 } }
                    custom={ index }
                >
                    <motion.h3
                        className="text-lg font-semibold text-[#7A3333] mb-2 text-center"
                        variants={ textVariants }
                    >
                        { plan.title }
                    </motion.h3>
                    <motion.p
                        className="text-3xl font-bold text-[#7A3333] text-center"
                        variants={ textVariants }
                    >
                        { plan.price }
                    </motion.p>
                    <motion.p
                        className="text-sm text-gray-500 text-center mb-4"
                        variants={ textVariants }
                    >
                        { plan.subtitle }
                    </motion.p>
                    <motion.ul className="space-y-2">
                        { plan.features.map((feature, i) => (
                            <motion.li
                                key={ i }
                                className="flex items-start gap-2 text-[#7A3333]"
                                variants={ textVariants }
                            >
                                <span className="text-lg mt-1">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm font-medium">{ feature }</span>
                            </motion.li>
                        )) }
                    </motion.ul>
                </motion.div>
            )) }
        </div>
    )
}
