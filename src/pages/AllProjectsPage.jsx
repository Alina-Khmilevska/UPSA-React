// AllProjectsPage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import { useGetProjectsQuery } from "../redux/api/api.js";
import TitleBlock from "../components/shared/titles/TitleBlock";
import getFullImageUrl from "../utils/formatImageUrl.js";

const AllProjectsPage = () => {

    const { data, isLoading } = useGetProjectsQuery({ type: "all" });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <TitleBlock title="Our Projects" />
            <div className="flex flex-col">
                {data.map((project, index) => (
                    <div className="flex flex-row justify-between mt-10">
                        <img src={getFullImageUrl(project.image)} alt="Project" width="320" className="img-width" />
                        <div className="flex flex-col justify-between upsa-bg-light-grey px-20 py-20">
                            <h2 className="text-4xl font-medium">{project.title}</h2>
                            <p className="text-2xl mt-10" dangerouslySetInnerHTML={{ __html: project.body }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default AllProjectsPage;
