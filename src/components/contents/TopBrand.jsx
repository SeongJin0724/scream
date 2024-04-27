import React from "react";
import { Link } from "react-router-dom";

import nike from "../../assets/image/brands/brand_nike.webp";
import iabStudio from "../../assets/image/brands/brand_iabstudio.webp";
import stussy from "../../assets/image/brands/brand_stussy.webp";
import adidas from "../../assets/image/brands/brand_adidas.webp";
import kapital from "../../assets/image/brands/brand_kapital.webp";
import carhartt from "../../assets/image/brands/brand_carhartt.webp";
import bape from "../../assets/image/brands/brand_bape.webp";
import supreme from "../../assets/image/brands/brand_supreme.webp";
import newbalance from "../../assets/image/brands/brand_newbalance.webp";
import jordan from "../../assets/image/brands/brand_jordan.webp";

const brands = [
  {
    brand: "나이키",
    img: nike,
  },
  {
    brand: "아이앱 스튜디오",
    img: iabStudio,
  },
  {
    brand: "스투시",
    img: stussy,
  },
  {
    brand: "아디다스",
    img: adidas,
  },
  {
    brand: "캐피탈",
    img: kapital,
  },
  {
    brand: "칼하트",
    img: carhartt,
  },
  {
    brand: "베이프",
    img: bape,
  },
  {
    brand: "슈프림",
    img: supreme,
  },
  {
    brand: "뉴발란스",
    img: newbalance,
  },
  {
    brand: "조던",
    img: jordan,
  },
];

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
            <Link to={`/brands/${brand.brand}`}>
              <img src={brand.img} alt={brand.brand} />
              <p>{brand.brand}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
