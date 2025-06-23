"use client";
import React, { useState, useEffect } from "react";

const ServiceSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative text-gray-900 py-16 px-6 md:px-12 md:h-screen overflow-hidden bg-gray-100">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-500 to-blue-500 opacity-25 blur-[120px]"
        style={{
          top: position.y - 40,
          left: position.x - 40,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600">
          Our Services <span className="text-blue-600">& Skills</span>
        </h2>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center ">
        {/* Web Design Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 text-gray-700 hover:shadow-xl transition">
          <h3 className="flex items-center text-xl font-semibold text-red-600">
            ⚡ Web Design
            <span className="ml-auto text-sm text-gray-500">• UI/UX</span>
          </h3>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              <span>Landing Page</span>
              <span className="text-lime-600">✔ Approved</span>
            </div>
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              <span>🎨 Figma</span>
              <span className="text-yellow-500">🔥 Expert Level</span>
            </div>
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              <span>🔍 UX Research</span>
              <span className="text-green-500">👍 Recommend</span>
            </div>
            <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
              <span>⭐ Our Designing Rating</span>
              <span className="text-yellow-500">4.9 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Middle Circle Element */}
        <div className="relative h-[20rem] w-full md:w-1/2 flex justify-center items-center">
          <div className="md:py-[2px] px-[2px] md:bg-gradient-to-r from-red-500 to-blue-500 bg-gradient-to-b from-red-500 to-blue-500 md:w-full h-full md:h-0 z-10"></div>
          <div className="w-20 h-20 py-0 bg-gray-100  border border-red-500 rounded-full z-20 absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
            <img
              src="https://curelogics.org/wp-content/uploads/2024/08/Group-14040.png"
              alt=""
              className="w-[100%] h-[100%] rounded-full bg-transparent"
            />
          </div>
          <div className="w-full h-10 absolute flex justify-center items-center z-0">
            <div className="w-10 h-10 bg-gradient-to-b from-red-500 to-blue-500 rounded-md blur-md animate-move-right absolute"></div>
            <div className="w-10 h-10 bg-gradient-to-b from-red-500 to-blue-500 rounded-md blur-md animate-move-left absolute"></div>
          </div>
        </div>

        {/* Web Development Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 relative text-gray-700 hover:shadow-xl transition">
          <h3 className="flex items-center text-xl font-semibold text-blue-600">
            🚀 Web Development
          </h3>

          <div className="mt-4 bg-gray-200 p-4 rounded-lg text-center">
            <img
              src="https://cdn.prod.website-files.com/664a2ad52e9858bb0b0272b3/664a2ad52e9858bb0b0272e6_Rectangle%2520140-p-800.png"
              alt="img"
              className="rounded-lg"
            />
          </div>

          <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold text-sm rounded-lg">
            Live
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
