"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "../../components/globalcomponents/Heading";

const testimonials = [
  {
    id: 1,
    img: "/images/team1.png",
    text: "CureLogics delivered exceptional results for our software project. Their expertise and professionalism surpassed our expectations. Highly recommend their services!",
    author: "Imran Haider",
    role: "Farmer",
  },
  {
    id: 2,
    img: "/images/team2.png",
    text: "CureLogics delivered exceptional results for our software project. Their expertise and professionalism surpassed our expectations. Highly recommend their services!",
    author: "John Doe",
    role: "Designer",
  },
  {
    id: 3,
    img: "/images/team3.png",
    text: "CureLogics delivered exceptional results for our software project. Their expertise and professionalism surpassed our expectations. Highly recommend their services!",
    author: "Jane Smith",
    role: "Developer",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-gray-100 py-28 px-4 flex items-center justify-center md:pb-28">
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: blue; /* Icon color */
          width: 40px;
          height: 40px;
          border-radius: 50%; /* Make buttons circular */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px; /* Adjust icon size */
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(); /* Gradient color on hover */
        }
      `}</style>
      <div className="w-full lg:w-4/5 h-full mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Heading text={"Testimonials"} />
          <h2
            data-aos="zoom-in"
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Check what’s clients say about
            <br />
            Curelogics
          </h2>
          <div
            data-aos="fade-down"
            className="text-6xl text-gray-300 font-serif flex justify-center items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 z-50 -translate-y-1/2"
          >
            <Image
              data-aos="zoom-in-down"
              width={50}
              height={50}
              src="/images/qoute.png"
              alt="quote"
              className="w-12 h-12 md:w-16 md:h-16 z-50 "
            />
          </div>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Continue autoplay even after interaction
            }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="relative z-10 max-w-xl lg:max-w-2xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center text-center px-6 mb-10">
                  <p
                    data-aos="zoom-out"
                    className="text-lg md:text-xl italic text-gray-700 mb-8"
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex gap-4 items-center">
                    <Image
                      width={30}
                      height={30}
                      src={testimonial.img}
                      alt={testimonial.author}
                      className="object-cover rounded-full border-2 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-start text-lg">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Element */}
        <div
          data-aos="zoom-in"
          className="absolute w-full h-full top-[30%] hidden right-0 md:flex items-center justify-between"
        >
          <Image
            data-aos="fade-up"
            width={200}
            height={200}
            src="/images/testimonial.png"
            alt="background design"
            className="w-3/4 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 "
          />
        </div>
      </div>
    </section>
  );
}
