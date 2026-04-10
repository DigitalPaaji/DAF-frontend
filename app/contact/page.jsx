"use client";
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-16 lg:px-28 ">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col pt-4">
            
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-amber-700 mb-4">
              Client Concierge
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 leading-tight mb-8">
              Let's start a <br /> conversation.
            </h1>
            <p className="text-neutral-500 font-light text-lg leading-relaxed mb-16">
              Whether you are looking to feature our blends in your boutique, or simply have a question about your order, our team is here to assist you with care.
            </p>

            {/* Ultra-Clean Contact Details */}
            <div className="space-y-10">
              {/* Location */}
              <div className="flex items-start gap-5">
                <FaMapMarkerAlt className="text-amber-700 mt-1 shrink-0" size={16} />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2">Our Studio</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    Kashmir Origin, Level 4<br />
                    Pampore Heritage Building<br />
                    Srinagar, J&K 190001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <FaEnvelope className="text-amber-700 mt-1 shrink-0" size={16} />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2">Inquiries</h3>
                  <p className="text-neutral-500 font-light mb-1">hello@kashmirorigin.com</p>
                  <p className="text-neutral-500 font-light">partners@kashmirorigin.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <FaPhoneAlt className="text-amber-700 mt-1 shrink-0" size={16} />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-2">Direct Line</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    +91 98765 43210<br />
                    <span className="text-sm text-neutral-400">Mon - Fri, 9am - 6pm IST</span>
                  </p>
                </div>
              </div>
            </div>

          </div>   
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
            
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 pl-1">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 font-light focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
                      placeholder="Jane"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 pl-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 font-light focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 pl-1 mt-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 font-light focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 pl-1 mt-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows="5"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 font-light focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 w-full bg-neutral-900 hover:bg-amber-700 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  Send Inquiry
                </button>

                <p className="text-center text-xs text-neutral-400 font-light mt-2">
                  We typically reply within 24 hours.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;