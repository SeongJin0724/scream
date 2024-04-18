import React from "react";

import { Link } from "react-router-dom";
import { headerTopMenus } from "./../data/header";

export default function HeaderTop() {
  return (
    <nav className="header_info">
      <ul className="info_ul">
        {headerTopMenus.map((info, key) => (
          <li key={key} className="info_li">
            <Link to={info.src} className="info_text">
              {info.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
