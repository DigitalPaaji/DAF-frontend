"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { base_url } from "./Store/utils";
import { useDispatch } from "react-redux";
import { toggle } from "./Store/slices/toggleUser";



axios.defaults.withCredentials = true;

const AuthPopUp = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [googleLoading, setGoogleLoading] = useState(false);
const dispatch= useDispatch()
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
       dispatch(toggle(false));
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [ ]);

  const handleGoogleLogin = async (credentialResponse) => {
    const token = credentialResponse?.credential;

    if (!token) {
      return toast.error("Google login token not received");
    }

    try {
      setGoogleLoading(true);

      const response = await axios.post(
        `${base_url}/auth/google`,  
        { token },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(
          response.data.message || "Logged in successfully"
        );
location.reload()
       dispatch(toggle(false));
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Google login failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#142b20]/80 px-4 py-6 backdrop-blur-md">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close popup"
        onClick={()=> dispatch(toggle(false))}
        className="absolute inset-0 cursor-default"
      />

      
      <div className="relative z-10 max-h-[94vh] w-full max-w-[440px] overflow-y-auto custom-scrollbar2 rounded-[28px] border border-[#ddc99f] bg-[#fffaf0] text-[#203a2d] shadow-[0_30px_90px_rgba(10,35,24,0.35)]">
        {/* Top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#244d38] via-[#d68a2f] to-[#8b3f24]" />

        <button
          type="button"
          onClick={()=> dispatch(toggle(false))}
          className="absolute right-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#dfcfaf] bg-white/60 text-xl text-[#5f6f63] transition hover:border-[#bd9d62] hover:bg-[#f5ead3] hover:text-[#244d38]"
        >
          ×
        </button>

        <div className="px-6 pb-7 pt-8 sm:px-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 p-2 items-center justify-center rounded-full border border-[#d9bb78] bg-[#f4e4bc] text-2xl shadow-sm">
            <img src="/images/logo.webp"  className="" />
            </div>
            {/* <p className="font-serif text-3xl font-semibold tracking-[0.12em] text-[#244d38]">
              MASALA LEAF
            </p> */}

            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b56628]">
              Tea · Spices · Tradition
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-7 grid grid-cols-2 rounded-2xl border border-[#eadbbd] bg-[#f5ead4] p-1.5">
            <button
              type="button"
              onClick={() => setActiveForm("login")}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                activeForm === "login"
                  ? "bg-[#244d38] text-[#fffaf0] shadow-sm"
                  : "text-[#758176] hover:bg-white/60 hover:text-[#244d38]"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setActiveForm("signup")}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                activeForm === "signup"
                  ? "bg-[#244d38] text-[#fffaf0] shadow-sm"
                  : "text-[#758176] hover:bg-white/60 hover:text-[#244d38]"
              }`}
            >
              Sign Up
            </button>
          </div>

          {activeForm === "login" ? (
            <Login onSuccess={()=> location.reload()} />
          ) : (
            <Signup
              onSuccess={()=> location.reload()}
              openLogin={() => setActiveForm("login")}
            />
          )}

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dfcfaf]" />

            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b8b70]">
              Or
            </span>

            <div className="h-px flex-1 bg-[#dfcfaf]" />
          </div>

          {/* Google */}
          <div className="flex min-h-[44px] justify-center">
            {googleLoading ? (
              <div className="flex h-11 w-full items-center justify-center rounded-xl border border-[#dfcfaf] bg-white/70 text-sm text-[#607064]">
                Connecting to Google...
              </div>
            ) : (
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() =>
                  toast.error("Google login failed")
                }
                size="large"
                shape="rectangular"
                theme="outline"
                text={
                  activeForm === "login"
                    ? "signin_with"
                    : "signup_with"
                }
              />
            )}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-[#8b806d]">
            By continuing, you agree to our{" "}
            <a
              href="/terms-and-conditions"
              className="font-medium text-[#a45a27] hover:underline"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="font-medium text-[#a45a27] hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPopUp;



const Login = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = user.email.trim().toLowerCase();

    if (!email || !user.password) {
      return toast.error("Please enter email and password");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${base_url}/auth/login`,
        {
          email,
          password: user.password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(
          response.data.message || "Logged in successfully"
        );

        onSuccess();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#244d38]">
          Welcome back, tea lover
        </h1>

        <p className="mt-1 text-sm text-[#758176]">
          Sign in to explore authentic teas and handcrafted masalas.
        </p>
      </div>

      <div className="space-y-4">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Enter your email"
          autoComplete="email"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Enter your password"
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <a
            href="/forgot-password"
            className="text-xs font-medium text-[#a45a27] hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <AuthButton
          loading={loading}
          text="Login"
          loadingText="Logging in..."
        />
      </div>
    </form>
  );
};



