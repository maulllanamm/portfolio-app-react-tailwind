import React from 'react';
import Button from '../Atoms/Button';
import ButtonOutline from '../Atoms/ButtonOutline';

export default function HeroLeft() {
  return (
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1
        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
        data-aos="fade-right"
        data-aos-delay="1100"
        data-aos-duration="1000">
        Hai, My name is Maulana Muhammad
        <br className="hidden lg:inline-block" />
        Web Developer
      </h1>
      <p
        className="mb-8 leading-relaxed"
        data-aos="fade-right"
        data-aos-delay="1200"
        data-aos-duration="1000">
        Build and Develop frontend & backend web application. I can help
        everyone build their business. it's such a happiness for me. so, let me
        help you!
      </p>
      <div
        className="flex justify-center"
        data-aos="fade-right"
        data-aos-delay="1300"
        data-aos-duration="1000">
        <Button title="Hire Me" />
        <ButtonOutline />
      </div>
    </div>
  );
}
