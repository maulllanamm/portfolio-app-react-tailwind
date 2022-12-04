import React from 'react';
import SkillsBody from '../Components/Organism/SkillsBody';
import SkillsHeader from '../Components/Organism/SkillsHeader';

export default function Skills() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SkillsHeader
          title="My Skills"
          subtitle="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them."
        />
        <SkillsBody title="Frontend" />
        <SkillsBody title="Backend" />
      </div>
    </section>
  );
}
