import React from 'react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "March 17, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you place an order, subscribe to our newsletter, or contact us. This may include your name, email address, shipping address, billing address, and payment details."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to fulfill your orders for our teas and spices, communicate with you about your purchase, improve our website and customer service, and (with your consent) send you promotional offers and updates."
    },
    {
      title: "3. Cookies and Tracking",
      content: "Our website uses cookies to enhance your browsing experience, remember your cart items, and analyze site traffic. You can choose to disable cookies through your browser settings, though some features of our site may not function properly as a result."
    },
    {
      title: "4. Sharing Your Information",
      content: "We do not sell your personal data. We only share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering your orders (e.g., shipping carriers)."
    },
    {
      title: "5. Data Security",
      content: "We implement standard security measures to protect your personal information. However, please remember that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "6. Your Privacy Rights",
      content: "Depending on your location, you have the right to access, update, or delete the personal information we hold about you. If you wish to exercise any of these rights, please reach out to us."
    }
  ];

  return (
    <div className="min-h-screen  my-10 bg-white text-gray-800 py-16 px-5 sm:px-6 lg:px-8 font-sans selection:bg-[#c9a05e] selection:text-white">
      <div className="container mx-auto">
        
        
        <div className="mb-10 border-b border-[#c9a05e]/30 pb-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#14110f] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
          At Doctor Aulakh's Food, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or make a purchase.
        </p>
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-serif font-semibold text-[#14110f] mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Contact Block */}
          <section className="bg-[#faf9f6] border border-[#e8d9c0] rounded-xl p-6 sm:p-8 mt-12">
            <h2 className="text-lg font-serif font-semibold text-[#14110f] mb-2">
              Privacy Inquiries
            </h2>
            <p className="text-gray-600">
              If you have any questions about how we handle your data, or if you wish to exercise your privacy rights, please contact us at{' '}
              <a 
                href="mailto:privacy@doctoraulakhsfood.com" 
                className="text-[#c9a05e] font-medium hover:text-[#14110f] hover:underline transition-colors"
              >
                privacy@doctoraulakhsfood.com
              </a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;