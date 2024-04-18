import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Search from "../contents/Search";

export default function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState(false);

  const onSearch = () => {
    setSearch(true);
  };

  const onClose = () => {
    setSearch(false);
  };

  return (
    <div className="header">
      <ul className="user-menu">
        <li
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </li>
        <li
          onClick={() => {
            navigate("/saved");
          }}
        >
          관심
        </li>
        <li
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </li>
        <li onClick={onSearch}>
          <FiSearch />
        </li>
      </ul>

      <header
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        SCREAM
      </header>

      <ul className="category">
        <li
          onClick={() => {
            navigate("/men");
          }}
        >
          남성
        </li>
        <li
          onClick={() => {
            navigate("/women");
          }}
        >
          여성
        </li>
      </ul>

      {search && <Search onClose={onClose} />}
    </div>
  );
}
