import React from 'react';

export default function TitleStep({ titlestep, subtitlestep, description }) {
  return (
    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0   ">
      <h2 class="font-medium title-font text-white text-xl">{titlestep}</h2>
      <p className="mb-10">{subtitlestep}</p>
      <p class="leading-relaxed">{description}</p>
    </div>
  );
}
