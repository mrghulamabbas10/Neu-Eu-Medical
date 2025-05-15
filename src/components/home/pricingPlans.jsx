"use client"

import { motion } from "framer-motion";
import CheckIcon from "../assets/check";

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
        highlight: true
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
];

export default function PricingPlans() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
            { pricingData.map((plan, index) => (
                <motion.div
                    key={ index }
                    className={ `sticky top-10 z-10 rounded-2xl shadow-lg p-6 border transition-all duration-300 shadow_class border-[#D4D4D4] bg-white hover:scale-105` }
                    initial={ { opacity: 0, y: 50 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { delay: index * 0.1 } }
                >
                    <h3 className="text-lg font-semibold text-[#7A3333] mb-2 text-center">{ plan.title }</h3>
                    <p className="text-3xl font-bold text-[#7A3333] text-center">{ plan.price }</p>
                    <p className="text-sm text-gray-500 text-center mb-4">{ plan.subtitle }</p>
                    <ul className="space-y-2">
                        { plan.features.map((feature, i) => (
                            <li key={ i } className="flex items-start gap-2 text-[#7A3333]">
                                <span className="text-lg">
                                    <CheckIcon className=" mt-1" />
                                </span>
                                <span className="text-sm font-medium ">{ feature }</span>
                            </li>
                        )) }
                    </ul>
                </motion.div>
            )) }
        </div>
    );
}
