"use client";
import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [activeClients, setActiveClients] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null); // Reference for the banner

  const duration = 2000; // Animation duration in milliseconds

  // Function to handle the animation
  const animateValue = (setter, targetValue) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1
      const currentValue = Math.floor(progress * targetValue);

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the banner is visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateValue(setProjectsCompleted, 250);
      animateValue(setActiveClients, 900);
      animateValue(setSatisfiedClients, 900);
    }
  }, [isVisible]);

  return (
    <div
      ref={bannerRef}
      className="relative banner-bg to-blue-800 p-8 overflow-hidden"
    >
      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-white md:w-1/3 space-y-4">
          <h1 className="text-4xl font-bold">
            Let's Build something awesome together!
          </h1>
          <button className="px-6 py-3 cursor-pointer text-white text-sm md:text-base bg-gradient-to-r from-red-500 to-blue-500 rounded-lg shadow-md hover:opacity-90 focus:outline-none">
            Start Project →
          </button>
        </div>

        {/* Right Stats */}
        <div className="flex w-auto space-x-4 mt-8 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl py-2">
          {/* Single Stat */}
          <div className="p-2  md:p-4 text-center border-r-2 border-white">
            <p className="text-4xl font-bold text-white">
              {projectsCompleted}+
            </p>
            <p className="text-white text-sm">complete projects</p>
          </div>
          <div className="p-2 md:p-4 text-center border-r-2 border-white">
            <p className="text-4xl font-bold text-white">{activeClients}+</p>
            <p className="text-white text-sm">active clients</p>
          </div>
          <div className="p-2 md:p4rounded-lg text-center">
            <p className="text-4xl font-bold text-white">{satisfiedClients}+</p>
            <p className="text-white text-sm">satisfied clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
