import React from "react";
import EventElement from "./EventElement";
import { useGetEventsQuery } from "../../../../redux/api/api.js";

const UpsaEvents = () => {

    const { data, isLoading } = useGetEventsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-row flex-wrap justify-between py-20 px-16">

            {data.slice(0, 3).map((item, index) => (
                <EventElement
                    key={index}
                    imgUrl={item.image}
                    title={item.title}
                    body={item.body}
                    date={item.date}
                    id={item.id}
                />
            ))}
        </section>
    );
};

export default UpsaEvents;
