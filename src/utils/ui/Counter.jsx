import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={5} className="counter font-semibold text-7xl leading-normal" end={number} />
      <h4 className="font-light text-5xl leading-normal ">{title}</h4>
    </div>
  );
}
