import React from "react";

export default function Detail1() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <div className="header-wrapper">
          <div className="badge">한정 판매</div>
          <h1 className="product-title">상품 제목</h1>
        </div>
        <div className="main-wrapper">
          <div className="main-left">
            <img
              src="https://image.msscdn.net/images/goods_img/20230824/3493001/3493001_16944862529512_500.jpg"
              alt="상품 이미지"
            />
          </div>
        </div>
        <div className="main-right">
          <div className="product-info">
            <h2 className="info-title">상품정보</h2>
            <div className="info-item">
              <span className="info-label">제조사</span>
              <span className="info-text">테스트 제조사</span>
            </div>
            <div className="info-item">
              <span className="info-label">모델명</span>
              <span className="info-text">테스트 모델명</span>
            </div>
          </div>

          <div className="delivery-info">
            <h2 className="info-title">배송 정보</h2>
            <div className="info-item">
              <span className="info-label">배송비</span>
              <span className="info-text">무료</span>
            </div>

            <div className="info-item">
              <span className="info-label">배송방법</span>
              <span className="info-text">CJ 대한통운 택배</span>
            </div>
          </div>
          <div className="price-info">
            <h2 className="info-title">가격 정보</h2>
            <div className="info-item">
              <span className="info-label">판매 가격</span>
              <span className="info-text">1000000</span>
            </div>

            <div className="info-item">
              <span className="info-label">적립금</span>
              <span className="info-text">10000</span>
            </div>
          </div>
          <div className="purchase">
            <select name="options" id="options">
              <option value="">옵션 선택</option>
              <option value="1">옵션1</option>
              <option value="2">옵션2</option>
              <option value="3">옵션3</option>
            </select>
            <div className="info-item">
              <span className="total-label">총 금액</span>
              <span className="total-text">1000000</span>
            </div>
            <button className="purchase-button">구매하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
