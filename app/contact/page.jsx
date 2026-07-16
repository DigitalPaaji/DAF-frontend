"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import FaqSection from "../components/FaqSection";

const contactDetails = [
  {
    id: "01",
    title: "Call Us",
    value: "+91-8360021419",
    description:
      "Call our customer support team for product information, order assistance and general enquiries.",
    icon: FaPhoneAlt,
    href: "tel:+918360021419",
  },
  {
    id: "02",
    title: "Email Us",
    value: "info@draulakhfoods.com",
    description:
      "Send us an email for product enquiries, orders, partnerships and customer support.",
    icon: FaEnvelope,
    href: "mailto:info@draulakhfoods.com",
  },
  {
    id: "03",
    title: "Visit Our Website",
    value: "www.draulakhfoods.com",
    description:
      "Explore Dr. Aulakh Foods and discover our premium Tea Masala collection online.",
    icon: FaGlobe,
    href: "https://www.draulakhfoods.com",
    external: true,
  },
  {
    id: "04",
    title: "Business Hours",
    value: "Monday – Saturday",
    description: "9:00 AM – 6:00 PM",
    icon: FaClock,
  },
];

const enquiryTypes = [
  "Product Enquiry",
  "Order Support",
  "Bulk Order",
  "Distributor Enquiry",
  "Commercial Enquiry",
  "General Enquiry",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Connect your backend API here.
      //
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (!response.ok) {
      //   throw new Error("Unable to submit enquiry");
      // }

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FDFBF7] font-sans text-[#2D2926]">
      {/* Hero Banner */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden px-4 py-32 md:min-h-[500px] md:px-12 xl:px-72">
        <div className="absolute inset-0">
          <Image
            src="/Images/pickle.webp"
            alt="Contact Dr. Aulakh Foods"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/75 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#8B0008]">
            Contact Dr. Aulakh Foods
          </p>

          <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-[#4D341E] sm:text-5xl lg:text-6xl">
            We&apos;re here to
            <span className="block italic text-[#8B5A2B]">assist you.</span>
          </h1>

          <p className="mb-8 max-w-xl text-sm leading-7 text-[#4D341E]/75 md:text-base">
            Contact our customer support team for product information, order
            assistance, bulk requirements or general enquiries about our
            premium Tea Masala collection.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D341E]/70">
            <Link href="/" className="transition-colors hover:text-[#8B0008]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#8B0008]">Contact Us</span>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="px-4 py-20 md:px-12 md:py-28 xl:px-72">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]"
          >
            Customer Support
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mb-6 font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl xl:text-5xl"
          >
            Support for every
            <span className="block italic text-[#8B5A2B]">
              Tea Masala enquiry.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mx-auto max-w-2xl text-sm leading-7 text-neutral-600 md:text-base"
          >
            Our customer support team is available through phone, WhatsApp and
            email. Reach out to us for product details, orders, bulk
            requirements or other assistance.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="mb-20 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-[#DDD4C8] bg-[#DDD4C8] md:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <motion.article
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group h-full min-h-[270px] bg-white p-7 transition-colors duration-500 hover:bg-[#F6F0E8] md:p-8"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8E3DF] text-[#8B5A2B] transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon size={17} />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A89A8B]">
                    {item.id}
                  </span>
                </div>

                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B0008]">
                  {item.title}
                </p>

                <h3 className="mb-4 break-words font-serif text-xl text-[#2D2926]">
                  {item.value}
                </h3>

                <p className="text-sm leading-7 text-neutral-500">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#8B5A2B] transition-all duration-500 group-hover:w-20" />
              </motion.article>
            );

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              <div key={item.id}>{content}</div>
            );
          })}
        </div>

        {/* Form Section */}
        <section className="relative overflow-hidden rounded-[30px] bg-[#2F2118] text-white md:rounded-[42px]">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#B9832B]/25 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-[#8B0008]/25 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Form Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-7 md:p-12 lg:p-14"
            >
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8C98D]">
                  Send An Enquiry
                </p>

                <h2 className="mb-6 font-serif text-3xl leading-tight md:text-4xl xl:text-5xl">
                  Tell us how we
                  <span className="block italic text-[#E8C98D]">
                    can assist you.
                  </span>
                </h2>

                <p className="max-w-lg text-sm leading-7 text-white/65 md:text-base">
                  Complete the form with your contact details and enquiry. The
                  Dr. Aulakh Foods customer support team will get back to you as
                  soon as possible.
                </p>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Customer Support Hours
                </p>

                <div className="mb-6">
                  <p className="font-serif text-xl text-white">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    9:00 AM – 6:00 PM
                  </p>
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Prefer WhatsApp?
                </p>

                <a
                  href="https://wa.me/918360021419?text=Hello%20Dr.%20Aulakh%20Foods,%20I%20would%20like%20to%20know%20more%20about%20your%20Tea%20Masala%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-[#E8C98D]"
                >
                  <FaWhatsapp size={19} />
                  Chat with our support team
                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="m-3 rounded-[24px] bg-[#FDFBF7] p-6 text-[#2D2926] sm:m-5 sm:p-8 md:p-10 lg:m-7 lg:p-12"
            >
              {submitted && (
                <div className="mb-7 rounded-xl border border-[#7A8B2E]/25 bg-[#7A8B2E]/10 px-5 py-4 text-sm leading-6 text-[#56641F]">
                  Thank you for contacting Dr. Aulakh Foods. Your enquiry has
                  been received, and our customer support team will get back to
                  you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    required
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    required
                  />

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
                    >
                      Enquiry Type
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-700 outline-none transition-all focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
                    >
                      <option value="">Select enquiry type</option>

                      {enquiryTypes.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#2F2118] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#8B5A2B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending Enquiry..." : "Send Enquiry"}

                  {!loading && (
                    <FaArrowRight
                      size={11}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-neutral-400">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#8B5A2B] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </section>

<FaqSection/>
      {/* Closing Section */}
      <section className="border-t border-[#DDD4C8] bg-[#E8E3DF] px-4 py-20 text-center md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
            Dr. Aulakh Foods
          </p>

          <h2 className="mb-6 font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl">
            Your questions matter to us.
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Our customer support team is available through phone, WhatsApp and
            email from Monday to Saturday, between 9:00 AM and 6:00 PM.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+918360021419"
              className="inline-flex items-center gap-3 rounded-full bg-[#4D341E] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B0008]"
            >
              <FaPhoneAlt size={13} />
              +91-8360021419
            </a>

            <a
              href="mailto:info@draulakhfoods.com"
              className="inline-flex items-center gap-3 rounded-full border border-[#4D341E]/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#4D341E] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <FaEnvelope size={13} />
              info@draulakhfoods.com
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

const FormField = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
      />
    </div>
  );
};

export default ContactPage;


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaClock,
//   FaWhatsapp,
//   FaArrowRight,
// } from "react-icons/fa";

// const contactDetails = [
//   {
//     id: "01",
//     title: "Visit Us",
//     value: "Business Address",
//     description:
//       "Add the complete office, warehouse or registered business address here.",
//     icon: FaMapMarkerAlt,
//   },
//   {
//     id: "02",
//     title: "Email Us",
//     value: "hello@yourbrand.com",
//     description:
//       "For product enquiries, order assistance, partnerships and general support.",
//     icon: FaEnvelope,
//     href: "mailto:hello@yourbrand.com",
//   },
//   {
//     id: "03",
//     title: "Call Us",
//     value: "+91 98765 43210",
//     description:
//       "Speak with our team for product information and order-related assistance.",
//     icon: FaPhoneAlt,
//     href: "tel:+919876543210",
//   },
//   {
//     id: "04",
//     title: "Working Hours",
//     value: "Monday – Saturday",
//     description: "9:00 AM to 6:00 PM IST",
//     icon: FaClock,
//   },
// ];

// const enquiryTypes = [
//   "Product Enquiry",
//   "Order Support",
//   "Bulk Order",
//   "Distributor Enquiry",
//   "Collaboration",
//   "General Enquiry",
// ];

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       // Connect your backend API here.
//       // Example:
//       //
//       // const response = await fetch("/api/contact", {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify(formData),
//       // });
//       //
//       // if (!response.ok) {
//       //   throw new Error("Unable to submit enquiry");
//       // }

//       await new Promise((resolve) => setTimeout(resolve, 900));

//       setSubmitted(true);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });

//       setTimeout(() => {
//         setSubmitted(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Contact form error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#FDFBF7] font-sans text-[#2D2926]">
//       {/* Hero Banner */}
//       <section className="relative flex min-h-[420px] items-center overflow-hidden px-4 py-32 md:min-h-[500px] md:px-12 xl:px-72">
//         <div className="absolute inset-0">
//           <Image
//             src="/Images/pickle.webp"
//             alt="Contact The Alchemist’s Pantry"
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/75 to-transparent" /> */}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 max-w-2xl"
//         >
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#8B0008]">
//             Get In Touch
//           </p>

//           <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-[#4D341E] sm:text-5xl lg:text-6xl">
//             Let&apos;s start a
//             <span className="block italic text-[#8B5A2B]">
//               conversation.
//             </span>
//           </h1>

//           <p className="mb-8 max-w-xl text-sm leading-7 text-[#4D341E]/75 md:text-base">
//             Whether you need product assistance, order support, bulk pricing or
//             partnership information, our team is here to help.
//           </p>

//           <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D341E]/70">
//             <Link href="/" className="transition-colors hover:text-[#8B0008]">
//               Home
//             </Link>

//             <span>/</span>
//             <span className="text-[#8B0008]">Contact Us</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* Intro */}
//       <section className="px-4 py-20 md:px-12 md:py-28 xl:px-72">
//         <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]"
//           >
//             We&apos;re Here To Help
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.08 }}
//             className="mb-6 font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl xl:text-5xl"
//           >
//             Support for every step of
//             <span className="block italic text-[#8B5A2B]">
//               your pantry journey.
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.14 }}
//             className="mx-auto max-w-2xl text-sm leading-7 text-neutral-600 md:text-base"
//           >
//             Send us your enquiry and our team will assist you with product
//             details, orders, shipping, partnerships and other requirements.
//           </motion.p>
//         </div>

