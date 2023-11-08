
import React from "react";
import TitleBlock from '../../shared/titles/TitleBlock';
import TeamMemberCard from './TeamMemberCard';
import { useGetTeamKyivQuery } from '../../../redux/api/api.js';

const OurTeam = () => {
  const { data, isLoading, error } = useGetTeamKyivQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <TitleBlock title="Наша команда" />
        <br></br>
        <p className="text-[40px] mb-4">м. Київ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
 