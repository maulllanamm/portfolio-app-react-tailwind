import React from 'react';

export default function Nav() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Project</a>
        </li>
      </ul>
    </div>
  );
}
