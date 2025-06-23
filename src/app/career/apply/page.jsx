"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import InputBox from "@/components/globalcomponents/InputBox";
import { Building2, Link2, Mail, MapPinHouse, UserPen } from "lucide-react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
const JobApplicationForm = () => {
  const [jobrole, setJobRole] = useState("");
  console.log(jobrole);

  useEffect(() => {
    const Jobtitle = localStorage.getItem("jobTitle");
    setJobRole(Jobtitle);
    window.scrollTo(0, 0); // Reset to the top of the page
  });
  return (
    <div className="flex justify-center w-full  items-center min-h-screen flex-col lg:flex-row  mt-[85px]">
      <div className="h-full w-1/2 grid place-items-center">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/05/15/Vector-Design-of-Check-Job-Application-Graphics-4125266-1.jpg"
          alt="img"
        />
      </div>
      <div className=" w-full lg:w-1/2 flex justify-center items-center md:w-full">
        <div className=" text-rounded-blacklg shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6">Apply as a {jobrole}</h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  label={"Full Name"}
                  icon={<UserPen size={20} />}
                  type={"text"}
                  placeholder={"Enter full name.."}
                />
              </div>

              <div>
                <InputBox
                  label={"Email"}
                  icon={<Mail size={20} />}
                  type={"text"}
                  placeholder={"abc@gmail.com"}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputBox
                label={"Address"}
                icon={<MapPinHouse size={20} />}
                type={"text"}
                placeholder={"Enter your Adress"}
              />
              <InputBox
                label={"City"}
                icon={<Building2 size={20} />}
                type={"text"}
                placeholder={"Enter your city"}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <InputBox
                  label={"LinkedIn"}
                  icon={<Link2 size={20} />}
                  type={"text"}
                  placeholder={"Enter your linkedin link"}
                />
              </div>
              <div>
                <InputBox
                  label={"Portfolio"}
                  icon={<Link2 size={20} />}
                  type={"text"}
                  placeholder={"Enter your portfolio link"}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <InputBox
                  label={"Date"}
                  icon={<MdDateRange />}
                  type={"date"}
                  placeholder={""}
                />
              </div>
              <div>
                <InputBox
                  label={"upload your resume"}
                  icon={<FaFileAlt />}
                  type={"file"}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Cover Letter:
              </label>
              <textarea
                placeholder="Write your cover letter here..."
                className="w-full p-2 rounded-md  outline-none  focus:border-blue-600 border border-black text-black focus:outline-none "
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
