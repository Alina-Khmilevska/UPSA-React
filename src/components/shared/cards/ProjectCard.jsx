// ProjectCard.jsx
import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";
import getFullImageUrl from '../../../utils/formatImageUrl';

const ProjectCard = ({ project }) => {
    return (
        <Card
            imgSrc={getFullImageUrl(project.image)}
            className="flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
            <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                </h5>
                <div
                    className="font-normal text-gray-700 dark:text-gray-400 flex-grow overflow-hidden text-ellipsis"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                    dangerouslySetInnerHTML={{ __html: project.body }}
                />
            </Link>
        </Card>
    );
};

export default ProjectCard;
