import React from 'react';
import HeroLeft from '../Molecules/HeroLeft';
import HeroRight from '../Molecules/HeroRight';
export default function HeroPage() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
