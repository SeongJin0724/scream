import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/searchres?term=${encodeURIComponent(searchTerm)}`);
      setIsVisible(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="search_wrap">
      <div className="search_inner">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="브랜드,상품,프로필,태그 등"
          />
        </form>
        <span className="close_icon">
          <button className="close_btn" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Search;
