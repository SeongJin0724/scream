import React from "react";
import { Link } from "react-router-dom";

export default function TopBrand() {
  const brands = [
    "아디다스",
    "아식스",
    "나이키",
    "스투시",
    "아이앱 스튜디오",
    "샤넬",
    "폴로 랄프 로렌",
    "롱샴",
    "모남희",
    "에르메스",
  ];

  return (
    <div className="home_topBrand">
      <div className="topBrand_header">
        <h3>Top Brand</h3>
        <p>인기 탑 브랜드</p>
      </div>
      <ul className="topBrand_lists">
        {brands.map((brand) => (
          <li key={brand} className="topBrand_name">
            <Link to={`/brands/${brand}`}>
              <img src="" alt="" />
              {/* 브랜드 이미지 */}
              <p>{brand}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
