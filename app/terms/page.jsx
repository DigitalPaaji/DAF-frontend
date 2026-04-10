import React from 'react';

const TermsPage = () => {
  const lastUpdated = "March 17, 2026";

  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using Doctor Aulakh's Food website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services."
    },
    {
      title: "2. Products and Pricing",
      content: "We strive to display our premium teas and spices accurately. However, we do not guarantee that descriptions or colors are entirely error-free. Prices are subject to change without notice."
    },
    {
      title: "3. Shipping and Returns",
      content: "Risk of loss passes to you upon delivery to the carrier. For details on returning consumable goods, please review our Returns Policy."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this site (text, graphics, logos) is the property of Doctor Aulakh's Food and is protected by copyright and intellectual property laws. Unauthorized reproduction or distribution is prohibited."
    },
    {
      title: "5. Limitation of Liability",
      content: "Doctor Aulakh's Food shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our website or products."
    }
  ];

  return (
    <div className="min-h-screen my-10 bg-white text-gray-800 py-16 px-5 sm:px-6 lg:px-8  selection:bg-[#c9a05e] selection:text-white">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-10 border-b border-[#c9a05e]/30 pb-8">
          <h1 className="text-3xl sm:text-4xl  font-bold text-[#14110f] mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </div>

        
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
          Welcome to Doctor Aulakh's Food. Please read these terms carefully before using our website or purchasing our authentic teas and spices. This document forms a legally binding agreement between you and our company.
        </p>

        
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl  font-semibold text-[#14110f] mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
          <section className="bg-[#faf9f6] border border-[#e8d9c0] rounded-xl p-6 sm:p-8 mt-12">
            <h2 className="text-lg font-semibold text-[#14110f] mb-2">
              Have Questions?
            </h2>
            <p className="text-gray-600">
              If you have any questions or concerns about these Terms, please contact us at{' '}
              <a 
                href="mailto:legal@doctoraulakhsfood.com" 
                className="text-[#c9a05e] font-medium hover:text-[#14110f] hover:underline transition-colors"
              >
                legal@doctoraulakhsfood.com
              </a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;