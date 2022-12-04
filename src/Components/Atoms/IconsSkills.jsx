import React from 'react';
import HtmlIcon from '../../Assets/Icons/html.svg';
import CssIcon from '../../Assets/Icons/css.svg';
import JsIcon from '../../Assets/Icons/js.svg';
import BootstrapIcon from '../../Assets/Icons/Bootstrap.svg';
import TailwindIcon from '../../Assets/Icons/tailwind.svg';
import ReactIcon from '../../Assets/Icons/react.svg';
import VueIcon from '../../Assets/Icons/vue.svg';
import JquryIcon from '../../Assets/Icons/jquery.svg';
import NodejsIcon from '../../Assets/Icons/nodejs.svg';
import ExpressIcon from '../../Assets/Icons/express.svg';
import MongodbIcon from '../../Assets/Icons/Mongodb.svg';
import JsonIcon from '../../Assets/Icons/Json.svg';
import ApiIcon from '../../Assets/Icons/api.svg';
import PhpIcon from '../../Assets/Icons/php.svg';
import CodeigniterIcon from '../../Assets/Icons/ci.svg';
import MysqlIcon from '../../Assets/Icons/Mysql.svg';
export default function IconsSkills({ skillsicon }) {
  if (skillsicon === 'html') {
    return (
      <img
        alt="html"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={HtmlIcon}
      />
    );
  } else if (skillsicon === 'css') {
    return (
      <img
        alt="css"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={CssIcon}
      />
    );
  } else if (skillsicon === 'javascript') {
    return (
      <img
        alt="javascript"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={JsIcon}
      />
    );
  } else if (skillsicon === 'bootstrap') {
    return (
      <img
        alt="bootstrap"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={BootstrapIcon}
      />
    );
  } else if (skillsicon === 'tailwind') {
    return (
      <img
        alt="tailwind"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={TailwindIcon}
      />
    );
  } else if (skillsicon === 'react') {
    return (
      <img
        alt="react"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={ReactIcon}
      />
    );
  } else if (skillsicon === 'vue') {
    return (
      <img
        alt="vue"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={VueIcon}
      />
    );
  } else if (skillsicon === 'jquery') {
    return (
      <img
        alt="jquery"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={JquryIcon}
      />
    );
  } else if (skillsicon === 'node') {
    return (
      <img
        alt="node"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={NodejsIcon}
      />
    );
  } else if (skillsicon === 'express') {
    return (
      <img
        alt="express"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={ExpressIcon}
      />
    );
  } else if (skillsicon === 'mongodb') {
    return (
      <img
        alt="mongodb"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={MongodbIcon}
      />
    );
  } else if (skillsicon === 'json') {
    return (
      <img
        alt="json"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={JsonIcon}
      />
    );
  } else if (skillsicon === 'api') {
    return (
      <img
        alt="api"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={ApiIcon}
      />
    );
  } else if (skillsicon === 'php') {
    return (
      <img
        alt="php"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={PhpIcon}
      />
    );
  } else if (skillsicon === 'ci') {
    return (
      <img
        alt="ci"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={CodeigniterIcon}
      />
    );
  } else if (skillsicon === 'mysql') {
    return (
      <img
        alt="mysql"
        className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={MysqlIcon}
      />
    );
  }
}
