import React from 'react';
import ImageStep from '../Atoms/ImageStep';
import LineStep from '../Atoms/LineStep';
import TitleStep from '../Atoms/TitleStep';

export default function ExperienceStep({
  numberstep,
  title,
  titlestep,
  subtitlestep,
  description,
}) {
  return (
    <>
      <LineStep numberstep={numberstep} />
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row ">
        <ImageStep title={title} />
        <TitleStep
          titlestep={titlestep}
          subtitlestep={subtitlestep}
          description={description}
        />
      </div>
    </>
  );
}
