import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/filter?category=${category}`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchItems();
  }, [category]);

  console.log(items);

  const onSetMenu = (e) => {
    const selectedCategory = e.target.getAttribute("data-value");
    if (selectedCategory === category) {
      setCategory("");
      return;
    }
    setCategory(selectedCategory);
  };

  return (
    <Main>
      <div className="shop_container">
        <aside className="category_wrap">
          <h3 className="category_header">카테고리</h3>
          <ul className="menu_list">
            <li
              className={category === "all" ? "menu selected" : "menu"}
              data-value="all"
              onClick={onSetMenu}
            >
              {category === "all" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              전체
            </li>
            <li
              className={category === "top" ? "menu selected" : "menu"}
              data-value="top"
              onClick={onSetMenu}
            >
              {category === "top" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              상의
            </li>
            <li
              className={category === "outer" ? "menu selected" : "menu"}
              data-value="outer"
              onClick={onSetMenu}
            >
              {category === "outer" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              아우터
            </li>
            <li
              className={category === "bottom" ? "menu selected" : "menu"}
              data-value="bottom"
              onClick={onSetMenu}
            >
              {category === "bottom" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              하의
            </li>
            <li
              className={category === "sneakers" ? "menu selected" : "menu"}
              data-value="sneakers"
              onClick={onSetMenu}
            >
              {category === "sneakers" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              스니커즈
            </li>
            <li
              className={category === "shoes" ? "menu selected" : "menu"}
              data-value="shoes"
              onClick={onSetMenu}
            >
              {category === "shoes" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              신발
            </li>
            <li
              className={category === "headwear" ? "menu selected" : "menu"}
              data-value="headwear"
              onClick={onSetMenu}
            >
              {category === "headwear" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              모자
            </li>
            <li
              className={category === "bag" ? "menu selected" : "menu"}
              data-value="bag"
              onClick={onSetMenu}
            >
              {category === "bag" ? (
                <FontAwesomeIcon icon={faSquareCheck} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faSquare} className="icon" />
              )}
              가방
            </li>
          </ul>
        </aside>
        <div className="shop_items">
          <h3 className="items_header">상품</h3>
          <ul className="item_list">
            {items.map((item) => (
              <li className="item" key={item.itemKey}>
                <Link to={`/items/${item.itemKey}`}>
                  <img src={item.img} alt={item.title} className="item_img" />
                  <div className="item_desc">
                    <p className="brandName">{item.brand}</p>
                    <p className="productName">{item.title}</p>
                    <p className="price"> {item.launchPrice}원</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default Shop;
