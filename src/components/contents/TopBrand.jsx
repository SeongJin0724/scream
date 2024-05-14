import React from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";

export default function TopBrand() {
  return (
    <div className="home_section">
      <div className="section_title">
        <h3>Top Brand</h3>
        <p>인기 탑 브랜드</p>
      </div>

      <ul className="topBrand_items_wrap">
        {brands.map((brand) => (
          <li key={brand.brand} className="topBrand_item">
            <Link to={`/brands/${brand.brand[1]}`}>
              <img src={brand.img} alt={brand.brand} />
              <p>{brand.brand[0]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
