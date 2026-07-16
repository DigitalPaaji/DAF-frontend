"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightLeft,
  Banknote,
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
  Store,
  Truck,
  WalletCards,
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
            alt="Dr. Aulakh Foods Shipping and Returns Policy"
            fill
            priority
            className="object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DF]/95 via-[#E8E3DF]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B0008]">
            Dr. Aulakh Foods
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
            Customer Information
          </span>

          <h2 className="mt-4 font-serif text-3xl font-light text-[#2D2926] md:text-4xl lg:text-5xl">
            Secure payments, reliable delivery and
            <span className="italic font-medium text-[#8B5A2B]">
              {" "}
              transparent support.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
            At Dr. Aulakh Foods, customer satisfaction is our priority. We aim
            to process every order carefully, deliver it securely and provide
            clear assistance in case a package arrives damaged, tampered with
            or contains an incorrect product.
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
                Customer Assistance
              </h3>

              <p className="text-sm leading-7 text-neutral-600">
                Our customer support team can assist you with payment
                information, order tracking, damaged packages, incorrect
                products, return requests and refund-related enquiries.
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
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Payment Information */}
            <PolicyCard icon={CreditCard} title="Payment Information">
              <p>
                Dr. Aulakh Foods accepts secure online payments through trusted
                payment gateways. The payment methods available for your order
                will be displayed during checkout.
              </p>

              <p className="mt-4">
                All online transactions are protected using industry-standard
                SSL encryption to help safeguard your personal and payment
                information.
              </p>
            </PolicyCard>

            <PolicyCard icon={WalletCards} title="Accepted Payment Methods">
              <p>
                Depending on the selected payment gateway, order value and
                delivery location, customers may use the following payment
                methods:
              </p>

              <BulletList
                items={[
                  "Unified Payments Interface, commonly known as UPI.",
                  "Major credit cards supported by the payment gateway.",
                  "Major debit cards supported by the payment gateway.",
                  "Net banking through participating banks.",
                  "Supported digital wallets.",
                  "EMI payment options where applicable and available.",
                  "Cash on Delivery for selected serviceable locations.",
                ]}
              />

              <p className="mt-5">
                Cash on Delivery and EMI availability may vary depending on the
                customer&apos;s delivery location, order value and payment
                service provider.
              </p>
            </PolicyCard>

            <PolicyCard icon={ShieldCheck} title="Payment Security">
              <p>
                Online payments are processed through secure third-party
                payment gateways. Dr. Aulakh Foods does not directly store
                sensitive card details, UPI credentials, banking passwords or
                wallet authentication information.
              </p>

              <p className="mt-4">
                Customers should never share their OTP, card PIN, UPI PIN,
                banking password or other confidential payment credentials with
                anyone claiming to represent Dr. Aulakh Foods.
              </p>
            </PolicyCard>

            <PolicyCard icon={Truck} title="Shipping Coverage">
              <p>
                We deliver orders to serviceable locations across India.
                Delivery availability is determined by the destination pincode,
                courier coverage and any applicable regional restrictions.
              </p>

              <p className="mt-4">
                Customers must provide a complete and accurate delivery
                address, mobile number and pincode while placing an order.
                Incorrect or incomplete information may delay delivery.
              </p>
            </PolicyCard>

            <PolicyCard icon={Clock3} title="Order Processing Time">
              <p>
                Orders are generally processed within{" "}
                <strong className="text-[#2D2926]">
                  24–48 working hours
                </strong>{" "}
                after the order is confirmed and payment is successfully
                received, where applicable.
              </p>

              <BulletList
                items={[
                  "Orders placed on Sundays or public holidays may be processed on the following working day.",
                  "Processing may require additional time during festivals, sales, promotional campaigns or periods of high order volume.",
                  "Customers will receive dispatch or tracking information after the order has been handed over to the courier partner.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={MapPin} title="Estimated Delivery Time">
              <p>
                Orders are normally delivered within{" "}
                <strong className="text-[#2D2926]">
                  3–7 business days
                </strong>{" "}
                after dispatch.
              </p>

              <BulletList
                items={[
                  "Delivery time may vary depending on the destination, courier service and regional accessibility.",
                  "Remote or difficult-to-reach areas may require additional delivery time.",
                  "Delivery timelines are estimates and may be affected by weather, transportation disruptions, courier delays, public holidays or regional restrictions.",
                ]}
              />

              <p className="mt-5">
                While we coordinate with reliable courier partners, delays
                caused by circumstances beyond our reasonable control may
                occasionally occur.
              </p>
            </PolicyCard>

            <PolicyCard icon={Box} title="Shipping Charges">
              <p>
                Applicable shipping charges will be clearly displayed during
                checkout before the customer confirms the order and completes
                payment.
              </p>

              <BulletList
                items={[
                  "Shipping charges may vary according to the order value, weight, destination and courier availability.",
                  "Free shipping may be available on selected orders, minimum order values or promotional offers.",
                  "Any free-shipping offer will be subject to the conditions displayed at the time of purchase.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={PackageCheck} title="Order Tracking">
              <p>
                Tracking details will be shared after the order has been
                dispatched. Depending on the available service, the tracking
                information may be sent through email, SMS or WhatsApp.
              </p>

              <p className="mt-4">
                Courier tracking information may take some time to become active
                after dispatch. Customers should allow up to 24 hours for the
                latest shipment movement to appear.
              </p>
            </PolicyCard>

            <PolicyCard icon={XCircle} title="Failed Delivery Attempts">
              <p>
                Delivery may be unsuccessful if the recipient is unavailable,
                the address is incomplete, the contact number is incorrect or
                the customer refuses to accept the shipment.
              </p>

              <p className="mt-4">
                If the parcel is returned to Dr. Aulakh Foods after failed
                delivery attempts, additional shipping charges may apply if the
                customer requests re-dispatch.
              </p>
            </PolicyCard>

            {/* Returns */}
            <PolicyCard icon={ArrowRightLeft} title="Return Eligibility">
              <p>
                Customer satisfaction is our priority. A return request may be
                accepted only under the following circumstances:
              </p>

              <BulletList
                items={[
                  "The product was received in a damaged condition.",
                  "A product different from the item ordered was delivered.",
                  "The outer package was visibly tampered with before opening.",
                ]}
              />

              <p className="mt-5">
                The return request must be raised within{" "}
                <strong className="text-[#2D2926]">
                  48 hours of delivery
                </strong>
                . Requests submitted after this period may not be eligible for
                review.
              </p>
            </PolicyCard>

            <PolicyCard icon={ShieldCheck} title="Evidence Required">
              <p>
                Customers requesting a return must provide sufficient
                information so our team can verify the issue.
              </p>

              <BulletList
                items={[
                  "The order number and customer contact details.",
                  "Clear photographs showing the damaged, incorrect or tampered product and packaging.",
                  "Photographs of the shipping label and outer package where required.",
                  "An unboxing video may be requested in cases involving damaged, missing, leaking or tampered products.",
                ]}
              />

              <p className="mt-5">
                Return approval will be subject to verification by the Dr.
                Aulakh Foods support team.
              </p>
            </PolicyCard>

            <PolicyCard icon={XCircle} title="Non-Returnable Products">
              <p>
                Opened or used food products cannot be returned because of food
                safety and hygiene considerations.
              </p>

              <BulletList
                items={[
                  "Products that have been opened, used, tasted or partially consumed.",
                  "Products damaged because of incorrect handling or storage after delivery.",
                  "Items returned without sufficient photographs, order details or proof of purchase.",
                  "Requests raised more than 48 hours after delivery.",
                  "Products returned because of personal taste, aroma or flavour preference.",
                ]}
              />
            </PolicyCard>

            <PolicyCard icon={RefreshCcw} title="How to Request a Return">
              <p>
                Customers may follow the steps below to submit an eligible
                return request:
              </p>

              <NumberedList
                items={[
                  "Contact the Dr. Aulakh Foods customer support team within 48 hours of delivery.",
                  "Provide the order number, product details and a clear explanation of the issue.",
                  "Attach photographs showing the product, packaging and shipping label.",
                  "Wait for the support team to review the request and provide approval or further instructions.",
                  "Retain the complete product and original packaging until the verification process is completed.",
                ]}
              />

              <p className="mt-5">
                Customers should not send a product back without prior approval
                or return instructions from our team.
              </p>
            </PolicyCard>

            <PolicyCard icon={CheckCircle2} title="Replacement">
              <p>
                After verification, Dr. Aulakh Foods may offer a replacement
                for a damaged or incorrectly delivered product, subject to
                product availability.
              </p>

              <p className="mt-4">
                If the same product is not available, the customer may be
                offered an appropriate refund according to the applicable
                refund terms.
              </p>
            </PolicyCard>

            <PolicyCard icon={Banknote} title="Refund Policy">
              <p>
                Refunds are processed only after the customer&apos;s request and
                supporting evidence have been reviewed and approved.
              </p>

              <BulletList
                items={[
                  "Approved refunds will normally be issued to the original payment method.",
                  "Refunds may take approximately 5–7 working days to reflect after processing.",
                  "The final credit timeline may depend on the customer’s bank, card provider, wallet or payment gateway.",
                  "For Cash on Delivery orders, the customer may be asked to provide suitable bank account or payment details for the refund.",
                ]}
              />

              <p className="mt-5">
                Customers will be informed once an approved refund has been
                initiated.
              </p>
            </PolicyCard>

            <PolicyCard icon={FileText} title="Order Cancellation">
              <p>
                Customers may request cancellation before the order has been
                dispatched by contacting our support team.
              </p>

              <p className="mt-4">
                Once an order has been dispatched, cancellation may not be
                possible. The order will then be handled according to the
                applicable shipping and return conditions.
              </p>
            </PolicyCard>

            {/* Distribution */}
            <PolicyCard icon={Store} title="Distributor & Wholesale Enquiries">
              <p>
                Dr. Aulakh Foods welcomes business enquiries from distributors,
                wholesalers, supermarkets, cafés, restaurants, hotels and
                institutional buyers across India.
              </p>

              <p className="mt-4">
                Our Tea Masala collection is suitable for retail shelves,
                commercial beverage preparation, hospitality businesses and
                institutional requirements.
              </p>

              <BulletList
                items={[
                  "Distributor and dealership opportunities.",
                  "Wholesale and high-volume product requirements.",
                  "Retail and supermarket supply enquiries.",
                  "Requirements from cafés, restaurants and hotels.",
                  "Institutional and commercial purchase enquiries.",
                ]}
              />

              <p className="mt-5">
                For dealership opportunities, wholesale pricing or commercial
                requirements, please contact our sales team through the Contact
                Us page.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3A2A21] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8B5A2B]"
              >
                Submit Business Enquiry
              </Link>
            </PolicyCard>

            {/* Contact */}
            <PolicyCard icon={Mail} title="Contact Dr. Aulakh Foods">
              <p>
                For payment assistance, shipping updates, return requests,
                refunds, replacements or wholesale enquiries, please contact
                our customer support team.
              </p>

              <div className="mt-6 rounded-2xl border border-[#DDD4C8] bg-[#F4F1ED] p-6">
                <h4 className="font-serif text-xl text-[#2D2926]">
                  Dr. Aulakh Foods
                </h4>

                <p className="mt-3 leading-7 text-neutral-600">
                  Customer support is available through phone, WhatsApp and
                  email.
                </p>

                <p className="mt-3 text-neutral-600">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918360021419"
                    className="font-medium text-[#8B5A2B] hover:underline"
                  >
                    +91-8360021419
                  </a>
                </p>

                <p className="mt-2 text-neutral-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@draulakhfoods.com"
                    className="font-medium text-[#8B5A2B] hover:underline"
                  >
                    info@draulakhfoods.com
                  </a>
                </p>

                <p className="mt-2 text-neutral-600">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.draulakhfoods.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#8B5A2B] hover:underline"
                  >
                    www.draulakhfoods.com
                  </a>
                </p>

                <p className="mt-2 text-neutral-600">
                  <strong>Support Hours:</strong> Monday – Saturday, 9:00 AM –
                  6:00 PM
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

