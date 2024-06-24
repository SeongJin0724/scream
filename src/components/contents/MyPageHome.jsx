import React, { useEffect, useState } from "react";
import { useAuth } from "../contents/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import DealDetail from "./DealDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function MyPageHome() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [wishlistData, setWishlistData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [wishItemData, setWishItemData] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  const getWishList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/get/wishlist`,
        {
          userId: user.user_id,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlistData(response.data[0]);
    } catch (error) {
      console.error(error, "error");
    }
  };

  const getItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/items`
      );
      setItemData(response.data[0]);
    } catch (error) {
      console.error(error, "error");
    }
  };
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getWishList();
    }
    getItems();
  }, [token]);

  useEffect(() => {
    const filteredItems = itemData.filter((item) =>
      wishlistData.some((wishlistItem) => wishlistItem.itemKey === item.itemKey)
    );

    setWishItemData(filteredItems);

    if (wishItemData && wishItemData.length > 0) {
      const paths = wishItemData
        .map((item) =>
          item.img
            ? {
                path: item.img.split(",").map((path) => path.trim())[0], // 첫 번째 이미지만 선택
                itemKey: item.itemKey,
              }
            : null
        )
        .filter((path) => path !== null); // null 항목 제거
      setImagePaths(paths);
    }
  }, [itemData, wishlistData]);

  if (loading) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div className="mypage_wrap">
      <div className="mypage_profile">
        <div className="mypage_userinfo">
          <img
            data-v-ed683452=""
            src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
            alt="user_img"
            className="thumb_img user_img"
          />
          <div className="user_detail">
            <p className="name">{user?.name}</p>
            <p className="email">{user?.email}</p>
          </div>
        </div>

        <div className="setting_profile">
          <Link to="/mypage/infochange" className="goToLink">
            내 정보
          </Link>
          <Link to="/mypage/mystyle" className="goToLink">
            내 스타일
          </Link>
        </div>
      </div>

      <DealDetail type="구매" user={user?.user_id} />
      <DealDetail type="판매" user={user?.user_id} />

      <div className="dealDetail_wrap">
        <div className="detail_header">
          <h3 className="header_title">위시리스트</h3>
          <Link className="showMore_Btn" to={"/mypage/wishlist"}>
            더보기 <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div className="wish_list">
          {wishItemData.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "40px",
                color: "rgba(34, 34, 34, 0.5019607843)",
              }}
            >
              <p className="content">추가하신 관심 상품이 없습니다.</p>
              <Link to="/shop" className="goToShopBtn">
                SHOP 바로가기
              </Link>
            </div>
          ) : (
            wishItemData.map((item) => (
              <Link
                to={`/items/${item?.itemKey}`}
                className="wish_item_container"
              >
                <div className="wish_item_wrap" key={item?.itemKey}>
                  <div className="wish_item_img">
                    {
                      imagePaths
                        .filter((imgPath) => imgPath?.itemKey === item?.itemKey)
                        .map((imgPath) => (
                          <img
                            src={imgPath?.path}
                            alt={item?.title}
                            key={imgPath?.path}
                          />
                        ))[0] // 첫 번째 이미지만 표시
                    }
                  </div>
                  <div className="wish_item_info">
                    <h4 className="wish_item_info_brand">{item?.brand}</h4>
                    <p className="wish_item_info_name">{item?.title}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
