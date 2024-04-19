import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/section/Main";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get("term");

    if (term) {
      setSearchTerm(term);
      fetch(`/search?term=${encodeURIComponent(term)}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [location.search]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <Main>
      {results.length > 0 ? (
        <div className="result_wrap">
          <h3 className="result_title">
            검색결과: {capitalizeFirstLetter(searchTerm)}
          </h3>
          <div className="result_inner">
            {results.map((product) => (
              <div className="result_card" key={product.id}>
                <img src={product.imageUrl} alt={product.productName} />
                <p className="brandName">
                  {capitalizeFirstLetter(product.brandNameEng)}
                </p>
                <h3 className="productName">{product.productName}</h3>
                <p className="price">
                  {new Intl.NumberFormat("ko-KR").format(product.price)}원
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="result_wrap">
          <p style={{ margin: "20px" }}>검색하신 결과가 없습니다.</p>
        </div>
      )}
    </Main>
  );
};

export default SearchResults;
