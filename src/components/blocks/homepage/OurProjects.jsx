import React from 'react';
import { useDataFetcher } from '../../../redux/hooks/useDataFetcher';
import API_ENDPOINTS from '../../../redux/endpoints/apiEndpoints';
import ErrorComponent from '../../../utils/ui/ErrorComponent';
import { Link } from "react-router-dom";
import ProjectCard from '../../shared/cards/ProjectCard';
import ProjectCardLoader from '../../skeletons/ProjectCardLoader';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const OurProjects = () => {
    const { data, loading, error } = useDataFetcher(API_ENDPOINTS.PROJECTS);
    if (loading) {
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
            <ErrorComponent error={error} />

            <section className="flex flex-row flex-wrap justify-between py-20 px-16">
                {data.map((project, index) => (
                    <div key={index} className="flex flex-col w-1/3 px-4 mb-8">
                        <ProjectCard project={project} />
                    </div>
                ))}
                <div className="flex flex-col w-1/2 px-4 mb-8 items-start justify-center">
                    <Link to="/projects">
                        <Button color="black" className="button-flex inline-flex  items-center justify-center bg-transparent border-">
                            <span className="inline-flex font-normal text-black text-lg font-semibold"> Дивитися усі проекти
                            </span>
                            <HiOutlineArrowRight className="ml-2 mt-10 h-20 w-20 transition-transform duration-200 ease-in-out" />
                        </Button>
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default OurProjects;
