import React, { useContext, useEffect, useState } from "react";
import { ItemDetailContext } from "../components/contents/ItemDetailContext";
import Main from "../components/section/Main";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Navigation, Scrollbar } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";

// const imagePaths = [
//   `${process.env.PUBLIC_URL}/img/nikeairmax.webp`,
//   `${process.env.PUBLIC_URL}/img/nikeairmax2.webp`,
//   `${process.env.PUBLIC_URL}/img/nikeairmax3.webp`,
// ];
export default function ItemDetail() {
  const { item, itemKey } = useContext(ItemDetailContext);
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);
  const actionHandler = (action) => () => {
    if (action === "sell") {
      navigate(`/items/${itemKey}/sell`);
    } else if (action === "buy") {
      navigate(`/items/${itemKey}/buy`);
    }
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/items/${itemKey}/offers`
        );
        setSales(response.data.sales);
        setPurchases(response.data.purchases);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    fetchOffers();
    if (item && item.length > 0 && item[0].img) {
      const paths = item[0].img.split(",").map((path) => path.trim());
      setImagePaths(paths);
    }
  }, [itemKey, item]);

  return (
    <Main>
      <div className="itemDetail_main_container">
        <div className="itemDetail_container">
          <div className="item_img_wrap">
            <div className="item_img_fixed">
              <Swiper
                scrollbar={{
                  hide: true,
                }}
                navigation={true}
                loop={true}
                modules={[Scrollbar, Navigation]}
                className="mySwiper"
              >
                {imagePaths.map((path, index) => (
                  <SwiperSlide key={index}>
                    <img src={path} alt={`image ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="item_info_wrap">
            {item && item.length > 0 ? (
              <div key={itemKey}>
                <h2 className="item_title">{item[0].brand}</h2>
                <h3 className="item_name">{item[0].title}</h3>
                <h4 className="item_sub_name">{item[0].korTitle}</h4>
                <ul className="item_info">
                  <li>
                    <span className="item_info_title">발매가</span>
                    <div className="item_content">{item[0].launchPrice}</div>
                  </li>
                  <li>
                    <span className="item_info_title">대표 색상</span>
                    <div className="item_content">{item[0].color}</div>
                  </li>
                  <li>
                    <span className="item_info_title">브랜드</span>
                    <div className="item_content">{item[0].brand}</div>
                    <div className="item_content">{item[0].korBrandName}</div>
                  </li>
                </ul>
              </div>
            ) : (
              <div>로딩 중...</div>
            )}
            <div className="btn_wrap">
              <button className="sell_btn" onClick={actionHandler("sell")}>
                판매신청
              </button>
              <button className="buy_btn" onClick={actionHandler("buy")}>
                구매신청
              </button>
            </div>
            <button className="like_btn">
              <CiBookmark style={{ fontSize: "20px" }} />
              <span style={{ paddingLeft: "6px" }}>관심 상품</span>
            </button>
          </div>
        </div>
        <div>
          <h2>판매리스트</h2>
          {sales.length > 0 ? (
            <ul>
              {sales.map((offer) => (
                <li key={offer.dealKey}>
                  <p>{offer.size}</p>
                  <p>{offer.price}</p>
                  <p>{offer.deadline}</p>
                  <p>{offer.description}</p>
                  <Link to={`/order/${offer.dealKey}`}>구매하기</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>거래 상품이 없습니다.</p>
          )}
          <h2>구매리스트</h2>
          {purchases.length > 0 ? (
            <ul>
              {purchases.map((offer) => (
                <li key={offer.dealKey}>
                  <p>{offer.size}</p>
                  <p>{offer.price}</p>
                  <p>{offer.deadline}</p>
                  <p>{offer.description}</p>
                  <Link to={`/ordersell/${offer.dealKey}`}>판매하기</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>구매 제안 상품이 없습니다.</p>
          )}
        </div>
      </div>
    </Main>
  );
}
