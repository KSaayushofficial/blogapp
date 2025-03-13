"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-10 py-20 ">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6 text-left max-w-lg">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-50 leading-snug">
          Creative <span className="text-blue-600">Thoughts</span> Agency
        </h1>
        <p className="text-lg text-gray-50 leading-relaxed">
          Transforming imagination into reality. We provide cutting-edge
          solutions that redefine innovation.
        </p>

        {/* Buttons */}
        <div className="flex gap-6">
          <button className="px-7 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
          <button className="px-7 py-3 text-lg font-semibold text-blue-600 bg-white border border-blue-600 rounded-full shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg">
            Contact
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[450px] h-[450px] rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
          <Image
            src="/analysis.webp"
            alt="Creative Work"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 bg-opacity-10 transition-opacity duration-500 hover:bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
