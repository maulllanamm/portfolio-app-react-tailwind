import React from 'react';
import Brand from '../Atoms/Brand';
import Switch from '../Atoms/Switch';
import Nav from '../Molecules/Nav';

export default function HeroHeader() {
  return (
    <div
      className="navbar bg-base-100 p-5"
      data-aos="fade-down"
      data-aos-duration="1000">
      <Brand />
      <Nav />
      <Switch />
    </div>
  );
}
