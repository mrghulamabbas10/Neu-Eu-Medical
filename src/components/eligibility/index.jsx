"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Eligibility from "./eligibility"
import { useRouter } from "next/navigation"

export default function EligibilityPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        state: "",
        otherState: "",
        thyroidCancer: "",
        pregnant: "",
        allergicToGlp: "",
        triedGlpBefore: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleRadioChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const nextStep = () => {
        if (step < 8) {
            setDirection(1)
            setStep(step + 1)
        } else {
            // Submit form and navigate to checkout
            console.log("Form submitted:", formData)
            router.push("/checkout")
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setDirection(-1)
            setStep(step - 1)
        }
    }



    const renderStep = () => {
        return (
            <> { getStepContent() }</>
        )
    }

    const getStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <Eligibility tabNumber="01" heading="What is your name?" buttontext="Next" onClick={ nextStep } onBack={ null }>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={ formData.name }
                                    onChange={ handleInputChange }
                                    placeholder="Name*"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>
                    </Eligibility>
                )

            case 2:
                return (
                    <Eligibility
                        tabNumber="02"
                        heading="What is your date of birth?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={ formData.dateOfBirth }
                                    onChange={ handleInputChange }
                                    placeholder="Date of Birth*"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>
                    </Eligibility>
                )

            case 3:
                return (
                    <Eligibility
                        tabNumber="03"
                        heading="Choose your current state"
                        subheading="Select one *"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6 space-y-3">
                            { ["Texas", "Oregon", "Other"].map((stateOption) => (
                                <label
                                    key={ stateOption }
                                    className={ `block w-full p-3 border rounded-md cursor-pointer transition-colors ${formData.state === stateOption
                                        ? "bg-[#fde8e8] border-[#751010]"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                        }` }
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="state"
                                            value={ stateOption }
                                            checked={ formData.state === stateOption }
                                            onChange={ () => handleRadioChange("state", stateOption) }
                                            className="custom-radio w-4 h-4 border-gray-300"
                                        />
                                        <span className="ml-2">{ stateOption }</span>
                                    </div>
                                </label>
                            )) }
                        </div>

                    </Eligibility>


                )

            case 4:
                return (
                    <Eligibility
                        tabNumber="04"
                        heading="What is the Other State?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="otherState"
                                    value={ formData.otherState }
                                    onChange={ handleInputChange }
                                    placeholder="Other State*"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#751010] focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>
                    </Eligibility>
                )

            case 5:
                return (
                    <Eligibility
                        tabNumber="05"
                        heading="Do you have a history of thyroid cancer?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6 space-y-3">
                            { ["Yes", "No"].map((option) => (
                                <label
                                    key={ option }
                                    className={ `block w-full p-3 rounded-md cursor-pointer transition-colors border ${formData.thyroidCancer === option
                                        ? "bg-[#FFE4D1] border-[#FFD4B5]"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                        }` }
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="thyroidCancer"
                                            value={ option }
                                            checked={ formData.thyroidCancer === option }
                                            onChange={ () => handleRadioChange("thyroidCancer", option) }
                                            className="custom-radio w-4 h-4 border-gray-300"
                                        />
                                        <span className="ml-2">{ option }</span>
                                    </div>
                                </label>
                            )) }
                        </div>
                    </Eligibility>

                )

            case 6:
                return (
                    <Eligibility
                        tabNumber="06"
                        heading="Are you pregnant?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6 space-y-3">
                            { ["Yes", "No"].map((option) => (
                                <label
                                    key={ option }
                                    className={ `block w-full p-3 rounded-md cursor-pointer transition-colors border ${formData.pregnant === option
                                        ? "bg-[#FFE4D1] border-[#FFD4B5]"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                        }` }
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="pregnant"
                                            value={ option }
                                            checked={ formData.pregnant === option }
                                            onChange={ () => handleRadioChange("pregnant", option) }
                                            className="custom-radio w-4 h-4 border-gray-300"
                                        />
                                        <span className="ml-2">{ option }</span>
                                    </div>
                                </label>
                            )) }
                        </div>
                    </Eligibility>

                )

            case 7:
                return (
                    <Eligibility
                        tabNumber="07"
                        heading="Are you allergic to glp-1's?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6 space-y-3">
                            { ["Yes", "No"].map((option) => (
                                <label
                                    key={ option }
                                    className={ `block w-full p-3 rounded-md cursor-pointer transition-colors border ${formData.allergicToGlp === option
                                        ? "bg-[#FFE4D1] border-[#FFD4B5]"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                        }` }
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="allergicToGlp"
                                            value={ option }
                                            checked={ formData.allergicToGlp === option }
                                            onChange={ () => handleRadioChange("allergicToGlp", option) }
                                            className="custom-radio w-4 h-4 border-gray-300"
                                        />
                                        <span className="ml-2">{ option }</span>
                                    </div>
                                </label>
                            )) }
                        </div>
                    </Eligibility>

                )

            case 8:
                return (
                    <Eligibility
                        tabNumber="08"
                        heading="Have you tried a glp-1 in the past?"
                        buttontext="Next"
                        onClick={ nextStep }
                        onBack={ prevStep }
                    >
                        <div className="mt-6 space-y-3">
                            { ["Yes", "No"].map((option) => (
                                <label
                                    key={ option }
                                    className={ `block w-full p-3 rounded-md cursor-pointer transition-colors border ${formData.triedGlpBefore === option
                                        ? "bg-[#FFE4D1] border-[#FFD4B5]"
                                        : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                                        }` }
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="triedGlpBefore"
                                            value={ option }
                                            checked={ formData.triedGlpBefore === option }
                                            onChange={ () => handleRadioChange("triedGlpBefore", option) }
                                            className="custom-radio w-4 h-4 border-gray-300"
                                        />
                                        <span className="ml-2">{ option }</span>
                                    </div>
                                </label>
                            )) }
                        </div>
                    </Eligibility>

                )

            default:
                return null
        }
    }

    return <div>{ renderStep() }</div>
}