const Signup = ({ onSuccess, openLogin }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setUserData((previousData) => ({
      ...previousData,
      [name]:
        name === "otp"
          ? value.replace(/\D/g, "").slice(0, 6)
          : value,
    }));
  };

  const validateUser = () => {
    const name = userData.name.trim();
    const email = userData.email.trim().toLowerCase();

    if (
      !name ||
      !email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (userData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSendOtp = async (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!validateUser()) return;

    try {
      setLoading(true);

      const response = await axios.post(
        `${base_url}/auth/sendotp`,
        {
          email: userData.email.trim().toLowerCase(),
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(
          response.data.message || "OTP sent successfully"
        );

        setOtpSent(true);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();

    const otp = userData.otp.trim();

    if (!/^\d{6}$/.test(otp)) {
      return toast.error("Enter a valid 6-digit OTP");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${base_url}/auth/verifyotp`,
        {
          name: userData.name.trim(),
          email: userData.email.trim().toLowerCase(),
          password: userData.password,
          otp,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(
          response.data.message ||
            "Account created successfully"
        );

        onSuccess();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "OTP verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChangeDetails = () => {
    setOtpSent(false);

    setUserData((previousData) => ({
      ...previousData,
      otp: "",
    }));
  };

  return (
    <form
      onSubmit={
        otpSent ? handleVerifyOtp : handleSendOtp
      }
    >
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#244d38]">
          {otpSent ? "Verify your email" : "Create account"}
        </h1>

        <p className="mt-1 text-sm text-[#758176]">
          {otpSent
            ? `Enter the OTP sent to ${userData.email}`
            : "Join our world of authentic tea and aromatic spices."}
        </p>
      </div>

      {!otpSent ? (
        <div className="space-y-4">
          <InputField
            label="Name"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInput}
            placeholder="Enter your name"
            autoComplete="name"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
            placeholder="Enter your email"
            autoComplete="email"
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
            placeholder="Minimum 8 characters"
            autoComplete="new-password"
          />

          <InputField
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInput}
            placeholder="Enter password again"
            autoComplete="new-password"
          />

          <AuthButton
            loading={loading}
            text="Send OTP"
            loadingText="Sending OTP..."
          />

          <p className="text-center text-sm text-[#758176]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={openLogin}
              className="font-medium text-[#a45a27] hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#53685a]">
              Verification code
            </label>

            <input
              type="text"
              name="otp"
              value={userData.otp}
              onChange={handleInput}
              maxLength={6}
              inputMode="numeric"
              autoComplete="one-time-code"
              autoFocus
              placeholder="000000"
              className="w-full rounded-xl border border-[#dfcfaf] bg-white/70 px-4 py-3.5 text-center text-xl tracking-[0.45em] text-[#244d38] outline-none transition placeholder:text-[#b7aa92] focus:border-[#b8752f] focus:ring-4 focus:ring-[#dca557]/15"
            />
          </div>

          <AuthButton
            loading={loading}
            text="Verify & Sign Up"
            loadingText="Creating account..."
          />

          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleChangeDetails}
              disabled={loading}
              className="text-[#758176] transition hover:text-[#244d38]"
            >
              Change details
            </button>

            <button
              type="button"
              onClick={() => handleSendOtp()}
              disabled={loading}
              className="font-medium text-[#a45a27] hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </div>
      )}
    </form>
  );
};



const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#53685a]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-[#dfcfaf] bg-white/70 px-4 py-3 text-sm text-[#203a2d] outline-none transition placeholder:text-[#aa9f8b] focus:border-[#b8752f] focus:bg-white focus:ring-4 focus:ring-[#dca557]/15"
      />
    </div>
  );
};

const AuthButton = ({
  loading,
  text,
  loadingText,
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-[#244d38] px-4 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_10px_24px_rgba(36,77,56,0.18)] transition hover:-translate-y-0.5 hover:bg-[#193c2a] hover:shadow-[0_14px_28px_rgba(36,77,56,0.24)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {loading ? loadingText : text}
    </button>
  );
};