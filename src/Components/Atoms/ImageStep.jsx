import React from 'react';
import ImageMagang from '../../Assets/Image/magang.jpeg';
import ImageUmmi from '../../Assets/Image/ummi.jpeg';

export default function ImageStep({ title }) {
  if (title === 'magang') {
    return (
      <img
        src={ImageMagang}
        className="rounded-xl  lg:w-96 md:w-0 sm:w-32"
        alt="magang"
      />
    );
  } else if (title === 'ummi') {
    return (
      <img
        src={ImageUmmi}
        className="rounded-xl lg:w-96 md:w-0 sm:w-32"
        alt="ummi"
      />
    );
  } else {
    return (
      <img
        src={ImageMagang}
        className="rounded-xl lg:w-96 md:w-0 sm:w-32"
        alt="bootcamp"
      />
    );
  }
}