//         {/* Contact Cards */}
//         <div className="mb-20 grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-[#DDD4C8] bg-[#DDD4C8] md:grid-cols-2 xl:grid-cols-4">
//           {contactDetails.map((item, index) => {
//             const Icon = item.icon;

//             const content = (
//               <motion.article
//                 initial={{ opacity: 0, y: 22 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.07 }}
//                 className="group h-full min-h-[270px] bg-white p-7 transition-colors duration-500 hover:bg-[#F6F0E8] md:p-8"
//               >
//                 <div className="mb-10 flex items-center justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8E3DF] text-[#8B5A2B] transition-transform duration-500 group-hover:-translate-y-1">
//                     <Icon size={17} />
//                   </div>

//                   <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A89A8B]">
//                     {item.id}
//                   </span>
//                 </div>

//                 <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B0008]">
//                   {item.title}
//                 </p>

//                 <h3 className="mb-4 font-serif text-xl text-[#2D2926]">
//                   {item.value}
//                 </h3>

//                 <p className="text-sm leading-7 text-neutral-500">
//                   {item.description}
//                 </p>

//                 <div className="mt-7 h-px w-10 bg-[#8B5A2B] transition-all duration-500 group-hover:w-20" />
//               </motion.article>
//             );

//             return item.href ? (
//               <a key={item.id} href={item.href} className="block h-full">
//                 {content}
//               </a>
//             ) : (
//               <div key={item.id}>{content}</div>
//             );
//           })}
//         </div>

