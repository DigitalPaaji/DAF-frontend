"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightLeft,
  Box,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Truck,
  XCircle,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShippingReturnsPolicyPage = () => {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="overflow-visible bg-white font-sans text-[#312A26]"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#E8E3DF] px-4 py-36 md:px-12 md:py-44 xl:px-72">
        <div className="absolute inset-0">
          <Image
            src="/Images/banner.webp"
            alt="Shipping and Returns Policy"
            fill
            priority
            className="object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
            Customer Support
          </p>

          <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-[#4D341E] sm:text-5xl lg:text-6xl">
            Shipping &amp;
            <span className="block italic text-[#8B5A2B]">
              Returns Policy
            </span>
          </h1>

          <div className="mb-8 h-px w-24 bg-[#8B5A2B]" />

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4D341E]/65">
            <Link
              href="/"
              className="transition-colors hover:text-[#8B0008]"
            >
              Home
            </Link>

            <span>/</span>
            <span className="text-[#8B0008]">
              Shipping &amp; Returns
            </span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-b from-white to-[#FDFBF7] px-4 py-16 sm:px-6 lg:px-16 lg:py-24 xl:px-24 2xl:px-52">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
            Effective Date: July 2026
          </span>

          <h2 className="mt-4 font-serif text-3xl font-light text-[#2D2926] md:text-4xl lg:text-5xl">
            Simple delivery and
            <span className="italic font-medium text-[#8B5A2B]">
              {" "}hassle-free support.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
            We aim to process every order carefully, deliver it securely and
            provide clear assistance if an item arrives damaged, incorrect or
            unsuitable.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="overflow-visible bg-white px-4 pb-20 sm:px-6 lg:px-16 lg:pb-28 xl:px-24 2xl:px-52">
        <div className="grid grid-cols-1 items-start gap-10 overflow-visible lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Sticky Sidebar */}
          <aside className="relative hidden h-fit self-start overflow-hidden rounded-3xl bg-[#F4F1ED] p-8 lg:sticky lg:top-28 lg:block">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#DCCFC3]/60" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E8E3DF]/70" />

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                <PackageCheck className="h-8 w-8 text-[#8B5A2B]" />
              </div>

              <h3 className="mb-4 font-serif text-2xl text-[#2D2926]">
                Order Assistance
              </h3>

              <p className="text-sm leading-7 text-neutral-600">
                Our team is available to help with delivery updates, damaged
                items, incorrect orders, returns and refund-related questions.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#3A2A21] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8B5A2B]"
              >
                Contact Support
              </Link>

              <div className="mt-8 border-t border-[#D8CEC4] pt-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B5A2B]">
                  Support Hours
                </p>

                <p className="text-sm leading-6 text-neutral-600">
                  Monday to Saturday
                  <br />
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            <PolicyCard icon={Truck} title="Shipping Coverage">
              <p>
                We currently deliver orders to serviceable locations across
                India. Delivery availability may vary depending on the
                destination pincode, courier coverage and product type.
              </p>

              <p className="mt-4">
                Customers are requested to provide a complete and accurate
                delivery address, contact number and pincode while placing an
                order.
              </p>
            </PolicyCard>

            <PolicyCard icon={Clock3} title="Order Processing Time">
              <p>
                Orders are generally processed within{" "}
                <strong className="text-[#2D2926]">
                  1–2 business days
                </strong>{" "}
                after payment confirmation.
              </p>

              <BulletList
                items={[
                  "Orders placed on Sundays or public holidays will be processed on the next working day.",
                  "During festivals, sales or high-order periods, processing may take slightly longer.",
                  "Customers will receive order confirmation and shipping updates through email, SMS or WhatsApp where applicable.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={MapPin} title="Estimated Delivery Time">
              <p>
                Delivery usually takes approximately{" "}
                <strong className="text-[#2D2926]">
                  3–7 business days
                </strong>{" "}
                after dispatch, depending on the destination.
              </p>

              <BulletList
                items={[
                  "Metro cities may receive orders sooner.",
                  "Remote or non-serviceable locations may require additional delivery time.",
                  "Delivery timelines are estimates and may be affected by weather, courier delays, strikes or regional restrictions.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={Box} title="Shipping Charges">
              <p>
                Shipping charges, if applicable, will be displayed during
                checkout before payment.
              </p>

              <BulletList
                items={[
                  "Free shipping may be available above a specified minimum order value.",
                  "Additional charges may apply to remote locations, heavy orders or special delivery requirements.",
                  "Any applicable shipping fee is non-refundable once the order has been dispatched.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={PackageCheck} title="Order Tracking">
              <p>
                Once your order is dispatched, tracking details will be shared
                through the contact information provided during checkout.
              </p>

              <p className="mt-4">
                Tracking information may take up to 24 hours to update after
                dispatch.
              </p>
            </PolicyCard>

            <PolicyCard icon={XCircle} title="Failed Delivery Attempts">
              <p>
                Our courier partner may attempt delivery more than once. If an
                order cannot be delivered because of an incorrect address,
                unavailable recipient or refusal to accept the parcel, it may
                be returned to us.
              </p>

              <p className="mt-4">
                Re-shipping charges may apply if the customer requests the order
                to be sent again.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={ArrowRightLeft}
              title="Return Eligibility"
            >
              <p>
                A return request may be accepted if the product received is:
              </p>

              <BulletList
                items={[
                  "Damaged during transit.",
                  "Incorrect or different from the item ordered.",
                  "Expired at the time of delivery.",
                  "Missing from the delivered package.",
                  "Defective because of a manufacturing or packaging issue.",
                ]}
              />

              <p className="mt-5">
                Return requests should generally be submitted within{" "}
                <strong className="text-[#2D2926]">
                  48 hours of delivery
                </strong>
                .
              </p>
            </PolicyCard>

            <PolicyCard icon={ShieldCheck} title="Return Conditions">
              <p>
                To qualify for a return, the product must meet the following
                conditions:
              </p>

              <BulletList
                items={[
                  "The item must be unused and unopened unless it was received damaged.",
                  "The original packaging, labels, invoice and accessories must be retained.",
                  "Clear photographs or an unboxing video may be required for damaged, leaking, missing or incorrect products.",
                  "The product must not have been altered, transferred or repackaged.",
                ]}
              />
            </PolicyCard>

            <PolicyCard
              icon={XCircle}
              title="Non-Returnable Products"
            >
              <p>
                For safety and hygiene reasons, the following items may not be
                eligible for return:
              </p>

              <BulletList
                items={[
                  "Opened or used food products.",
                  "Products damaged because of improper storage after delivery.",
                  "Items purchased during clearance or final-sale promotions unless received damaged.",
                  "Products returned without original packaging or order proof.",
                  "Requests submitted after the allowed return window.",
                  "Items rejected because of personal taste, aroma or preference.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={RefreshCcw} title="Return Process">
              <p>To request a return:</p>

              <NumberedList
                items={[
                  "Contact our support team within the eligible return period.",
                  "Share your order number, product details and reason for the request.",
                  "Provide photographs or an unboxing video if requested.",
                  "Wait for approval and return instructions from our team.",
                  "Pack the approved product securely in its original packaging.",
                ]}
              />

              <p className="mt-5">
                Products returned without prior approval may not be accepted.
              </p>
            </PolicyCard>

            <PolicyCard icon={CheckCircle2} title="Replacement Policy">
              <p>
                Where applicable, we may offer a replacement for damaged,
                defective, missing or incorrectly delivered products.
              </p>

              <p className="mt-4">
                Replacement availability depends on stock. If a replacement is
                unavailable, a refund or store credit may be offered.
              </p>
            </PolicyCard>

            <PolicyCard icon={CreditCard} title="Refunds">
              <p>
                Once an approved return is received and inspected, the refund
                will be initiated to the original payment method.
              </p>

              <BulletList
                items={[
                  "Refund processing may take 5–10 business days after approval.",
                  "The final credit timeline depends on the bank or payment provider.",
                  "Shipping charges may not be refunded unless the product was damaged, defective or incorrectly supplied.",
                  "Cash-on-delivery refunds may require valid bank account details.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={FileText} title="Order Cancellation">
              <p>
                Orders may be cancelled before dispatch by contacting our
                support team.
              </p>

              <p className="mt-4">
                Once an order has been shipped, cancellation may not be
                possible. In such cases, the applicable return terms will
                apply.
              </p>
            </PolicyCard>

            <PolicyCard icon={Mail} title="Contact Us">
              <p>
                For shipping updates, return requests, replacements or refund
                assistance, please contact our support team.
              </p>

              <div className="mt-6 rounded-2xl border border-[#DDD4C8] bg-[#F4F1ED] p-6">
                <h4 className="font-serif text-xl text-[#2D2926]">
                  The Alchemist&apos;s Pantry
                </h4>

                <p className="mt-3 leading-7 text-neutral-600">
                  Add your complete registered office or warehouse address here.
                </p>

                <p className="mt-3 text-neutral-600">
                  <strong>Phone:</strong> +91 98765 43210
                </p>

                <p className="mt-2 text-neutral-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@yourbrand.com"
                    className="font-medium text-[#8B5A2B] hover:underline"
                  >
                    support@yourbrand.com
                  </a>
                </p>

                <p className="mt-2 text-neutral-600">
                  <strong>Support Hours:</strong> Monday–Saturday,
                  9:00 AM–6:00 PM IST
                </p>
              </div>
            </PolicyCard>
          </div>
        </div>
      </section>
    </main>
  );
};

const PolicyCard = ({ title, children, icon: Icon }) => {
  return (
    <article className="group relative rounded-2xl border border-[#DDD4C8] bg-white p-6 transition-all duration-500 hover:border-[#8B5A2B] md:p-8">
      <div className="absolute bottom-0 left-8 h-0.5 w-0 bg-[#8B5A2B] transition-all duration-500 group-hover:w-20" />

      <div className="mb-5 flex items-start gap-4">
        {Icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4F1ED]">
            <Icon className="h-5 w-5 text-[#8B5A2B]" />
          </div>
        )}

        <h2 className="font-serif text-2xl font-light text-[#2D2926] md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
        {children}
      </div>
    </article>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start text-neutral-600">
          <span className="mr-3 mt-3 h-px w-5 shrink-0 bg-[#8B5A2B]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const NumberedList = ({ items }) => {
  return (
    <ol className="mt-5 space-y-4">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[32px_1fr] items-start gap-3 text-neutral-600"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F1ED] text-[10px] font-bold text-[#8B5A2B]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
};

export default ShippingReturnsPolicyPage;