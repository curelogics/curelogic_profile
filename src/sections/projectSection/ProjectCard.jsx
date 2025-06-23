import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const ProjectCard = ({ project }) => {
  return (
    <div className=" md:h-full md:w-full  box-shadow m-4 mb-8 rounded-lg ">
      <div className="  mx-auto  md:m-0 rounded-lg overflow-hidden my-4">
        {/* Project Image */}
        <a href={project.link} target="_blank">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg   "
          />
        </a>
        {/* Project Details */}
        <div className="w-full p-4 box-shaow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 w-3/4">
              <a href={project.link} target="_blank" className="text-blue-400">
                {project.title}
              </a>
            </h3>
            <button className="group w-10 h-10 rounded-full flex items-center justify-center border -rotate-40 cursor-pointer hover:bg-gradient-to-r from-red-500 to-blue-500 honver:text-white">
              <FaArrowRight className="  group-hover:text-white" />
            </button>
          </div>
          <p className="text-gray-600 text-sm  font">
            <i>{project.description}</i>
          </p>
        </div>
        {/* Arrow Icon */}
      </div>
    </div>
  );
};

export default ProjectCard;
