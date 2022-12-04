import React from 'react';

export default function ProjectHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden mb-5">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          {title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{subtitle}</p>
      </div>
    </div>
  );
}
