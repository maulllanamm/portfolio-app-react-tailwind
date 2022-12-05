import React from 'react';
import SkillsBody from '../Components/Organism/SkillsBody';
import SkillsHeader from '../Components/Organism/SkillsHeader';

export default function Skills() {
  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 py-24 mx-auto">
        <SkillsHeader
          title="My Skills"
          subtitle="These are my skills in frontend and backend that will be used when your application is deployed to the cloud."
        />
        <SkillsBody title="Frontend" />
        <SkillsBody title="Backend" />
      </div>
    </section>
  );
}
