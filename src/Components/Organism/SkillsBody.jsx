import React from 'react';
import JsonIcon from '../../Utils/Icons.json';
import SkillsCard from '../Molecules/SkillsCard';

export default function SkillsBody({ title }) {
  let tipe = title.toLowerCase();
  let jsonicon = tipe === 'frontend' ? JsonIcon.frontend : JsonIcon.backend;
  return (
    <>
      <div className="flex flex-col text-center w-full my-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap -m-2">
        {jsonicon.map(({ icon, name, level }) => {
          return (
            <SkillsCard
              skillsicon={icon}
              skillsname={name}
              skillslevel={level}
              key={name}
            />
          );
        })}
      </div>
    </>
  );
}
