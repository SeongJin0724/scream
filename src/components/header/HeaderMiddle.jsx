import React from "react";
import Logo from "../../assets/image/screamlogo.png";
import { Link /*seLocationu*/ } from "react-router-dom";
// import Search from "./../content/Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { headerMiddleMenus } from "../data/header";

export default function HeaderMiddle() {
  // const [showSearch, setShowSearch] = useState(false);

  // const location = useLocation();

  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };

  return (
    <div className="header_middle_wrap">
      <h1 className="logo">
        <Link to="/">
          <img src={Logo} alt="LSJ" />
        </Link>
      </h1>
      {/* <nav>
        <ul className="menu_ul">
          {headerMiddleMenus.map((menu, key) => (
            <>
              <li
                key={key}
                id="menu_li"
                className={location.pathname === menu.src ? "active" : ""}
              >
                <Link to={menu.src} className="menu_text">
                  {menu.title}
                </Link>
              </li>
            </>
          ))}
          <li id="menu_li">
            <Link
              to="#"
              onClick={toggleSearch}
              className="menu_text search_icon"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
        </ul>
      </nav> */}

      {/* {showSearch && <Search />} */}
    </div>
  );
}
