"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  CreditCard,
  FileText,
  ImageIcon,
  Mail,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingBag,
  UserCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TermsConditionsPage = () => {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="overflow-visible bg-white font-sans text-[#0B1A30]"
    >
      {/* Hero Section */}
      <section className="animate-section relative overflow-hidden bg-[#E8E3DF] py-50">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={1080}
            src="/banner.webp"
            alt="Dr. Aulakh Foods Terms and Conditions"
            className="h-full w-full object-cover opacity-40"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/70 to-transparent" />
        </div>

        <div className="relative z-10 px-4 md:px-12 lg:px-24 xl:px-40">
          <h1 className="fade-up mb-6 text-3xl font-bold uppercase leading-tight tracking-wide text-[#4D341E] md:text-5xl lg:text-5xl">
            Terms &amp; Conditions
          </h1>

          <div className="fade-up mb-8 h-1 w-24 rounded-full bg-linear-to-r from-[#4D341E] to-[#4d341e94]" />

          <div className="fade-up flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#4D341E]/70">
            <Link
              href="/"
              className="transition-colors hover:text-[#8B0008]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#4D341E]">Terms &amp; Conditions</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="animate-section bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-6 lg:px-16 lg:py-24 xl:px-24 2xl:px-52">
        <div className="fade-up mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D341E]">
            Dr. Aulakh Foods
          </span>

          <h2 className="mt-4 text-3xl font-light md:text-4xl lg:text-5xl">
            Clear terms for a{" "}
            <span className="relative font-medium italic text-[#4D341E]">
              secure shopping experience.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            These Terms and Conditions govern your access to and use of the Dr.
            Aulakh Foods website. By browsing our website, placing an order or
            using any of our services, you confirm that you have read,
            understood and agreed to these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="animate-section overflow-visible bg-white px-4 pb-20 sm:px-6 lg:px-16 lg:pb-28 xl:px-24 2xl:px-52">
        <div className="grid grid-cols-1 items-start gap-10 overflow-visible lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Sticky Sidebar */}
          <aside className="fade-up relative hidden h-fit self-start overflow-hidden rounded-3xl bg-[#f4f1ed] p-8 lg:sticky lg:top-28 lg:block">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#dce6eb] opacity-40" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E8E3DF] opacity-50" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                <Scale className="h-8 w-8 text-[#4D341E]" />
              </div>

              <h3 className="mb-4 text-2xl font-medium text-gray-900">
                Fair Usage Terms
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                These terms are intended to create a transparent, reliable and
                secure experience for every customer using the Dr. Aulakh Foods
                website.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#4D341E] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8B0008]"
              >
                Contact Us
              </Link>

              <div className="mt-8 border-t border-[#D8CEC4] pt-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B5A2B]">
                  Customer Support
                </p>

                <p className="text-sm leading-6 text-neutral-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="fade-up space-y-6">
            <PolicyCard icon={FileText} title="Acceptance of Terms">
              <p>
                By accessing, browsing or using the Dr. Aulakh Foods website,
                you agree to comply with these Terms and Conditions and all
                applicable laws and regulations.
              </p>

              <p className="mt-4">
                If you do not agree with any part of these terms, you should
                discontinue using the website and avoid placing an order through
                it.
              </p>
            </PolicyCard>

            <PolicyCard icon={UserCheck} title="Accurate Customer Information">
              <p>
                Customers must provide complete, current and accurate
                information while placing an order or submitting an enquiry.
                This may include:
              </p>

              <BulletList
                items={[
                  "Full name of the customer or recipient.",
                  "Correct mobile number and email address.",
                  "Complete shipping and billing address.",
                  "Accurate pincode and delivery instructions.",
                  "Valid payment and order-related information.",
                ]}
              />

              <p className="mt-5">
                Dr. Aulakh Foods will not be responsible for delivery delays,
                unsuccessful deliveries or other issues caused by incomplete,
                outdated or incorrect information provided by the customer.
              </p>
            </PolicyCard>

            <PolicyCard icon={ShieldCheck} title="Lawful Use of the Website">
              <p>
                The website must be used only for lawful personal or business
                purposes. Users must not attempt to misuse, damage, disrupt or
                interfere with the website or its services.
              </p>

              <BulletList
                items={[
                  "Do not use the website for fraudulent or unlawful activities.",
                  "Do not attempt to gain unauthorised access to the website, server or customer information.",
                  "Do not introduce viruses, malicious code or harmful technology.",
                  "Do not copy, misuse or reproduce website material without appropriate permission.",
                  "Do not provide false information or place fraudulent orders.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={CreditCard} title="Pricing and Payment">
              <p>
                Customers agree to accept the product price, applicable taxes,
                shipping charges and other fees displayed at the time of
                purchase.
              </p>

              <p className="mt-4">
                Prices and promotional offers may be updated from time to time.
                However, the price displayed and accepted when the order is
                confirmed will apply to that purchase, subject to payment
                verification and product availability.
              </p>

              <p className="mt-4">
                In the event of a technical error, incorrect price display or
                payment discrepancy, Dr. Aulakh Foods may contact the customer
                before processing the affected order.
              </p>
            </PolicyCard>

            <PolicyCard icon={ShoppingBag} title="Orders">
              <p>
                Placing an order through the website does not automatically
                guarantee acceptance. An order is considered confirmed only
                after it has been successfully reviewed, accepted and processed
                by Dr. Aulakh Foods.
              </p>

              <p className="mt-4">
                We may contact the customer if additional information is needed
                to verify an order, payment, delivery address or product
                requirement.
              </p>
            </PolicyCard>

            <PolicyCard icon={PackageCheck} title="Product Availability">
              <p>
                All products displayed on the website are subject to
                availability. Product stock may change without prior notice due
                to demand, production schedules or other operational reasons.
              </p>

              <p className="mt-4">
                If an ordered product becomes unavailable after an order has
                been placed, our team may contact the customer to offer an
                alternative product, replacement, revised delivery timeline or
                refund, as applicable.
              </p>
            </PolicyCard>

            <PolicyCard icon={ImageIcon} title="Product Images and Presentation">
              <p>
                Product photographs, packaging images and other visual material
                displayed on the website are provided for illustration and
                general reference purposes.
              </p>

              <p className="mt-4">
                The actual product may have minor variations in colour,
                appearance, label placement, packaging design or presentation
                because of photography, screen settings, packaging updates or
                production changes.
              </p>

              <p className="mt-4">
                Such minor visual differences do not necessarily indicate a
                change in the quality, quantity or intended characteristics of
                the product.
              </p>
            </PolicyCard>

            <PolicyCard icon={AlertCircle} title="Product Information">
              <p>
                We make reasonable efforts to ensure that product names,
                descriptions, ingredients, quantities, usage information and
                prices displayed on the website are accurate.
              </p>

              <p className="mt-4">
                However, unintentional typographical, technical or
                administrative errors may occasionally occur. Dr. Aulakh Foods
                reserves the right to correct such errors and update website
                information whenever necessary.
              </p>
            </PolicyCard>

            <PolicyCard title="Shipping, Returns and Refunds">
              <p>
                Orders placed through the website are also governed by the
                applicable Shipping, Return and Refund Policy of Dr. Aulakh
                Foods.
              </p>

              <p className="mt-4">
                Customers should review the relevant policy before completing a
                purchase to understand processing timelines, delivery
                conditions, return eligibility and refund procedures.
              </p>

              <Link
                href="/shipping-and-returns"
                className="mt-5 inline-flex font-medium text-[#8B5A2B] hover:underline"
              >
                Read Shipping &amp; Returns Policy
              </Link>
            </PolicyCard>

            <PolicyCard title="Third-Party Services">
              <p>
                The website may use third-party services, including payment
                gateways, courier companies, analytics providers and external
                website links.
              </p>

              <p className="mt-4">
                These services may operate under their own terms and policies.
                Dr. Aulakh Foods is not responsible for the independent
                practices, availability or content of third-party platforms.
              </p>
            </PolicyCard>

            <PolicyCard title="Website Availability">
              <p>
                We aim to keep the website available and functioning properly.
                However, uninterrupted access cannot be guaranteed at all
                times.
              </p>

              <p className="mt-4">
                Access may occasionally be interrupted because of maintenance,
                technical issues, server problems, security updates or
                circumstances beyond our reasonable control.
              </p>
            </PolicyCard>

            <PolicyCard title="Intellectual Property">
              <p>
                The website content, including brand names, product names,
                logos, text, graphics, photographs, designs and other material,
                belongs to Dr. Aulakh Foods or is used with appropriate
                permission.
              </p>

              <p className="mt-4">
                Website content must not be copied, reproduced, republished,
                distributed or commercially used without prior written
                permission.
              </p>
            </PolicyCard>

            <PolicyCard title="Limitation of Responsibility">
              <p>
                Dr. Aulakh Foods will make reasonable efforts to provide
                accurate information, secure transactions and reliable customer
                service.
              </p>

              <p className="mt-4">
                To the extent permitted by applicable law, we will not be
                responsible for indirect loss, website interruptions, courier
                delays, third-party service failures or issues resulting from
                the customer&apos;s improper use or storage of a product.
              </p>
            </PolicyCard>

            <PolicyCard title="Modification of Terms and Policies">
              <p>
                Dr. Aulakh Foods reserves the right to update, revise or modify
                these Terms and Conditions and other website policies whenever
                necessary.
              </p>

              <p className="mt-4">
                Changes may be made to reflect updates in our products,
                services, website operations, business practices or applicable
                requirements.
              </p>

              <p className="mt-4">
                Updated terms will be published on this page. Continued use of
                the website after an update will be considered acceptance of the
                revised terms.
              </p>
            </PolicyCard>

            <PolicyCard icon={Mail} title="Contact Us">
              <p>
                For questions about these Terms and Conditions, website usage,
                orders or related policies, please contact our customer support
                team.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-[#f4f1ed] p-6">
                <h4 className="text-lg font-medium text-gray-900">
                  Dr. Aulakh Foods
                </h4>

                <p className="mt-3 leading-relaxed text-gray-600">
                  Customer support is available through phone, WhatsApp and
                  email.
                </p>

                <p className="mt-3 text-gray-600">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918360021419"
                    className="font-medium text-[#4D341E] hover:underline"
                  >
                    +91-8360021419
                  </a>
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@draulakhfoods.com"
                    className="font-medium text-[#4D341E] hover:underline"
                  >
                    info@draulakhfoods.com
                  </a>
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.draulakhfoods.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#4D341E] hover:underline"
                  >
                    www.draulakhfoods.com
                  </a>
                </p>

                <p className="mt-2 text-gray-600">
                  <strong>Business Hours:</strong> Monday – Saturday, 9:00 AM –
                  6:00 PM
                </p>
              </div>

              <p className="mt-6 font-medium text-gray-900">
                By continuing to use the Dr. Aulakh Foods website, you confirm
                your acceptance of these Terms and Conditions.
              </p>
            </PolicyCard>
          </div>
        </div>
      </section>
    </main>
  );
};

const PolicyCard = ({ title, children, icon: Icon }) => {
  return (
    <article className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:border-[#4D341E] md:p-8">
      <div className="absolute bottom-0 left-8 h-0.5 w-0 bg-[#4D341E] transition-all duration-500 group-hover:w-20" />

      <div className="mb-4 flex items-start gap-4">
        {Icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f1ed]">
            <Icon className="h-5 w-5 text-[#4D341E]" />
          </div>
        )}

        <h2 className="text-2xl font-light text-gray-900 md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="text-sm leading-relaxed text-gray-600 md:text-base">
        {children}
      </div>
    </article>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start text-gray-600">
          <span className="mr-3 mt-3 h-px w-5 shrink-0 bg-[#4D341E]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default TermsConditionsPage;

