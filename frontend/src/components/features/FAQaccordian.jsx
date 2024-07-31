import React, { useState } from 'react';
import { motion } from "framer-motion";

const faqs = [
    {
        question: 'What is your return policy?',
        answer: 'Our return policy allows you to return items within 30 days of receipt for a full refund or exchange.'
    },
    {
        question: 'How can I track my order?',
        answer: 'Once your order has been shipped, you will receive a tracking number via email that you can use to track your order.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to most countries. Please check our shipping policy for more details.'
    }
    // Add more FAQs as needed
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="accordion-item">
        <button className="accordion-header" onClick={onClick} style={{backgroundColor:'#D5FFFF'}}>
            {question}
            <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>+</span>
        </button>
        {isOpen && <div className="accordion-body" style={{color:'#02CBFF'}}>{answer}</div>}
    </div>
);

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <motion.div
                key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
                </motion.div>
            ))}
        </div>
    );
};

export default Accordion;
