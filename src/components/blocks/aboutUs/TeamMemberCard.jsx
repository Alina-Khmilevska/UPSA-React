// This Component could be reusable

import React from "react";

const TeamMemberCard = ({ imageSrc, name, position, email, phone }) => (
  <div className="bg-gray-400 p-4 w-526 rounded-lg">
    {imageSrc && (
      <img src={imageSrc} alt={name} className=" h-[427px] mx-auto" />
    )}
    <div className="ml-6 mb-24">
      <h3 className="text-3xl font-semibold">{name}</h3>
      <p className="text-3xl font-semibold">{position}</p>
      <p className="text-lg font-normal mt-6">{email}</p>
      <p className="text-lg font-normal">{phone}</p>
    </div>
  </div>
);

export default TeamMemberCard;
