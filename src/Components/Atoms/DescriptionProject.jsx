import React from 'react';

export default function DescriptionProject({ title, desc }) {
  return (
    <>
      <h2 class="text-xl font-medium title-font text-white mt-5">{title}</h2>
      <p class="text-base leading-relaxed mt-2">{desc}</p>
      <a href="#" class="text-indigo-400 inline-flex items-center mt-3">
        Check out
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </>
  );
}
