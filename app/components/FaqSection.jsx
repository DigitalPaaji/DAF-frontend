"use client"
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "What ingredients are in your authentic tea masala?",
    answer: "Our tea masala is a carefully balanced blend of premium spices, including green cardamom, cinnamon, cloves, dried ginger powder (saunth), black pepper, and a hint of nutmeg. It contains no artificial flavors or preservatives."
  },
  {
    question: "How much tea masala should I use per cup?",
    answer: "For a perfect cup of chai, we recommend using about 1/4 teaspoon (or a generous pinch) of the masala per cup. You can adjust this amount based on how strong and spicy you like your tea."
  },
  {
    question: "Is this tea masala caffeine-free?",
    answer: "Yes! The spice blend itself is 100% caffeine-free. However, if you are brewing it with traditional black tea leaves (CTC), your finished cup of chai will contain caffeine."
  },
  {
    question: "What is the shelf life, and how should I store it?",
    answer: "Our tea masala stays fresh for up to 12 months. To maintain its strong aroma and flavor, keep it tightly sealed in its original container or an airtight glass jar, stored in a cool, dark, and dry place."
  },
  {
    question: "Can I use this masala in recipes other than chai?",
    answer: "Absolutely! While it's perfect for traditional Indian chai, our customers love adding a pinch to oatmeal, pancakes, cookies, cakes, and even warm milk (haldi doodh) for a comforting spiced kick."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container bg-white mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to know about our signature Tea Masala blend.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-amber-200 bg-amber-50 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="font-semibold text-amber-950 text-lg">
                {faq.question}
              </span>
              <span className="ml-6 flex-shrink-0 text-amber-700">
                {openIndex === index ? (
                  <FiChevronUp className="w-6 h-6" />
                ) : (
                  <FiChevronDown className="w-6 h-6" />
                )}
              </span>
            </button>

            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 py-4 border-t border-amber-200' : 'max-h-0'
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