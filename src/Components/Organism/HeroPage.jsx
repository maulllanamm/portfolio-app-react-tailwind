import React, { useEffect } from 'react';
import HeroLeft from '../Molecules/HeroLeft';
import HeroRight from '../Molecules/HeroRight';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroPage() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 700;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
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
