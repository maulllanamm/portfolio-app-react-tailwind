import React from 'react';
import ExperienceStep from '../Components/Molecules/ExperienceStep';
import ExperienceBody from '../Components/Organism/ExperienceBody';
import ExperienceHeader from '../Components/Organism/ExperienceHeader';

export default function Experience() {
  return (
    <section class="text-gray-400 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <ExperienceHeader
          title="My Experience"
          subtitle="This is my full experience in web programming"
        />
        <ExperienceBody />
      </div>
    </section>
  );
}
