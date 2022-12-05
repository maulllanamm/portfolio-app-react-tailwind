import React from 'react';
import ExperienceStep from '../Molecules/ExperienceStep';

export default function ExperienceBody() {
  return (
    <>
      <div
        className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto "
        data-aos="fade-down"
        data-aos-offset="700"
        data-aos-duration="1000">
        <ExperienceStep
          numberstep={''}
          title="magang"
          titlestep="Intership"
          subtitlestep="Perum Peruri"
          description="I created UI Design for the front with Figma, for the database constructor and relation I created with MySql. and I used the framework Bootstrap and CodeIgniter when developing. these are the technologies I used: Bootstrap, PHP, CodeIgniter  4, Mysql, and Visio."
        />
      </div>
      <div
        className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto "
        data-aos="fade-down"
        data-aos-offset="700"
        data-aos-duration="1000">
        <ExperienceStep
          numberstep={''}
          title="ummi"
          titlestep="Work Contract"
          subtitlestep="RS UMMI Bogor"
          description="I developed and maintained code for an E-learning website. the website was created for the UMMI Group Project. The website was done for 4 months and I demonstrate the website to the Client. these are the technologies I used: Bootstrap, PHP, JQuery, HTML, CSS, CodeIgniter 3, Mysql, Git, and GitHub.
      "
        />
      </div>
    </>
  );
}
