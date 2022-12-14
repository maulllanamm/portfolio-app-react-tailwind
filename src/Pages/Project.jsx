import React from 'react';
import ProjectBody from '../Components/Organism/ProjectBody';
import ProjectHeader from '../Components/Organism/ProjectHeader';

export default function Project() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <ProjectHeader
          title="My Portfolio Project"
          subtitle="Check out all of my portfolio projects here"
        />
        <ProjectBody />
      </div>
    </section>
  );
}
