import React from "react";
import { useGetBlockQuery } from "../../../redux/api/api.js";

const Statistic = () => {
    const { data, error, isLoading } = useGetBlockQuery({ type: 'statistic', endpoint: 'homepage' });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <section className="flex flex-row justify-between py-40 px-16">
            {data.slice(0, 2).map((number) => (
                <div className="flex flex-col items-center">
                    <h3>{number.number}</h3>
                    <p>{number.title}</p>
                </div>
            ))}
             {data.slice(2, 4).map((number) => (
                <div className="flex flex-col items-center background-grey">
                    <h3>{number.number}</h3>
                    <p>{number.title}</p>
                </div>
            ))}
        </section>
    );
};

export default Statistic;
