import React from "react";
import Counter from "../../../utils/ui/Counter";

const NumberBlock = () => {
    const numbers = [
        { value: 1000, text: "Членів організації" },
        { value: 10, text: "Міст України" },
        { value: 2019, text: "Засновано" },
    ];

    return (
        <section className="flex flex-row justify-between py-40 px-16">
            {numbers.map((number) => (
                <Counter number={number.value} title={number.text} />
            ))}
        </section>
    );
};

export default NumberBlock;
