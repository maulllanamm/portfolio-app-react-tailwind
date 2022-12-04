import React from 'react';
import IconsSkills from '../Atoms/IconsSkills';

export default function SkillsCard({ skillsicon, skillsname, skillslevel }) {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
        <IconsSkills skillsicon={skillsicon} />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium">{skillsname}</h2>
          <p className="text-gray-600">{skillslevel}</p>
        </div>
      </div>
    </div>
  );
}
