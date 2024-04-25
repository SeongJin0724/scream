import React from "react";
import { Link } from "react-router-dom";

export default function TopBrand() {
  const brands = [
    "나이키",
    "아이앱 스튜디오",
    "스투시",
    "아디다스",
    "아식스",
    "칼하트",
    "베이프",
    "슈프림",
    "뉴발란스",
    "조던",
  ];

  return (
    <div className="home_section">
      <div className="section_title">
        <h3>Top Brand</h3>
        <p>인기 탑 브랜드</p>
      </div>

      <ul className="topBrand_items_wrap">
        {brands.map((brand) => (
          <li key={brand} className="topBrand_item">
            <Link to={`/brands/${brand}`}>
              <img src="" alt="" />
              <p>{brand}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
