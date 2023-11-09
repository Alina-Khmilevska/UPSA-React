
import React from "react";
import TitleBlock from '../../../shared/titles/TitleBlock';
import { useGetNewsQuery } from '../../../../redux/api/api.js';
import CardSlider from "../../../shared/sliders/CardSlider";

const News = () => {
    const { data, isLoading, error } = useGetNewsQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <TitleBlock title="News" />
                <br></br>
                <CardSlider
                    cardData={data}
                />
            </div>
        </section>
    );
};

export default News;
