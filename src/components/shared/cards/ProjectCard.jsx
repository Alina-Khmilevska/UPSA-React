// ProjectCard.jsx
import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import getFullImageUrl from "../../../utils/formatImageUrl";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card
        className="flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-8 bg-[#DAFFE2] rounded-t-mainRadius rounded-bl-mainRadius rounded-br-[40px]"
        renderImage={() => (
          <img
            className="rounded-mainRadius max-w-[100%] h-[35%] object-cover"
            src={getFullImageUrl(project.image)}
            alt={getFullImageUrl(project.image)}
          />
        )}
      >
        <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
          <h2 className="text-[31.67px] font-light font-alexandria tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <div
            className="font-normal font-Century Gothic text-gray-700 dark:text-gray-400 flex-grow  mt-5  "
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
        </Link>
      </Card>
      <div className="flex items-center justify-between mt-[-75px] z-20  ml-12">
        <button
          type="button"
          class="w-[60%] h-[50px] text-black bg-yellow-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-light rounded-mainRadius text-lg px-7 py-3 text-center me-2 mr-10 dark:focus:ring-yellow-900"
        >
          {project.title}
        </button>

        <div className=" flex justify-end items-center  w-20 h-20 bg-white rounded-[100%]  ">
          <button
            type="button"
            class="text-black bg-yellow-200 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-thin rounded-mainRadius text-sm p-3 text-center inline-flex  items-center me-2  dark:focus:ring-blue-800 -rotate-45"
          >
            <svg
              class="w-10 h-10 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
