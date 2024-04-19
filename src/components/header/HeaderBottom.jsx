import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { headerBottomMenus } from "./../data/header";
import Search from "../contents/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function HeaderBottom() {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
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
        <li id="menu_li">
          <Link to="#" onClick={toggleSearch} className="menu_text search_icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </li>
      </ul>
      {showSearch && <Search />}
    </nav>
  );
}
