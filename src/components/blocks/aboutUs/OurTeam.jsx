import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { useDataFetcher } from '../../../redux/hooks/useDataFetcher';
import API_ENDPOINTS from '../../../redux/endpoints/apiEndpoints';
import ErrorComponent from '../../../utils/ui/ErrorComponent';
import ProjectCardLoader from '../../skeletons/ProjectCardLoader';
import TitleBlock from '../../shared/titles/TitleBlock';



const OurTeam = () => {
  const { data, loading, error } = useDataFetcher(API_ENDPOINTS.TEAM_KYIV);
  if (loading) {
    return (
      <div className="flex flex-row flex-wrap justify-between py-20 px-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col w-1/3 px-4 mb-8">
            <ProjectCardLoader className="h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-10">
      <ErrorComponent error={error} />
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
