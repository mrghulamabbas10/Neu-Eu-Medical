'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionData = [
    {
        question: 'What is Neueu’s weight loss program?',
        answer:
            'Neueu’s program is a personalized, science-based weight loss journey designed to fit your lifestyle and goals.',
    },
    {
        question: 'How does the virtual weight loss program work?',
        answer:
            'Program durations vary based on individual goals, but most participants see significant changes within 8-12 weeks.',
    },
    {
        question: 'What medications are used in the program?',
        answer:
            'Yes, our program is developed and monitored by licensed healthcare professionals to ensure your safety and success.',
    },
    {
        question: 'Is the program safe for everyone?',
        answer:
            'Side effects are rare but may include temporary fatigue or hunger. Our team adjusts plans to minimize discomfort.',
    },
    {
        question: 'How soon can I see results?',
        answer:
            'Simply sign up and complete a quick questionnaire. A personalized plan will be created for you immediately.',
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            className="bg-white px-6 py-5 rounded-2xl border-l-[10px] border-[#C28686] w-full cursor-pointer"
            onClick={ onClick }
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, amount: 0.2 } }
            transition={ { duration: 0.5 } }
        >
            <div className="flex justify-between items-center text-[#863C3C] font-semibold md:text-lg text-sm">
                <span>{ question }</span>
                <span>{ isOpen ? '−' : '+' }</span>
            </div>

            <AnimatePresence initial={ false }>
                { isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={ {
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        } }
                        transition={ { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
                        className="overflow-hidden"
                    >
                        <div className="pt-4 text-[#751010] text-sm leading-relaxed">
                            { answer }
                        </div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </motion.div>
    );
};

export default function AccordionSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full md:w-2/3 mx-auto space-y-5 py-16 px-4">
            { accordionData.map((item, index) => (
                <AccordionItem
                    key={ index }
                    question={ item.question }
                    answer={ item.answer }
                    isOpen={ openIndex === index }
                    onClick={ () => toggleAccordion(index) }
                />
            )) }
        </div>
    );
}
