import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact Page",
  description: "Contact Details",
}; 

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-20 ">
      {/* Left - Image Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[450px] h-[450px] rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
          <Image
            src="/analysis.webp"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0  bg-opacity-10 transition-opacity duration-500 hover:bg-opacity-30"></div>
        </div>
      </div>

      {/* Right - Form Section */}
      <div className="flex-1 w-full max-w-lg  p-8 rounded-3xl shadow-xl backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-gray-50 text-center mb-6">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <form action="" className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="px-5 py-3 w-full text-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm transition duration-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-3 w-full text-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm transition duration-300"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="px-5 py-3 w-full text-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm transition duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="px-5 py-3 w-full text-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm transition duration-300"
          ></textarea>

          {/* Glassmorphism Button */}
          <button className="  py-3 mt-2 text-lg font-semibold text-white text-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
// FIXED THE SCROLL BAR AND MADE RESPONSIVE
export default ContactPage;
