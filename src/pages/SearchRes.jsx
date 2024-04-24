import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Main from "../components/section/Main";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const SearchRes = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get("term");

    if (term) {
      setSearchTerm(term);
      const fetchData = async () => {
        try {
          const result = await axios.get(
            `${
              process.env.REACT_APP_API_URL
            }/api/search?term=${encodeURIComponent(term)}`
          );
          setResults(result.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [location.search]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/searchres?term=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="searchres_search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="브랜드,상품,프로필,태그 등"
        />
        {searchTerm && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => setSearchTerm("")}
            className="clear_btn"
          />
        )}
      </form>

      <Main>
        <ul className="search_result_lists">
          {results.length > 0 ? (
            results.map((product) => (
              <li key={product.itemKey} className="search_result_wrap">
                <Link>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="search_item_img"
                  />
                  <div className="search_item_desc">
                    <p className="brandName">
                      {capitalizeFirstLetter(product.brand)}
                    </p>
                    <p className="productName">{product.title}</p>
                    <p className="price">
                      {new Intl.NumberFormat("ko-KR").format(
                        product.launchPrice
                      )}
                      원
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div>
              <p>검색하신 결과가 없습니다.</p>
            </div>
          )}
        </ul>
      </Main>
    </>
  );
};

export default SearchRes;
