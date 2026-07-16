"use client"
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
const faqs = [ { question: "Are Dr. Aulakh Foods Tea Masalas made with natural ingredients?", answer: "Ye s. Our Tea Masalas are prepared using carefully selected natural spices chosen for their freshness, aroma and flavour. We focus on maintaining the natural character of every ingredient so that each blend delivers an authentic and refreshing tea experience.", }, { question: "Do your Tea Masalas contain any artificial preservatives?", answer: "No artificial preservatives are added to our Tea Masala blends. Our products are prepared under hygienic conditions using carefully controlled processing and packaging methods to help maintain their quality, aroma and freshness.", }, { question: "Is Dr. Aulakh Foods Tea Masala suitable for everyday consumption?", answer: "Yes. Our Tea Masalas are suitable for regular household use and can be enjoyed as part of your daily tea routine. You may adjust the quantity according to your preferred level of aroma, flavour and spice.", }, { question: "What quantity of Tea Masala should be added to one cup of tea?", answer: "For a well-balanced cup of tea, we recommend adding approximately half a teaspoon of Tea Masala per cup. The quantity can be slightly increased or reduced depending on how mild, aromatic or strongly spiced you prefer your tea.", }, { question: "What is the expected shelf life of your Tea Masala products?", answer: "Our Tea Masala products typically have a shelf life of up to 12 months when stored correctly. For the exact best-before date, always refer to the information printed on the product packaging.", }, { question: "Does Dr. Aulakh Foods accept bulk or commercial orders?", answer: "Yes. We cater to bulk and commercial requirements for retailers, distributors, cafés, restaurants and institutional buyers. You can contact our customer support team to discuss product quantities, availability and other business-related requirements.", }, { question: "Is Cash on Delivery available for all orders?", answer: "Cash on Delivery availability depends on the delivery location and the courier service available for your postal code. The applicable payment options will be displayed during checkout based on your shipping address.", }, { question: "What is the best way to store Tea Masala after opening?", answer: "Keep the container tightly closed after every use and store it in a cool, dry place. Avoid exposure to moisture, heat and direct sunlight, as these conditions may affect the freshness, aroma and overall quality of the spices.", }, ];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" px-4 md:px-12  xl:px-72 py-24 ">
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl lg:text-3xl font-medium text-amber-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 lg:text-lg text-gray-600">
          Everything you need to know about our signature Tea Masala blend.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-amber-50 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="font-semibold text-amber-950 md:text-lg">
                {faq.question}
              </span>
              <span className="ml-6 shrink-0 text-amber-700">
                {openIndex === index ? (
                  <FiChevronUp className="w-6 h-6" />
                ) : (
                  <FiChevronDown className="w-6 h-6" />
                )}
              </span>
            </button>

            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? ' py-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;