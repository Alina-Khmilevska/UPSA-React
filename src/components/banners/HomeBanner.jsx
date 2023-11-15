import React from "react";
import ExternalButton from "../shared/buttons/ExternalButton";
import { useGetBlockQuery } from "../../redux/api/api.js";

const HomeBanner = () => {
    const { data, error, isLoading } = useGetBlockQuery({ type: 'showcase', endpoint: 'homepage' });
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-5xl leading-tight">
                        {data.title}
                    </h1>
                    <div className="text-2xl mt-6 mr-12">
                        <p dangerouslySetInnerHTML={{ __html: data.body }} />
                    </div>
                </div>
                <ExternalButton link={data.link_url} text={data.link_title} />
            </div>
            <img src={data.image} alt="placeholder" width="800" height="600" />
        </section>
    );
};

export default HomeBanner;
