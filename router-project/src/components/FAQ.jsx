import React from 'react';
import './FAQ.css'; 

const faqData = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, PayPal, and other secure payment methods.'
  },
  {
    question: 'How can I track my order?',
    answer: 'You can track your order by logging into your account or using the tracking number provided.'
  },
  
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to various countries around the world. Shipping costs and delivery times may vary.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We have a hassle-free return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.'
  }
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="faq-item">
            <h4 className="faq-question">{faq.question}</h4>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
