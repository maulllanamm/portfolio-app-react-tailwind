import React from 'react';

export default function ExperienceHeader({ title, subtitle }) {
  return (
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        {title}
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{subtitle}</p>
    </div>
  );
}
