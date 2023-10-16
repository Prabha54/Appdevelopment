import React from 'react';
import './faq.css';

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the Employee Tax Calculator?",
      answer: "The Employee Tax Calculator is a tool that helps you estimate your taxes and deductions based on your income and other relevant information."
    },
    {
      question: "Is the service free to use?",
      answer: "Yes, our Employee Tax Calculator is completely free to use. You can access it without any charges."
    },
    {
      question: "How accurate are the tax calculations?",
      answer: "We aim to provide accurate tax estimations. However, the calculations are for informational purposes only, and you should consult with a tax professional for precise advice."
    },
    {
      question: "Is my personal information safe?",
      answer: "We take your privacy seriously. Please refer to our Privacy Policy to learn how we collect, use, and protect your data."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team by visiting our 'Contact Us' page or using the provided contact information."
    }
  ];

  return (
    <div>
      <h1>FAQ</h1>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
