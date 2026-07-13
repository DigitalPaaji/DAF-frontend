"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Cookie, Lock, Mail, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicyPage = () => {
  const containerRef = useRef(null);


  return (
    <div ref={containerRef} className="bg-white text-[#0B1A30] overflow-visible font-sans">
      {/* Hero Section */}
      <section className="animate-section relative overflow-hidden py-50 bg-[#E8E3DF] not-first:">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={1080}
            src="/banner.webp"
            alt="Spareon India Privacy Policy"
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>

        <div className="px-4 md:px-12 lg:px-24 xl:px-40 relative z-10">
          <h1 className="fade-up text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-[#4D341E] uppercase tracking-wide">
            Terms & Conditions
          </h1>

          <div className="fade-up w-24 h-1 bg-linear-to-r from-[#4D341E] to-[#4d341e94] rounded-full mb-8"></div>

          <div className="fade-up flex items-center gap-2 text-sm text-white/80 font-medium tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#4D341E]">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D341E] px-4 py-2 mb-4">
            Effective Date: June 2026
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mt-4">
            Protecting Your{" "}
            <span className="relative italic font-medium text-[#4D341E]">
              Privacy
            </span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg leading-relaxed">
            At Spareon India, we value your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, store, and protect your
            information when you visit our website or contact us regarding our
            products and services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
<section className="animate-section px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 pb-20 lg:pb-28 bg-white overflow-visible">
  <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start overflow-visible">
    
    <aside className="fade-up hidden lg:block lg:sticky lg:top-28 self-start h-fit bg-[#f4f7f9] rounded-3xl p-8 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-48 h-48 bg-[#dce6eb] rounded-full -mr-10 -mt-10 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c8dbe4] rounded-full -mb-20 -ml-20 opacity-30"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#4D341E]" />
              </div>

              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Privacy Commitment
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                We handle your information with transparency, professionalism,
                and care while providing reliable service and support.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full bg-[#4D341E] text-white text-sm font-medium hover:bg-[#0A162B] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <div className="fade-up space-y-6">
            <PolicyCard icon={FileText} title="Information We Collect">
              <p>We may collect the following information when you interact with our website:</p>
              <BulletList
                items={[
                  "Name",
                  "Company Name",
                  "Email Address",
                  "Phone Number",
                  "Business Address",
                  "Product or Service Enquiries",
                  "Any information you voluntarily provide through contact or enquiry forms",
                ]}
              />

              <p className="mt-6">
                Additionally, our website may automatically collect technical information such as:
              </p>
              <BulletList
                items={[
                  "IP Address",
                  "Browser Type",
                  "Device Information",
                  "Pages Visited",
                  "Date and Time of Visit",
                  "Cookies and Analytics Data",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={Shield} title="How We Use Your Information">
              <p>The information we collect is used to:</p>
              <BulletList
                items={[
                  "Respond to your enquiries and product requests.",
                  "Provide quotations and customer support.",
                  "Process business communications.",
                  "Improve our products, services, and website experience.",
                  "Send important updates regarding our products and services where applicable.",
                  "Maintain internal business records.",
                ]}
              />
              <p className="mt-5 font-medium text-gray-900">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </PolicyCard>

            <PolicyCard icon={Cookie} title="Cookies">
              <p>
                Our website may use cookies and similar technologies to enhance your browsing
                experience, understand website traffic, and improve website performance. You may
                disable cookies through your browser settings if you prefer.
              </p>
            </PolicyCard>

            <PolicyCard icon={Lock} title="Information Security">
              <p>
                We implement appropriate technical and organizational measures to safeguard your
                personal information from unauthorized access, misuse, disclosure, alteration, or
                destruction.
              </p>
              <p className="mt-4">
                While we strive to protect your information, no method of internet transmission or
                electronic storage is completely secure.
              </p>
            </PolicyCard>

            <PolicyCard title="Third-Party Services">
              <p>
                Our website may contain links to third-party websites or social media platforms. We
                are not responsible for the privacy practices or content of those external websites.
                We encourage users to review their respective privacy policies before sharing
                personal information.
              </p>
            </PolicyCard>

            <PolicyCard title="Business Communications">
              <p>
                By submitting your information through our website, you agree that Spareon India may
                contact you regarding your enquiry, requested products, technical support, quotations,
                or other relevant business communications.
              </p>
            </PolicyCard>

            <PolicyCard title="Data Retention">
              <p>
                We retain your information only for as long as necessary to provide our services,
                fulfill business obligations, comply with legal requirements, or resolve disputes.
              </p>
            </PolicyCard>

            <PolicyCard title="Your Rights">
              <p>Depending on applicable laws, you may have the right to:</p>
              <BulletList
                items={[
                  "Request access to your personal information.",
                  "Request correction of inaccurate information.",
                  "Request deletion of your personal data where legally permitted.",
                  "Withdraw consent for future communications.",
                ]}
              />
              <p className="mt-5">
                To exercise these rights, please contact us using the details below.
              </p>
            </PolicyCard>

            <PolicyCard title="Children's Privacy">
              <p>
                Our products and services are intended for businesses and professionals in the rice
                milling industry. We do not knowingly collect personal information from individuals
                under the age of 18.
              </p>
            </PolicyCard>

            <PolicyCard title="Changes to This Privacy Policy">
              <p>
                Spareon India reserves the right to update or modify this Privacy Policy at any time.
                Any changes will be posted on this page with the updated effective date.
              </p>
            </PolicyCard>

            <PolicyCard icon={Mail} title="Contact Us">
              <p>
                If you have any questions regarding this Privacy Policy or how your information is
                handled, please contact us:
              </p>

              <div className="mt-6 bg-[#f4f7f9] rounded-2xl p-6 border border-gray-100">
                <h4 className="text-lg font-medium text-gray-900">Spareon India</h4>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  Shop No. 77, Old Grain Market, Near Novality Road, Karnal – 132001,
                  Haryana, India
                </p>

                <p className="text-gray-600 mt-3">
                  <strong>Phone:</strong> +91 74160 00071, +91 99961 00671
                </p>

                <p className="text-gray-600 mt-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:yeeson.precision@gmail.com"
                    className="text-[#4D341E] font-medium hover:underline"
                  >
                    yeeson.precision@gmail.com
                  </a>
                </p>
              </div>

              <p className="mt-6 font-medium text-gray-900">
                We are committed to protecting your privacy while providing reliable products,
                professional service, and long-term support for the rice milling industry.
              </p>
            </PolicyCard>
          </div>
        </div>
      </section>
    </div>
  );
};

const PolicyCard = ({ title, children, icon: Icon }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#4D341E] transition-all duration-500 group">
      <div className="absolute bottom-0 left-8 w-0 h-0.5 bg-[#4D341E] group-hover:w-20 transition-all duration-500" />

      <div className="flex items-start gap-4 mb-4">
        {Icon && (
          <div className="w-11 h-11 rounded-full bg-[#f4f7f9] flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-[#4D341E]" />
          </div>
        )}

        <h2 className="text-2xl md:text-3xl font-light text-gray-900">
          {title}
        </h2>
      </div>

      <div className="text-gray-600 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-gray-600">
          <span className="mr-3 mt-3 h-[1px] w-5 bg-[#4D341E] shrink-0"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default PrivacyPolicyPage;