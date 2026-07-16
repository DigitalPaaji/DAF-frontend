"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Cookie,
  Lock,
  Mail,
  FileText,
  CreditCard,
  Truck,
  Headphones,
  Database,
  UserCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicyPage = () => {
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
            alt="Dr. Aulakh Foods Privacy Policy"
            className="h-full w-full object-cover opacity-40"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/70 to-transparent" />
        </div>

        <div className="relative z-10 px-4 md:px-12 lg:px-24 xl:px-40">
          <h1 className="fade-up mb-6 text-3xl font-bold uppercase leading-tight tracking-wide text-[#4D341E] md:text-5xl lg:text-5xl">
            Privacy Policy
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

            <span className="text-[#4D341E]">Privacy Policy</span>
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
            Protecting your{" "}
            <span className="relative font-medium italic text-[#4D341E]">
              personal information.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Dr. Aulakh Foods values your privacy and is committed to handling
            your personal information responsibly. This Privacy Policy explains
            how we collect, use, protect and share information when you visit
            our website, place an order or contact our customer support team.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="animate-section overflow-visible bg-white px-4 pb-20 sm:px-6 lg:px-16 lg:pb-28 xl:px-24 2xl:px-52">
        <div className="grid grid-cols-1 items-start gap-10 overflow-visible lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Sticky Sidebar */}
          <aside className="fade-up relative hidden h-fit self-start overflow-hidden rounded-3xl bg-[#f4f7f9] p-8 lg:sticky lg:top-28 lg:block">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#dce6eb] opacity-40" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E8E3DF] opacity-50" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                <Shield className="h-8 w-8 text-[#4D341E]" />
              </div>

              <h3 className="mb-4 text-2xl font-medium text-gray-900">
                Privacy Commitment
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                We collect only the information required to process orders,
                provide support, improve your experience and keep you informed
                about your purchases.
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
            <PolicyCard icon={FileText} title="Information We Collect">
              <p>
                We may collect personal information when you place an order,
                create an account, submit an enquiry, contact customer support
                or otherwise interact with the Dr. Aulakh Foods website.
              </p>

              <BulletList
                items={[
                  "Your full name and recipient name.",
                  "Email address and mobile number.",
                  "Shipping and billing address.",
                  "Order details and purchase history.",
                  "Payment status and transaction reference information.",
                  "Messages, feedback and information submitted through our contact forms.",
                ]}
              />

              <p className="mt-6">
                Our website may also automatically collect limited technical
                information required to operate and improve the website.
              </p>

              <BulletList
                items={[
                  "IP address and approximate location.",
                  "Browser, device and operating-system information.",
                  "Pages visited and time spent on the website.",
                  "Referral sources, cookies and basic analytics information.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={Shield} title="How We Use Your Information">
              <p>
                Dr. Aulakh Foods collects and uses customer information only for
                legitimate business and service-related purposes, including:
              </p>

              <BulletList
                items={[
                  "Processing, confirming and fulfilling customer orders.",
                  "Verifying payments and managing transaction records.",
                  "Providing order confirmations, dispatch details and delivery updates.",
                  "Responding to customer questions, complaints and support requests.",
                  "Managing eligible returns, replacements and refunds.",
                  "Improving our website, products and overall customer experience.",
                  "Preventing fraudulent transactions and protecting website security.",
                  "Complying with applicable legal and regulatory requirements.",
                ]}
              />

              <p className="mt-5 font-medium text-gray-900">
                We do not sell, rent or trade customer information for
                advertising or unrelated commercial purposes.
              </p>
            </PolicyCard>

            <PolicyCard icon={CreditCard} title="Payment Information">
              <p>
                Payments made through our website are processed using trusted
                third-party payment gateways. Online transactions are protected
                using industry-standard security and SSL encryption.
              </p>

              <p className="mt-4">
                Dr. Aulakh Foods does not directly store sensitive payment
                credentials such as complete card numbers, CVV codes, UPI PINs,
                banking passwords or one-time passwords.
              </p>

              <p className="mt-4">
                Payment providers may collect and process information according
                to their own privacy policies and security procedures.
              </p>
            </PolicyCard>

            <PolicyCard icon={Truck} title="Shipping and Delivery Partners">
              <p>
                We may share essential customer details with courier and
                logistics partners to process and deliver orders.
              </p>

              <p className="mt-4">
                This information may include the recipient&apos;s name, delivery
                address, mobile number, order reference and other details
                required to complete delivery or provide shipment updates.
              </p>

              <p className="mt-4">
                Only information reasonably required for order fulfilment and
                delivery is shared with these service providers.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={Headphones}
              title="Customer Support and Communication"
            >
              <p>
                We may use your contact details to communicate with you
                regarding:
              </p>

              <BulletList
                items={[
                  "Order confirmations and payment status.",
                  "Product availability and order processing.",
                  "Dispatch, tracking and delivery updates.",
                  "Return, replacement or refund requests.",
                  "Customer service enquiries and complaint resolution.",
                  "Important updates related to your account, purchase or requested service.",
                ]}
              />

              <p className="mt-5">
                By submitting your contact details, you authorise Dr. Aulakh
                Foods to contact you through phone, email, SMS or WhatsApp when
                reasonably necessary to assist with your order or enquiry.
              </p>
            </PolicyCard>

            <PolicyCard title="Sharing of Customer Information">
              <p>
                We do not sell or unnecessarily share customer information with
                third parties. Information may be shared only when required for:
              </p>

              <BulletList
                items={[
                  "Secure payment processing.",
                  "Order packing, shipping and delivery.",
                  "Website hosting, analytics and technical operations.",
                  "Customer support and communication services.",
                  "Fraud prevention and transaction verification.",
                  "Compliance with applicable laws, court orders or government requests.",
                ]}
              />

              <p className="mt-5">
                Service providers are expected to use customer information only
                for the specific services they provide to Dr. Aulakh Foods.
              </p>
            </PolicyCard>

            <PolicyCard icon={Cookie} title="Cookies and Website Analytics">
              <p>
                Our website may use cookies and similar technologies to remember
                preferences, maintain shopping-cart functionality, improve
                website performance and understand how visitors interact with
                our pages.
              </p>

              <p className="mt-4">
                Cookies may also help us identify technical problems, measure
                website traffic and provide a smoother browsing and checkout
                experience.
              </p>

              <p className="mt-4">
                You may restrict or disable cookies through your browser
                settings. However, certain website functions may not operate
                correctly if essential cookies are disabled.
              </p>
            </PolicyCard>

            <PolicyCard icon={Lock} title="Information Security">
              <p>
                We use reasonable technical and organisational safeguards to
                protect customer information from unauthorised access, misuse,
                loss, alteration or disclosure.
              </p>

              <BulletList
                items={[
                  "SSL encryption for secure website communication.",
                  "Trusted payment gateways for online transactions.",
                  "Restricted access to customer and order information.",
                  "Reasonable administrative and technical security procedures.",
                  "Regular monitoring and maintenance of website systems.",
                ]}
              />

              <p className="mt-5">
                Although we take appropriate precautions, no online service,
                electronic storage system or internet transmission can be
                guaranteed to be completely secure.
              </p>
            </PolicyCard>

            <PolicyCard icon={Database} title="Data Retention">
              <p>
                Customer information is retained only for as long as reasonably
                necessary to process orders, provide customer support, maintain
                transaction records and comply with legal, accounting or
                regulatory requirements.
              </p>

              <p className="mt-4">
                Information that is no longer required may be securely deleted,
                anonymised or retained only where required by applicable law.
              </p>
            </PolicyCard>

            <PolicyCard icon={UserCheck} title="Your Privacy Rights">
              <p>
                Subject to applicable laws, customers may contact us to request:
              </p>

              <BulletList
                items={[
                  "Access to personal information held about them.",
                  "Correction of inaccurate or incomplete information.",
                  "Updates to their contact or delivery details.",
                  "Deletion of information where retention is not legally required.",
                  "Withdrawal from optional promotional communications.",
                  "Information about how their personal data is being used.",
                ]}
              />

              <p className="mt-5">
                We may request reasonable verification before processing a
                privacy-related request to protect customer information from
                unauthorised access.
              </p>
            </PolicyCard>

            <PolicyCard title="Third-Party Websites">
              <p>
                The Dr. Aulakh Foods website may contain links to payment
                providers, courier platforms, social-media pages or other
                third-party websites.
              </p>

              <p className="mt-4">
                These external platforms have their own privacy policies and
                practices. Dr. Aulakh Foods is not responsible for the content,
                security or privacy practices of independently operated
                third-party websites.
              </p>
            </PolicyCard>

            <PolicyCard title="Children’s Privacy">
              <p>
                Our website and products are intended for general customers and
                are not specifically directed towards children. We do not
                knowingly collect personal information directly from children
                without appropriate permission.
              </p>

              <p className="mt-4">
                Orders should be placed by adults or under the supervision of a
                parent or legal guardian.
              </p>
            </PolicyCard>

            <PolicyCard title="Legal Compliance">
              <p>
                Customer information may be disclosed where reasonably required
                to comply with applicable laws, legal proceedings, court orders,
                regulatory requirements or valid requests from authorised
                government bodies.
              </p>

              <p className="mt-4">
                We may also use or disclose information where necessary to
                investigate fraud, protect our legal rights or maintain the
                safety and security of customers and website users.
              </p>
            </PolicyCard>

            <PolicyCard title="Changes to This Privacy Policy">
              <p>
                Dr. Aulakh Foods reserves the right to update or modify this
                Privacy Policy whenever required to reflect changes in our
                website, services, operational practices or legal obligations.
              </p>

              <p className="mt-4">
                Updated terms will be published on this page. Customers are
                encouraged to review this Privacy Policy periodically to remain
                informed about how their information is handled.
              </p>
            </PolicyCard>

            <PolicyCard icon={Mail} title="Contact Us">
              <p>
                If you have questions about this Privacy Policy, wish to update
                your personal information or want to submit a privacy-related
                request, please contact Dr. Aulakh Foods.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-[#f4f7f9] p-6">
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
                Dr. Aulakh Foods is committed to protecting your privacy while
                providing secure ordering, reliable delivery and responsive
                customer support.
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
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f7f9]">
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

export default PrivacyPolicyPage;

