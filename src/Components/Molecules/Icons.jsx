import React from 'react';
import ApiIcon from '../../Assets/Image/api.svg';
import BootstrapIcon from '../../Assets/Image/bootstrap.svg';
import CodeigniterIcon from '../../Assets/Image/codeigniter.svg';
import CssIcon from '../../Assets/Image/css.svg';
import ExpressIcon from '../../Assets/Image/express.svg';
import HtmlIcon from '../../Assets/Image/html.svg';
import JsIcon from '../../Assets/Image/js.svg';
import MongodbIcon from '../../Assets/Image/mongodb.svg';
import MysqlIcon from '../../Assets/Image/mysql.svg';
import NodejsIcon from '../../Assets/Image/nodejs.svg';
import PhpIcon from '../../Assets/Image/php.svg';
import ReactIcon from '../../Assets/Image/react.svg';
import TailwindIcon from '../../Assets/Image/tailwind.svg';
import VueIcon from '../../Assets/Image/vue.svg';

export default function Icons({ width }) {
  return (
    <div className="icons absolute flex">
      <img src={HtmlIcon} width={width} alt="Html Icon" />
      <img src={CssIcon} width={width} alt="Css Icon" />
      <img src={JsIcon} width={width} alt="Javasctipt Icon" />
      <img src={BootstrapIcon} width={width} alt="Bootstrap Icon" />
      <img src={TailwindIcon} width={width} alt="Tailwind Icon" />
      <img src={ReactIcon} width={width} alt="React Icon" />
      <img src={VueIcon} width={width} alt="Vue Icon" />
      <img src={NodejsIcon} width={width} alt="NodeJS Icon" />
      <img src={ExpressIcon} width={width} alt="Express Icon" />
      <img src={MongodbIcon} width={width} alt="Mongodb Icon" />
      <img src={MysqlIcon} width={width} alt="MysqlIcon" />
      <img src={PhpIcon} width={width} alt="Php Icon" />
      <img src={CodeigniterIcon} width={width} alt="Codeigniter Icon" />
      <img src={ApiIcon} width={width} alt="API Icon" />
    </div>
  );
}
