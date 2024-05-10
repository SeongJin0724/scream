import React, { useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";
import { useAuth } from "../contents/AuthContext";
import { useNavigate } from "react-router-dom";

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
          <div className="mypage_userinfo_image">
            <img
              data-v-ed683452=""
              src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
              alt="사용자 이미지"
              className="thumb_img"
            />
          </div>
          <div className="mypage_userinfo_info">
            <div className="mypage_userinfo_info_name">{user.name}</div>
            <div className="mypage_userinfo_info_email">{user.email}</div>
          </div>
        </div>
        <div className="mypage_profile_settings">
          <div className="mypage_profile_settings_setting">
            <a href="/company" type="button">
              프로필 관리
            </a>
          </div>
          <div className="mypage_profile_settings_mystyle">
            <a href="/company" type="button">
              내 스타일
            </a>
          </div>
        </div>
      </div>
      <div className="mypage_buy">
        <div className="mypage_buy_title">
          <h3 className="mypage_buy_title_h3">구매 내역</h3>
          <a href="/company" className="mypage_buy_title_a">
            더보기
            <SlArrowRight />
          </a>
        </div>
        <div className="mypage_buy_purchase">
          <div className="mypage_buy_purchase_list">
            <div className="mypage_buy_purchase_list1">
              전체
              <div className="mypage_buy_purchase_list1_count"></div>
            </div>
            <div className="mypage_buy_purchase_list2">
              진행중<div className="mypage_buy_purchase_list2_count"></div>
            </div>
            <div className="mypage_buy_purchase_list3">
              종료<div className="mypage_buy_purchase_list3_count"></div>
            </div>
          </div>
          <div className="mypage_buy_purchase_all">
            <p>거래 내역이 없습니다.</p>
          </div>
        </div>
      </div>
      <div className="mypage_sell">
        <div className="mypage_sell_title">
          <h3 className="mypage_sell_title_h3">판매 내역</h3>
          <a href="/company" className="mypage_sell_title_a">
            더보기
            <SlArrowRight />
          </a>
        </div>
        <div className="mypage_sell_sale">
          <div className="mypage_sell_sale_list">
            <div className="mypage_sell_sale_list1">
              전체
              <div className="mypage_sell_sale_list1_count"></div>
            </div>
            <div className="mypage_sell_sale_list2">
              진행중<div className="mypage_sell_sale_list2_count"></div>
            </div>
            <div className="mypage_sell_sale_list3">
              종료<div className="mypage_sell_sale_list3_count"></div>
            </div>
          </div>
          <div className="mypage_sell_sale_all">
            <p>거래 내역이 없습니다.</p>
          </div>
        </div>
      </div>
      <div className="mypage_wish">
        <div className="mypage_wish_title">
          <h3 className="mypage_wish_title_h3">위시리스트</h3>
          <a href="/company" className="mypage_wish_title_a">
            더보기
            <SlArrowRight />
          </a>
        </div>
        <div className="mypage_wish_all">
          <p>추가하신 관심 상품이 없습니다.</p>
        </div>
      </div>
    </div>
  );
}
