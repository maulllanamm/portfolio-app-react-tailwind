import React from 'react';

export default function TitleStep({ titlestep, subtitlestep, description }) {
  return (
    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0   ">
      <h2 className="font-medium title-font text-white text-xl">{titlestep}</h2>
      <p className="mb-10">{subtitlestep}</p>
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}
