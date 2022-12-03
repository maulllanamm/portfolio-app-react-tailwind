import React from 'react';
import ProjectClothingVue from '../../Assets/Project/Clothing store vue.png';

export default function ImageProject() {
  return (
    <div class="rounded-lg h-64 overflow-hidden">
      <img
        alt="content"
        class="object-cover object-center h-full w-full"
        src={ProjectClothingVue}
      />
    </div>
  );
}
