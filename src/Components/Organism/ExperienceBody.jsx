import React from 'react';
import ExperienceStep from '../Molecules/ExperienceStep';

export default function ExperienceBody() {
  return (
    <>
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto ">
        <ExperienceStep
          numberstep={''}
          title="magang"
          titlestep="Intership"
          subtitlestep="Perum Peruri"
          description="● Created UI Design for Frontend
        ● Created Databases constructor and relation
      ● Created Flowchart
      ● Created Logic Backend
      ● Utilized: Bootstrap, PHP, CodeIgniter 4, Mysql, Visio
      "
        />
      </div>
      <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto ">
        <ExperienceStep
          numberstep={''}
          title="ummi"
          titlestep="Work Contract"
          subtitlestep="RS UMMI Bogor"
          description="● Refactor and improve existing code
          ● Design, develop, and maintain code
          ● Develop E-Learning website
          ● Utilized: Bootstrap, PHP, JQuery, HTML, CSS, CodeIgniter 3, Mysql, Git, Github
      "
        />
      </div>
    </>
  );
}
