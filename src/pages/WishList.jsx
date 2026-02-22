import Main from "../components/section/Main";
import MyPageUi from "../components/contents/MyPageUi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getWishlist } from "../service/wishlistStorage";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function WishList() {
  const [wishlistData, setWishlistData] = useState([]);
  const [wishItemData, setWishItemData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  const loadWishList = () => {
    const keys = getWishlist();
    setWishlistData(keys.map((itemKey) => ({ itemKey })));
  };

  const getItems = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/items`);
      setItemData(response.data[0]);
    } catch (error) {
      console.error(error, "error");
    }
  };

  useEffect(() => {
    loadWishList();
    getItems();
  }, []);

  useEffect(() => {
    const filteredItems = itemData.filter((item) =>
      wishlistData.some((wishlistItem) => wishlistItem.itemKey === item.itemKey)
    );

    setWishItemData(filteredItems);

    const paths = filteredItems
      .map((item) =>
        item.img
          ? {
              path: item.img.split(",").map((path) => path.trim())[0],
              itemKey: item.itemKey,
            }
          : null
      )
      .filter((path) => path !== null);
    setImagePaths(paths);
  }, [itemData, wishlistData]);

  return (
    <Main>
      <MyPageUi>
        <div className="wishlist_container">
          <h1 className="wishlist_title">{"관심상품"}</h1>
          <div className="wish_list">
            <p className="wish_count">{"전체"}: {wishItemData.length}</p>
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
                <p className="content">{"추가하신 관심상품이 없습니다."}</p>
                <Link to="/shop" className="goToShopBtn">
                  {"SHOP 바로가기"}
                </Link>
              </div>
            ) : (
              wishItemData.map((item) => (
                <Link
                  to={`/items/${item.itemKey}`}
                  className="wish_item_container"
                  key={item.itemKey}
                >
                  <div className="wish_item_wrap">
                    <div className="wish_item_img">
                      {
                        imagePaths
                          .filter((imgPath) => imgPath.itemKey === item.itemKey)
                          .map((imgPath) => (
                            <img
                              src={imgPath.path}
                              alt={item.title}
                              key={imgPath.path}
                            />
                          ))[0]
                      }
                    </div>
                    <div className="wish_item_info">
                      <h4 className="wish_item_info_brand">{item.brand}</h4>
                      <p className="wish_item_info_name">{item.title}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </MyPageUi>
    </Main>
  );
}
