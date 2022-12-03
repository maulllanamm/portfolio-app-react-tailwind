import React from 'react';

export default function ProjectHeader({ title, subtitle }) {
  return (
    <div class="flex flex-col">
      <div class="h-1 bg-gray-800 rounded overflow-hidden mb-5">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          {title}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{subtitle}</p>
      </div>
    </div>
  );
}
