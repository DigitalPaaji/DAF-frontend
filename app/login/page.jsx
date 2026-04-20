"use client"
import React, { useRef, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import axios from 'axios'
import { base_url } from '../components/Store/utils'

const Page = () => {
  const [form, setForm] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRef = useRef([]);

  // ----- GOOGLE LOGIN -----
  const handleGoogleLogin = async (credentialResponse) => {
    const token = credentialResponse.credential;
    setIsLoading(true);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    try {
      const response = await axios.post(`${base_url}/user/loginUser/google`, {
        token2: token,
        cart,
      });
      const data = response.data;
      
      if (data.success) {
        localStorage.removeItem("cart");
        toast.success(data.message || "Logged in successfully!");
        window.location.reload();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        (error.response?.data?.errors && Object.values(error.response.data.errors)[0]?.message) ||
        "Google Login failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  
  const sendOtp = async () => {
    if (!form.email || !form.email.includes("@")) {
      return toast.error("Please enter a valid email address.");
    }

    setIsLoading(true);
    try {
      // 
      const response = await axios.post(`${base_url}/login`, { email: form.email });
      if (response.data.success) {
        toast.success("OTP sent to your email!");
        setShowOtpFields(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- VERIFY OTP ---
  const verifyOtp = async (otpArray) => {
    const fullOtp = otpArray.join("");
    if (fullOtp.length < 6) return;

    setIsLoading(true);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    try {
      // TODO: Replace with your actual Verify OTP endpoint
      const response = await axios.post(`${base_url}/verifyotp`, {
        email: form.email,
        otp: fullOtp,
        cart,
      });

      if (response.data.success) {
        localStorage.removeItem("cart");
        toast.success("Login successful!");
       window.history.back();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP.");
      setOtp(new Array(6).fill("")); // Clear OTP on failure
      inputRef.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  // --- INPUT HANDLERS ---
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6).split("");

    if (pasteData.length === 0) return;

    const newOtp = [...otp];
    pasteData.forEach((char, index) => {
      newOtp[index] = char;
    });
    setOtp(newOtp);

    const lastIdx = pasteData.length < 6 ? pasteData.length : 5;
    inputRef.current[lastIdx]?.focus();

    if (pasteData.length === 6) {
      verifyOtp(newOtp);
    }
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); 
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }

    if (index === 5 && value !== "") {
      const fullOtp = newOtp.join("");
      if (fullOtp.length === 6) {
        verifyOtp(newOtp);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen pt-20 grid grid-cols-1 md:grid-cols-3 bg-gray-50">
      {/* Left / Blank Section */}
      <div className="hidden md:block col-span-2 bg-slate-100">
<img src="/Images/login_banner.webp" alt=""  className='w-full h-screen'/>
      </div>

      {/* Right / Auth Section */}
      <div className="col-span-1 border-l bg-white flex justify-center items-center px-6 py-12 shadow-xl">
        <div className="w-full max-w-sm space-y-8">
          
          <div className="flex justify-center">
            <img src="/Images/logo.webp" alt="Logo" className="w-32 object-contain" />
          </div>

          <div className="space-y-4">
            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ email: e.target.value })}
                placeholder="Enter your email..."
                className="border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e2ad7f] focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-500"
                disabled={showOtpFields || isLoading}
              />
            </div>

            {/* OTP Fields */}
            {showOtpFields && (
              <div className="py-4 animate-fade-in">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-700 font-medium text-sm">
                      Enter Verification Code
                    </p>
                    <button 
                      onClick={() => setShowOtpFields(false)}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Change Email
                    </button>
                </div>

                <div className="flex justify-between gap-2" onPaste={handlePaste}>
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      ref={(elm) => (inputRef.current[index] = elm)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onChange={(e) => handleChange(e.target, index)}
                      disabled={isLoading}
                      className="w-10 h-12 md:w-12 md:h-14 border-2 rounded-lg text-center text-xl font-semibold text-gray-800 bg-white outline-none transition-all border-gray-300 focus:border-[#292927] focus:ring-2 focus:ring-[#e2ad7f] disabled:opacity-60"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="pt-2">
              {!showOtpFields ? (
                 <button
                 onClick={sendOtp}
                 disabled={isLoading || !form.email}
                 className="w-full bg-[#292927] text-white font-semibold py-2.5 rounded-lg hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {isLoading ? "Sending..." : "Send OTP"}
               </button>
              ) : (
                <button
                 onClick={() => verifyOtp(otp)}
                 disabled={isLoading || otp.join("").length < 6}
                 className="w-full bg-[#e2ad7f] text-white font-semibold py-2.5 rounded-lg hover:bg-[#d19a6a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {isLoading ? "Verifying..." : "Verify & Login"}
               </button>
              )}
            </div>

            {/* Divider */}
            <div className="relative flex py-4 items-center">
              <div className="w-full border-t border-gray-300"></div>
              <span className=" mx-4 text-gray-400 text-sm">or</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>

            {/* Google Login */}
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => toast.error("Google Login Failed")}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;