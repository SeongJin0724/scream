import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { increaseWishlistCount } from "../components/data/wishlistLogic";
import path_to_main_product_image from "./path_to_default_main_image.jpg";
import path_to_thumbnail1 from "./path_to_thumbnail1.jpg";
import path_to_thumbnail2 from "./path_to_thumbnail2.jpg";
import path_to_thumbnail3 from "./path_to_thumbnail3.jpg";
import path_to_thumbnail4 from "./path_to_thumbnail4.jpg";

const ProductActions = () => {
  const navigate = useNavigate();
  const [wishlistCount, setWishlistCount] = useState(1582);

  const handleBuyClick = () => {
    navigate("/purchase-page"); // 구매 페이지로 이동
  };

  const handleSellClick = () => {
    navigate("/sell-page"); // 판매 페이지로 이동
  };

  const handleWishlistClick = () => {
    setWishlistCount((currentCount) => increaseWishlistCount(currentCount)); // 카운트 증가 로직 호출
  };

  const handleSizeChange = (event) => {
    console.log("Selected size:", event.target.value);
    // 선택된 사이즈를 처리하는 로직을 여기에 추가하세요
  };

  return (
    <>
      <div className="product-container">
        <div className="product-direct">즉시구매가</div>
        <div className="product-price">470,000원</div>
        <div className="product-title">
          Supreme x Nike Ripstop Pullover Black - 24SS
        </div>
        <div className="dropdown">
          <select id="size-select" onChange={handleSizeChange}>
            <option value="">모든 사이즈</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            // 사이즈 옵션을 더 추가할 수 있습니다
          </select>
        </div>
        <div className="info-container">
          <div className="info-section">
            <span className="label">최근 거래가</span>
            <span className="value discount-price">455,000원</span>
            <span className="value savings">↓10,000원 (-2.2%)</span>
          </div>
          <div className="info-section">
            <span className="label">발매가</span>
            <span className="value">$168 (약 231,600원)</span>
          </div>
          <div className="info-section">
            <span className="label">모델번호</span>
            <span className="value">-</span>
          </div>
          <div className="info-section">
            <span className="label">출시일</span>
            <span className="value">24/04/18</span>
          </div>
          <div className="info-section">
            <span className="label">색상</span>
            <span className="value">Black</span>
          </div>
        </div>
        <button className="button buy-button" onClick={handleBuyClick}>
          구매 470,000원
        </button>
        <button className="button sell-button" onClick={handleSellClick}>
          판매 475,000원
        </button>
        <div className="wishlist-container">
          <button className="wishlist-button" onClick={handleWishlistClick}>
            관심상품
          </button>
          <span className="wishlist-count">
            {wishlistCount.toLocaleString()}
          </span>
        </div>
        <div className="product-gallery">
          <img
            src={path_to_main_product_image.jpg}
            alt="Main Product Image"
            className="main-image"
          />

          <div className="thumbnail-container">
            <img
              src={path_to_thumbnail1.jpg}
              alt="Thumbnail 1"
              className="thumbnail"
            />
            <img
              src={path_to_thumbnail2.jpg}
              alt="Thumbnail 2"
              className="thumbnail"
            />
            <img
              src={path_to_thumbnail3.jpg}
              alt="Thumbnail 3"
              className="thumbnail"
            />
            <img
              src={path_to_thumbnail4.jpg}
              alt="Thumbnail 4"
              className="thumbnail"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductActions;
