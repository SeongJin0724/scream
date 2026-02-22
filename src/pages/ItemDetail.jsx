import React, { useContext, useEffect, useState } from "react";
import { ItemDetailContext } from "../components/contents/ItemDetailContext";
import Main from "../components/section/Main";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth } from "../components/contents/AuthContext";
import axios from "axios";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Navigation, Scrollbar } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { SlArrowRight } from "react-icons/sl";
import { TbRosetteNumber2 } from "react-icons/tb";
import { GoCodescanCheckmark } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaBookmark } from "react-icons/fa";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function ItemDetail() {
  const { user } = useAuth();
  const { item, itemKey } = useContext(ItemDetailContext);
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistBtn, setWishlistBtn] = useState(false);
  const actionHandler = (action) => () => {
    if (action === "sell") {
      navigate(`/items/${itemKey}/sell`);
    } else if (action === "buy") {
      navigate(`/items/${itemKey}/buy`);
    }
  };

  const postWishList = async () => {
    try {
      if (wishlist.length <= 0) {
        const response = await axios.post(
          `${API_BASE}/api/post/wishlist`,
          {
            user_id: user.user_id,
            itemKey: itemKey,
          }
        );
      } else {
        console.log("이미 추가되었습니다");
      }
    } catch (error) {
      console.error(error, "error");
    }
  };
  const getWishlistDetail = async () => {
    const token = localStorage.getItem("accessToken");
    const url = `${API_BASE}/api/get/wishlistDetail`;
    try {
      const response = await axios.get(url, {
        params: {
          itemKey: itemKey,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWishlist(response.data.data);
    } catch (error) {
      console.error(error, "error");
    }
  };
  const deleteWishlist = async () => {
    try {
      const response = await axios.post(
        `${API_BASE}/api/delete/wishlist`,
        {
          user_id: user.user_id,
          itemKey: Number(itemKey),
          wishKey: wishlist[0].wishKey,
        }
      );
    } catch (error) {
      console.error(error, "error");
    }
  };

  const wishlistClickHandler = () => {
    if (wishlistBtn === false) {
      setWishlistBtn(true);
      postWishList();
    } else if (wishlistBtn === true) {
      setWishlistBtn(false);
      deleteWishlist();
    }
    getWishlistDetail();
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/items/${itemKey}/offers`
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

  useEffect(() => {
    getWishlistDetail();
  }, [wishlistBtn]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

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
            <button className="like_btn" onClick={wishlistClickHandler}>
              {wishlist.length > 0 ? (
                <FaBookmark style={{ fontSize: "20px" }} />
              ) : (
                <FaRegBookmark style={{ fontSize: "20px" }} />
              )}
              <span style={{ paddingLeft: "6px" }}>관심 상품</span>
            </button>
            <div className="info_container">
              <div className="delivery_info">
                <h3 className="delivery_title">배송 정보</h3>
                <div className="delivery_inner">
                  <div className="delivery_img">
                    <TbTruckDelivery style={{ fontSize: "20px" }} />
                  </div>
                  <div className="delivery_content">
                    <p className="delivery_content_text">
                      <span>일반배송</span> 3,000원
                    </p>
                    <p className="delivery_content_text2">
                      검수 후 배송 ・ 9-11일 내 도착 예정
                    </p>
                  </div>
                </div>
              </div>
              <div className="brand_info">
                <h3 className="brand_title">브랜드 정보</h3>

                <Link
                  className="brand_link_wrap"
                  to={`/brands/${item[0]?.brand}`}
                >
                  <div className="brand_inner">
                    <div className="brand_logo">
                      <img src={`${item[0]?.logo}`} alt={`${item[0]?.brand}`} />
                    </div>
                    <div className="brand_content">
                      <h3 className="brand_content_title">
                        {item[0]?.brand}
                        <SlArrowRight
                          style={{ color: "#222", fontSize: "14px" }}
                        />
                      </h3>
                      <h4 className="brand_content_kor_title">
                        더 많은 {item[0]?.korBrandName} 브랜드의 아이템들을
                        한눈에 만나보세요!
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
              <nav className="guide_container">
                <ul>
                  <li>
                    <div className="guide_wrap">
                      <div className="guide_icon">
                        <LiaCoinsSolid style={{ fontSize: "30px" }} />
                      </div>
                      <div className="guide_content">
                        <div className="guide_title">
                          한치의 오차도 없는 정품 보증
                        </div>
                        <div className="guide_text">
                          SCREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의
                          2배를 보상합니다.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="guide_wrap">
                      <div className="guide_icon">
                        <GoCodescanCheckmark style={{ fontSize: "30px" }} />
                      </div>
                      <div className="guide_content">
                        <div className="guide_title">
                          엄격한 상품 다중 검증,검수 후 정확한 정보제공
                        </div>
                        <div className="guide_text">
                          SCREAM에서는 상품별 전문가 그룹의 체계적인 검수
                          시스템을 거쳐 상품의 상태를 정확히 파악하여
                          구매자분들께 정확한 정보를 제공을 합니다.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="guide_wrap">
                      <div className="guide_icon">
                        <TfiPackage style={{ fontSize: "30px" }} />
                      </div>
                      <div className="guide_content">
                        <div className="guide_title">
                          정품 인증 패키지와 기존 상품 상태 이미지 제공
                        </div>
                        <div className="guide_text">
                          정품인증과 상품 검수에 합격한 경우에 한하여 SCREAM의
                          정품 인증 패키지가 포함된 상품이 배송됩니다.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="trade_list_wrap">
          <div className="trade_wrap">
            <h2>판매리스트</h2>
            {sales.length > 0 ? (
              <ul className="trade_inner">
                {sales.map((offer) => (
                  <div className="trade_list">
                    <Link className="trade_link">
                      <li key={offer.dealKey}>
                        <div className="trade_img">
                          {imagePaths.length > 0 && (
                            <img src={imagePaths[0]} alt={imagePaths[0]} />
                          )}
                        </div>
                        <div className="trade_content">
                          <div>
                            <p className="trade_content_title">
                              {offer.itemTitle}
                            </p>

                            <p className="trade_content_desc">
                              {offer.description}
                            </p>
                          </div>
                          <div>
                            <p className="trade_content_size">{offer.size}</p>
                            <p>
                              <p className="trade_content_price">
                                {new Intl.NumberFormat("ko-KR").format(
                                  offer.price
                                )}
                                원
                              </p>
                            </p>
                            <p className="trade_content_deadline">
                              {new Date(offer.deadline).toLocaleDateString(
                                "ko-KR",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link className="sell_btn" to={`/order/${offer.dealKey}`}>
                      구매하기
                    </Link>
                  </div>
                ))}
              </ul>
            ) : (
              <p>거래 상품이 없습니다.</p>
            )}
          </div>
          <div className="trade_wrap">
            <h2>구매리스트</h2>
            {purchases.length > 0 ? (
              <ul className="trade_inner">
                {purchases.map((offer) => (
                  <div className="trade_list">
                    <Link className="trade_link">
                      <li key={offer.dealKey}>
                        <div className="trade_img">
                          {imagePaths.length > 0 && (
                            <img src={imagePaths[0]} alt={imagePaths[0]} />
                          )}
                        </div>
                        <div className="trade_content">
                          <div>
                            <p className="trade_content_title">
                              {offer.itemTitle}
                            </p>

                            <p className="trade_content_desc">
                              {offer.description}
                            </p>
                          </div>
                          <div>
                            <p className="trade_content_size">{offer.size}</p>
                            <p>
                              <p className="trade_content_price">
                                {new Intl.NumberFormat("ko-KR").format(
                                  offer.price
                                )}
                                원
                              </p>
                            </p>
                            <p className="trade_content_deadline">
                              {new Date(offer.deadline).toLocaleDateString(
                                "ko-KR",
                                {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    </Link>
                    <Link
                      className="buy_btn"
                      to={`/orderSell/${offer.dealKey}`}
                    >
                      판매하기
                    </Link>
                  </div>
                ))}
              </ul>
            ) : (
              <p>구매 제안 상품이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
}