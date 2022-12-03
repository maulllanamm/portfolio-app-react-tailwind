import React from 'react';
import Brand from '../Atoms/Brand';
import Switch from '../Atoms/Switch';
import Nav from '../Molecules/Nav';

export default function HeroHeader() {
  return (
    <div className="navbar bg-base-100">
      <Brand />
      <Nav />
      <Switch />
    </div>
  );
}
