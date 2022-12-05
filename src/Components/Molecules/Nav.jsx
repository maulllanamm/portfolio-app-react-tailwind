import React from 'react';

export default function Nav() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
          <a>Home</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <a>Experience</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
          <a>Project</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">
          <a>Skills</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
