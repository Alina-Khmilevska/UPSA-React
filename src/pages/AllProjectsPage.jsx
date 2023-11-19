// AllProjectsPage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import { useGetProjectsQuery } from "../redux/api/api.js";
import TitleBlock from "../components/shared/titles/TitleBlock";
import getFullImageUrl from "../utils/formatImageUrl.js";
import ExternalButton from "../components/shared/buttons/ExternalButton";

const AllProjectsPage = () => {

    const { data, isLoading } = useGetProjectsQuery({ type: "all" });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <div className="mt-[100px]"></div>
            <TitleBlock title="ur Projects" isLogo={true} />
            <div className="flex flex-col">
                {data.map((project, index) => (
                    <div className="flex flex-row items-inherit justify-start min-w-full  bg-green-100 rounded-[80px] my-[30px] pl-[50px] py-[50px]">
                        <img className="rounded-[80px] w-[500px] mx-auto" alt={project.title} src={getFullImageUrl(project.image)}></img>
                        <div className="flex flex-col justify-between px-4 py-10 w-[75%]">
                            <div className="w-full px-4 py-2 mt-4">
                                <h1 className="text-black text-subtitle font-medium">{project.title}</h1>
                                <p className="text-black text-body font-light mt-2" dangerouslySetInnerHTML={{ __html: project.body }}></p>
                            </div>
                            <ExternalButton
                        link={'/projects/' + project.id}
                        text={'Read More'}
                    />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default AllProjectsPage;
