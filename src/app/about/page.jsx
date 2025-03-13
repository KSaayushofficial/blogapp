import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 px-8 py-16 ">
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col gap-6 lg:gap-8">
        <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-wide">
          About Agency
        </h2>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-50">
          We create digital ideas that are{" "}
          <span className="text-blue-600">bigger, bolder, braver</span> and
          better.
        </h1>
        <p className="text-lg text-gray-50 leading-relaxed">
          We believe in great ideas, flexibility, and precision. As the world's
          best consulting & finance solution provider, we offer a wide range of
          web and software development services.
        </p>
        {/* Stats Section */}
        <div className="flex gap-6 md:gap-12">
          {["10K+", "500+", "200+"].map((stat, index) => (
            <div key={index} className="text-center">
              <h1 className="text-3xl font-bold text-blue-600">{stat}</h1>
              <p className="text-gray-600">
                {index === 0
                  ? "Years of Experience"
                  : index === 1
                  ? "Projects Delivered"
                  : "Happy Clients"}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="flex-1 relative flex justify-center">
        <div className="relative group w-[400px] h-[400px] overflow-hidden rounded-3xl shadow-lg transform transition duration-500 hover:scale-105">
          <Image
            src="/analysis.webp"
            alt="Analysis"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0  bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
