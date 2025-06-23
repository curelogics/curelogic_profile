"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../../components/globalcomponents/Heading";
const FAQs = () => {
  const faqs = [
    {
      question: "What services does CureLogics offer?",
      answer:
        "CureLogics offers comprehensive software solutions including development, design, and marketing services to meet all your digital needs.",
    },
    {
      question: "Why choose CureLogics for software development?",
      answer:
        "CureLogics excels in software development with a team of skilled professionals dedicated to delivering innovative and high-quality solutions tailored to your requirements.",
    },
    {
      question: "What's CureLogics' app development expertise?",
      answer:
        "CureLogics specializes in mobile app development, creating intuitive, feature-rich applications for seamless user experiences across platforms.",
    },
    {
      question: "How does CureLogics develop websites?",
      answer:
        "CureLogics prioritizes user experience and scalability, ensuring your website effectively communicates your brand and achieves your goals.",
    },
    {
      question: "How does CureLogics ensure design excellence?",
      answer:
        "CureLogics' design team combines creativity and expertise to craft visually stunning and user-friendly interfaces that elevate your brand and captivate your audience.",
    },
    {
      question: "What's CureLogics' graphic design expertise?",
      answer:
        "CureLogics employs a collaborative process, combining creativity and strategic thinking to deliver graphic designs that align with your brand identity.",
    },
    {
      question: "What marketing strategies does CureLogics employ?",
      answer:
        "CureLogics employs data-driven marketing strategies to enhance your online presence, drive traffic, & maximize your ROI through targeted campaigns and analytics-driven insights.",
    },
    {
      question: "What e-commerce solutions does CureLogics offer?",
      answer:
        "CureLogics provides end-to-end e-commerce solutions, including platform development, customization, integration, to launch and scale your online store effectively.",
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="w-[80%] mx-auto text-center ">
        <div className="w-full flex flex-col items-center">
          <Heading text={"FAQs"} />
          <h3
            data-aos="zoom-in-down"
            className="mt-2 md:w-1/2 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Answers to Your Common Questions
          </h3>
        </div>
      </div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {faqs.map((faq, index) => (
          <div
            data-aos="fade-left"
            key={index}
            className="flex items-start gap-2  bg-white rounded-lg hover:shadow-lg "
          >
            <Image
              width={20}
              height={20}
              src="/images/icon.png"
              alt="Icon"
              // className="w-10 h-10"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h4>
              <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
