import React from "react";
import "./css-comp/header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <p><a href="/">bvbz</a></p>
        </div>
        <ul>
          <li><a className="link">Таблица Менделеева</a></li>
          <li><a className="link">Химические Уравнения</a></li>
          <li><a className="link">Частые вопросы</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
