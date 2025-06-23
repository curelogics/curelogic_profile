"use client";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const TeamMembers = () => {
  return (
    <>
      <section className="w-full lg:h-auto  py-6">
        <div className="w-full mx-auto md:w-[100%] lg:w-[80%] 2xl:w-[80%] h-full flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-red-500 font-bold text-lg">Team Members</h1>
            <h2
              data-aos="fade-down"
              className="text-2xl md:text-4xl font-bold text-center"
            >
              Meet the Brilliant Minds Behind CureLogics' Success
            </h2>
          </div>
          <div className="w-full relative h-full flex flex-col  items-center justify-center gap-8 ">
            <div className="flex justify-center items-center">
              <TeamMemberCard
                title={"Founder & CEO"}
                desc={"Curelogics visionary leader"}
                img={"/images/team1.png"}
              />
            </div>

            <div className="  lg:top-[18%] w-[85%] lg:absolute flex flex-col lg:flex-row justify-around items-center gap-8">
              <TeamMemberCard
                title={"MERN Stack Developer"}
                desc={"Web Developer"}
                img={"/images/team2.png"}
              />
              <TeamMemberCard
                title={"Full Stack Developer"}
                desc={"Web Developer"}
                img={"/images/team3.png"}
              />
            </div>

            <div className="flex w-full items-center justify-between flex-col lg:flex-row gap-8">
              <TeamMemberCard
                title={"Founder & CEO"}
                desc={"Curelogics visionary leader"}
                img={"/images/team4.png"}
              />
              <Link
                href={"/career"}
                className="relative group lg:block bottom-0 hidden self-end w-40 h-32 border border-red-600 overflow-hidden rounded-full shadow-lg "
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#E21E2D] to-[#2D4E93] translate-y-[90%] group-hover:translate-y-0 transition-all duration-500 border-radus"></div>
                <div className="relative z-10 flex items-center justify-center h-full gap-2 px-3 text-xl font-bold cursor-pointer text-gray-800 group-hover:text-white">
                  <FaArrowRight />
                  Join Now
                </div>
              </Link>

              {/* Team Member Card with Transition Effect */}
              <div className="transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <TeamMemberCard
                  title={"Founder & CEO"}
                  desc={"Curelogics visionary leader"}
                  img={"/images/team4.png"}
                />
              </div>

              <Link
                href={"/career"}
                className="relative group bottom-0 lg:hidden self-center w-40 h-36 border border-red-500 overflow-hidden rounded-full shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-blue-500 translate-y-[95%] group-hover:hidden transition-transform duration-300 rounded-t-full"></div>
                <div className="relative z-10 flex items-center justify-center h-full gap-2 px-3 text-xl font-bold cursor-pointer text-gray-800 group-hover:text-white">
                  <FaArrowRight />
                  Join Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;
