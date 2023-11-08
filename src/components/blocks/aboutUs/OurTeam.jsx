import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const OurTeam = () => {
  const teamMembers = [
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
    {
      imageSrc: "/path",
      name: "Соболевська Анастасія",
      position: "Президент UPSA",
      email: "Пошта",
      phone: "Номер телефону",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-[80px] font-semibold mb-4">Наша команда</h2>
        <p className="text-[50px]">м. Київ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
