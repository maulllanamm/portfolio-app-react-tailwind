import React from 'react';
import HeroLeft from '../Molecules/HeroLeft';
import HeroRight from '../Molecules/HeroRight';
import Icons from '../Molecules/Icons';

export default function HeroPage() {
  return (
    <section className="text-gray-400 body-font relative">
      {/* <Icons width={135} /> */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
