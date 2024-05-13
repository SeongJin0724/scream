import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faSort } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState([]);
  const [selectSort, setSelectSort] = useState(false);
  const [sort, setSort] = useState("정렬");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/filter?category=${category}`
        );
        setItems(response.data);
        setSort("정렬");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchItems();
  }, [category]);

  const onSetMenu = (e) => {
    const selectedCategory = e.target.getAttribute("data-value");
    if (selectedCategory === category) {
      setCategory("");
      return;
    }
    setCategory(selectedCategory);
  };

  const sortBySaved = (items) => {
    const sortedItems = [...items].sort((a, b) => {
      const aSaved = a.saved || 0;
      const bSaved = b.saved || 0;
      return bSaved - aSaved;
    });
    setItems(sortedItems);
  };

  const sortByLowerPrice = (items) => {
    const sortedItems = [...items].sort(
      (a, b) => a.launchPrice - b.launchPrice
    );
    setItems(sortedItems);
  };

  const sortByHigherPrice = (items) => {
    const sortedItems = [...items].sort(
      (a, b) => b.launchPrice - a.launchPrice
    );
    setItems(sortedItems);
  };

  const onSort = (e) => {
    const { value } = e.target;
    setSort(value);
    setSelectSort(false);

    switch (value) {
      case "인기순":
        sortBySaved(items);
        console.log(items);
        break;
      case "낮은 발매가순":
        sortByLowerPrice(items);
        break;
      case "높은 발매가순":
        sortByHigherPrice(items);
        break;
      default:
        break;
    }
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
          <div className="items_header">
            <p className="items_title">
              상품 <span className="itemNum">{items.length}</span>
            </p>
            <div className="dropdown">
              <button
                type="button"
                className="dropBtn"
                onClick={() => setSelectSort(!selectSort)}
              >
                {sort} <FontAwesomeIcon icon={faSort} />
              </button>
              <ul
                className={selectSort ? "dropdown_menu show" : "dropdown_menu"}
              >
                <li>
                  <button
                    type="button"
                    value="인기순"
                    className="menu"
                    onClick={onSort}
                  >
                    인기순
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="낮은 발매가순"
                    className="menu"
                    onClick={onSort}
                  >
                    낮은 발매가순
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="높은 발매가순"
                    className="menu"
                    onClick={onSort}
                  >
                    높은 발매가순
                  </button>
                </li>
              </ul>
            </div>
          </div>
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
}