//         {/* Form Section */}
//         <section className="relative overflow-hidden rounded-[30px] bg-[#2F2118] text-white md:rounded-[42px]">
//           <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#B9832B]/25 blur-[110px]" />
//           <div className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-[#8B0008]/25 blur-[100px]" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
//             {/* Form Intro */}
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="flex flex-col justify-between p-7 md:p-12 lg:p-14"
//             >
//               <div>
//                 <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8C98D]">
//                   Send An Enquiry
//                 </p>

//                 <h2 className="mb-6 font-serif text-3xl leading-tight md:text-4xl xl:text-5xl">
//                   Tell us how we
//                   <span className="block italic text-[#E8C98D]">
//                     can assist you.
//                   </span>
//                 </h2>

//                 <p className="max-w-lg text-sm leading-7 text-white/65 md:text-base">
//                   Complete the form with your contact details and enquiry. Our
//                   team will get back to you as soon as possible.
//                 </p>
//               </div>

//               <div className="mt-12 border-t border-white/10 pt-8">
//                 <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
//                   Prefer WhatsApp?
//                 </p>

//                 <a
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-3 text-sm font-semibold text-[#E8C98D]"
//                 >
//                   <FaWhatsapp size={19} />
//                   Chat with our team
//                   <FaArrowRight
//                     size={11}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="m-3 rounded-[24px] bg-[#FDFBF7] p-6 text-[#2D2926] sm:m-5 sm:p-8 md:p-10 lg:m-7 lg:p-12"
//             >
//               {submitted && (
//                 <div className="mb-7 rounded-xl border border-[#7A8B2E]/25 bg-[#7A8B2E]/10 px-5 py-4 text-sm leading-6 text-[#56641F]">
//                   Thank you for contacting us. Your enquiry has been received,
//                   and our team will get back to you shortly.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                   <FormField
//                     label="Full Name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     placeholder="Enter your full name"
//                     onChange={handleChange}
//                     required
//                   />

//                   <FormField
//                     label="Email Address"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     placeholder="Enter your email"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                   <FormField
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     placeholder="Enter your phone number"
//                     onChange={handleChange}
//                     required
//                   />

//                   <div className="flex flex-col gap-2">
//                     <label
//                       htmlFor="subject"
//                       className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
//                     >
//                       Enquiry Type
//                     </label>

//                     <select
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full appearance-none rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-700 outline-none transition-all focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
//                     >
//                       <option value="">Select enquiry type</option>

//                       {enquiryTypes.map((item) => (
//                         <option key={item} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="message"
//                     className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
//                   >
//                     Message
//                   </label>

//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={6}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     placeholder="Tell us how we can help..."
//                     className="w-full resize-none rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#2F2118] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#8B5A2B] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {loading ? "Sending Enquiry..." : "Send Enquiry"}

//                   {!loading && (
//                     <FaArrowRight
//                       size={11}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   )}
//                 </button>

//                 <p className="text-center text-xs leading-5 text-neutral-400">
//                   By submitting this form, you agree to our{" "}
//                   <Link
//                     href="/privacy-policy"
//                     className="text-[#8B5A2B] underline underline-offset-4"
//                   >
//                     Privacy Policy
//                   </Link>
//                   .
//                 </p>
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </section>

//       {/* Closing Section */}
//       <section className="border-t border-[#DDD4C8] bg-[#E8E3DF] px-4 py-20 text-center md:px-12 md:py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mx-auto max-w-3xl"
//         >
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
//             The Alchemist&apos;s Pantry
//           </p>

//           <h2 className="mb-6 font-serif text-3xl leading-tight text-[#2D2926] md:text-4xl">
//             Your questions matter to us.
//           </h2>

//           <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
//             We believe that every great experience begins with attentive
//             support. Reach out to us and let our team help you find the right
//             products and information.
//           </p>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// const FormField = ({
//   label,
//   name,
//   type,
//   value,
//   placeholder,
//   onChange,
//   required,
// }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       <label
//         htmlFor={name}
//         className="pl-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500"
//       >
//         {label}
//       </label>

//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         required={required}
//         placeholder={placeholder}
//         className="w-full rounded-xl border border-[#DDD4C8] bg-white px-4 py-4 text-sm text-neutral-800 outline-none transition-all placeholder:text-neutral-400 focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B]"
//       />
//     </div>
//   );
// };

// export default ContactPage;