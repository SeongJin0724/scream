import React from "react";

import { Link, useLocation } from "react-router-dom";
import { headerBottomMenus } from "./../data/header";

export default function HeaderBottom() {
  const location = useLocation();
  return (
    <nav className="headerBottom_wrap">
      <ul className="headerBottom_ul">
        {headerBottomMenus.map((menu, key) => (
          <li
            key={key}
            id="headerBottom_li"
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link
              to={menu.src}
              id="headerBottom_a"
              className={location.pathname === menu.src ? "active" : ""}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
