import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import TitleBlock from "../../shared/titles/TitleBlock.jsx";

const LocalRepresentatives = () => {
  const data = [
    {
      city: "Lviv",
      picture: "./image1",
      full_name: "Anastasia Sobolevska",
      position: "President UPSA",
      mail: "mail",
      phone: "phone number",
    },
    {
      city: "Kyiv",
      picture: "./image2",
      full_name: "Olga Skjaskf",
      position: "President UPSA",
      mail: "jksjks",
      phone: "09595827272",
    },
    {
      city: "Lviv",
      picture: "./image3",
      full_name: "Natalia",
      position: "President of the World",
      mail: "president@ya.com",
      phone: "000000000",
    },
    {
      city: "Kharkiv",
      picture: "./image4",
      full_name: "Pes Patron",
      position: "President UPSA",
      mail: "pes@gmail.com",
      phone: "no phone",
    },
    {
      city: "Lviv",
      picture: "./image5",
      full_name: "Full name",
      position: "President UPSA",
      mail: "email",
      phone: "phone",
    },
    {
      city: "Kharkiv",
      picture: "./image6",
      full_name: "Hgjhdhj Hkj",
      position: "position",
      mail: "email@email.com",
      phone: "876574833",
    },
  ];
  const renderMembers = (members, index) => (
    <TeamMemberCard key={index} {...members} />
  );

  const renderMembersByCity = () => {
    /* It creates an array containing the cities of all members 
    and then filters it to include only unique values, ensuring that each city is represented only once in the resulting array. */

    const cities = data
      .map((member) => member.city)
      .filter(
        (city, index, citiesArray) => citiesArray.indexOf(city) === index
      );

    return cities.map((city, index) => (
      <div key={index} className="mb-8">
        <p className="text-[40px] mb-4 mt-[70px]">{city}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* It filters the data array to include only members whose city matches the current city. */}

          {data
            .filter((member) => member.city === city)
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
