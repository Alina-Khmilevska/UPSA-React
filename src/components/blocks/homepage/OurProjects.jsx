import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../shared/cards/ProjectCard";
import ProjectCardLoader from "../../skeletons/ProjectCardLoader";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useGetProjectsQuery } from "../../../redux/api/api.js";

const OurProjects = () => {
  const { data, isLoading } = useGetProjectsQuery({ type: "our" });

  if (isLoading) {
    return (
      <div className="flex flex-row flex-wrap justify-between py-20 px-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col w-1/3 px-4 mb-8">
            <ProjectCardLoader className="h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <section className="flex flex-row flex-wrap justify-between py-20 px-16">
        {data.map((project, index) => (
          <div key={index} className="flex flex-col w-1/3 px-4 mb-8">
            <ProjectCard project={project} />
          </div>
        ))}
        <div className="w-1/2 pt-32 mb-8 ">
          <Link to="/projects">
            <Button
              color="black"
              className="inline-flex  items-center justify-center bg-transparent "
            >
              <span className=" text-black text-lg  font-Century Gothic">
                View all projects
                <hr class=" bg-gray-200 border-2 " />
              </span>
              <HiOutlineArrowRight className="ml-2  h-20 w-20 transition-transform duration-200 ease-in-out -rotate-45" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
