import React from "react";
import HeaderTop from "./../header/HeaderTop";
import HeaderMiddle from "./../header/HeaderMiddle";
import HeaderBottom from "./../header/HeaderBottom";

export default function Header() {
  return (
    <header id="header" role="banner">
      <div id="header_inner">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </div>
    </header>
  );
}
