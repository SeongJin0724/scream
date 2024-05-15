import React, { useEffect } from "react";
import { useAuth } from "../contents/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import DealDetail from "./DealDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function MyPageHome() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

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
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
          </div>
        </div>

        <div className="setting_profile">
          <Link to="/mypage/infochange" className="goToLink">
            내 정보
          </Link>
          <Link to="" className="goToLink">
            내 스타일
          </Link>
        </div>
      </div>

      <DealDetail type="구매" user={user.user_id} />
      <DealDetail type="판매" user={user.user_id} />

      <div className="dealDetail_wrap">
        <div className="detail_header">
          <h3 className="header_title">위시리스트</h3>
          <Link className="showMore_Btn">
            더보기 <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div className="wish_list">추가하신 관심 상품이 없습니다.</div>
      </div>
    </div>
  );
}
