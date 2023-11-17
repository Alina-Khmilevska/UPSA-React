import React from "react";
import TitleBlock from "../../shared/titles/TitleBlock";
import TeamMemberCard from "./TeamMemberCard";
import {
  useGetTeamLvivQuery,
  useGetTeamIfQuery,
  useGetTeamKharkivQuery,
} from "../../../redux/api/api.js";

const LocalRepresentatives = () => {
  const {
    data: dataLviv,
    isLoading: isLoadingLviv,
    error: errorLviv,
  } = useGetTeamLvivQuery();

  const {
    data: dataIf,
    isLoading: isLoadingIf,
    error: errorIf,
  } = useGetTeamIfQuery();

  const {
    data: dataKharkiv,
    isLoading: isLoadingKharkiv,
    error: errorKharkiv,
  } = useGetTeamKharkivQuery();

  if (isLoadingLviv || isLoadingIf || isLoadingKharkiv) {
    return <div>Loading...</div>;
  }

  if (errorLviv || errorIf || errorKharkiv) {
    return <div>Error: {errorLviv || errorIf || errorKharkiv}</div>;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <TitleBlock title="Local Representatives" />
        <p className="text-[40px] mb-[45px] mt-[70px]">Lviv</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataLviv.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        <p className="text-[40px] mb-[45px] mt-[70px]">Ivano-Frankivsk</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataIf.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        <p className="text-[40px] mb-[45px] mt-[70px]">Kharkiv</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataKharkiv.slice(0, 4).map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalRepresentatives;
