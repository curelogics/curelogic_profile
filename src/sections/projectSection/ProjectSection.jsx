"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Heading from "../../components/globalcomponents/Heading";
import projects from "./data/Data";
import { MoveLeft, MoveRight } from "lucide-react";

const ProjectsSection = () => {
  const swiperRef = useRef(null);

  // Function to navigate Swiper manually
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative py-16 flex flex-col lg:flex-row items-center justify-end bg-white px-4">
      {/* Left Animated Gears */}
      {/* <div className="z-20 absolute md:-left-16 -left-9 md:top-[27.5%] top-[50%] rotate-[15deg]">
        <DotLottieReact
          className="md:w-96 md:h-96 w-40 h-40 hidden md:block"
          src="https://lottie.host/906ed5c3-5320-46da-8ac4-e16ea5554b5f/Z8Sahwhs21.lottie"
          loop
          autoplay
        />
      </div> */}

      {/* Projects Section */}
      <div className="container md:w-[80%] relative mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-center lg:text-start">
            <Heading text={"Projects"} />
          </div>
          <p
            data-aos="fade-up"
            className="text-3xl font-bold text-center lg:text-start"
          >
            Explore our diverse array of transformative projects
          </p>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-0 right-20 space-x-4 z-10 hidden lg:flex">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gradient-to-r hover:from-[#E21E2D] hover:to-[#2D4E93] cursor-pointer hover:text-white"
            >
              <MoveLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gradient-to-r hover:from-[#E21E2D] hover:to-[#2D4E93] cursor-pointer hover:text-white"
            >
              <MoveRight />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          ref={swiperRef}
          className="lg:h-[44rem] w-full pb-10"
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide className="h-full pb-6" key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
