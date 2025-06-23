"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Heading from "../../components/globalcomponents/Heading";
import Button from "../../components/globalcomponents/Button";

const ContactForm = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 contact-img ">
      <div className="md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-l lg:grid-cols-2 gap-10 items-center ">
        {/* Left Section: Illustration */}
        <div className="flex absolute -z-10 md:relative justify-center items-center  ">
          <DotLottieReact
            height={250}
            // width={100}
            src="https://lottie.host/4d5fc344-5b45-4c7d-8d88-a52b7ed891a3/URGRXMxSo9.lottie"
            loop
            autoplay
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full backdrop-blur-[2px] ">
          <Heading text={"Contact"} />
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            To Connect with CureLogics Send Your Message Today!
          </h3>
          <form className="space-y-2 ">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-2 border-transparent bg-white   rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, red, blue) 0.5",
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-2 border-transparent bg-white focus:ring focus:ring-red-300 focus:border-transparent rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, red, blue) 1",
                }}
              />
              <input
                type="email"
                placeholder="E mail"
                className="w-full p-3 border-2 border-transparent bg-white focus:ring focus:ring-red-300 focus:border-transparent rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, red, blue) 1",
                }}
              />
            </div>

            {/* Email and Phone Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
              <input
                type="text"
                placeholder="Phone No"
                className="w-full p-3 border-2 border-transparent bg-white focus:ring focus:ring-red-300 focus:border-transparent rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, red, blue) 1",
                }}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 border-2 border-transparent bg-white focus:ring focus:ring-red-300 focus:border-transparent rounded-md outline-none"
                style={{
                  borderImage: "linear-gradient(to right, red, blue) 1",
                }}
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full p-3 border-2 border-transparent bg-white outline-none focus:ring-red-300 rounded-md outline-none"
              style={{ borderImage: "linear-gradient(to right, red, blue) 1" }}
              rows={4}
            ></textarea>

            {/* Privacy Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy-policy"
                className="h-5 w-5 text-red-500 focus:ring focus:ring-red-300 border rounded"
              />
              <label
                htmlFor="privacy-policy"
                className="ml-2 text-sm text-gray-600"
              >
                By sending this form I confirm that I have read and accept
                Intellect Soft privacy policy.
              </label>
            </div>

            {/* Submit Button */}

            <div className="flex justify-end w-full">
              <Button text={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
