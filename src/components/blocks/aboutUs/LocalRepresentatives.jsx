// All parts with {phone} should be changed to {city}

import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import TitleBlock from "../../shared/titles/TitleBlock.jsx";
import { useGetTeamQuery } from "../../../redux/api/api.js"; //could be changed

const LocalRepresentatives = () => {
  const { data, isLoading, error } = useGetTeamQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderMembers = (members, index) => (
    <TeamMemberCard key={index} {...members} />
  );

  const renderMembersByCity = () => {
    /* It creates an array containing the cities (temporary - phone numbers) of all members 
    and then filters it to include only unique values, ensuring that each city is represented only once in the resulting array. */

    const cities = data
      .map((member) => member.phone)
      .filter(
        (phone, index, citiesArray) => citiesArray.indexOf(phone) === index
      );

    return cities.map((phone, index) => (
      <div key={index} className="mb-8">
        <p className="text-[40px] mb-4 mt-[70px]">
          {"Placeholder for City"} {phone}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* It filters the data array to include only members whose city (temporary - phone numbers) matches the current city. */}

          {data
            .filter((member) => member.phone === phone)
            .map((member, index) => renderMembers(member, index))}
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-8">
      <section>
        <TitleBlock title="Local Representatives" />
        {renderMembersByCity()}
      </section>
    </div>
  );
};

export default LocalRepresentatives;
