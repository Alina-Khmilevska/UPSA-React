import React from "react";
import { Card } from 'flowbite-react';
import getFullImageUrl from '../../../utils/formatImageUrl';

const TeamMemberCard = ({ picture, full_name, position, mail, phone }) => (
  <Card
    className="flex flex-col bg-gray-400 h-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
  >
    <div className="w-full">
      <img
        src={getFullImageUrl(picture)}
        alt={full_name}
        style={{
          width: '526px',
          height: '427px',
          objectFit: 'cover'
        }}
      />
    </div>
    <div className="ml-2 mb-14">
      <h3 className="text-3xl font-semibold">{full_name}</h3>
      <p className="text-2xl font-semibold">{position}</p>
      {mail && (
        <a href={`mailto:${mail}`} className="block mt-3 text-lg font-normal text-black-600 hover:text-blue-700 transition duration-300">
          {mail}
        </a>
      )}
      {phone && (
        <a href={`tel:${phone}`} className="block mt-1 text-lg font-normal hover:text-blue-700 transition duration-300">
          {phone}
        </a>
      )}
    </div>
  </Card>
);

export default TeamMemberCard;
