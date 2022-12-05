import React from 'react';

export default function SkillsHeader({ title, subtitle }) {
  return (
    <div
      className="flex flex-col text-center w-full mb-20"
      data-aos="fade-down"
      data-aos-offset="700"
      data-aos-duration="1000">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        {title}
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{subtitle}</p>
    </div>
  );
}
