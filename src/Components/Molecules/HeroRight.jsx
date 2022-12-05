import React from 'react';
import ProfileImage from '../../Assets/Image/pas-foto.png';

export default function HeroRight() {
  return (
    <div
      className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
      data-aos="fade-left"
      data-aos-delay="1400"
      data-aos-duration="1000">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={ProfileImage}
      />
    </div>
  );
}
