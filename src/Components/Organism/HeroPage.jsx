import React from 'react';
import HeroLeft from '../Molecules/HeroLeft';
import HeroRight from '../Molecules/HeroRight';
export default function HeroPage() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
