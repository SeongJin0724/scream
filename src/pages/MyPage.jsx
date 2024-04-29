import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from "axios";
import { SlArrowRight } from "react-icons/sl";
export default function Mypage() {
  const [data, setData] = useState([]);
  const selectAll = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/mypage`
    );
    setData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    selectAll();
  }, []);
  return (
    <Main>
      <div className="mypage_container">
        <nav className="mypage_nav">
          <h3 className="mypage_nav_title">마이 페이지</h3>
          <ul className="mypage_shopinfo">
            <li className="mypage_shopinfo_li">
              <h3 className="mypage_shopinfo_title">쇼핑 정보</h3>
              <ul className="mypage_shopinfo_sub_ul">
                <li className="mypage_shopinfo_sub_li">
                  <a href="/company">구매내역</a>
                </li>
                <li className="mypage_shopinfo_sub_li">
                  <a href="/company">판매내역</a>
                </li>
                <li className="mypage_shopinfo_sub_li">
                  <a href="/company">관심</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="mypage_myinfo">
            <li className="mypage_myinfo_li">
              <h3 className="mypage_myinfo_title">내 정보</h3>
              <ul className="mypage_myinfo_sub_ul">
                <li className="mypage_myinfo_sub_li">
                  <a href="/company">로그인 정보</a>
                </li>
                <li className="mypage_myinfo_sub_li">
                  <a href="/company">프로필 관리</a>
                </li>
                <li className="mypage_myinfo_sub_li">
                  <a href="/company">주소록</a>
                </li>
                <li className="mypage_myinfo_sub_li">
                  <a href="/company">결제 정보</a>
                </li>
                <li className="mypage_myinfo_sub_li">
                  <a href="/company">판매 정산 계좌</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="mypage_wrap">
          <div className="mypage_profile">
            <div className="mypage_userinfo">
              <div className="mypage_userinfo_image">
                <img
                  data-v-ed683452=""
                  src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                  alt="사용자 이미지"
                  class="thumb_img"
                />
              </div>
              <div className="mypage_userinfo_info">
                <div className="mypage_userinfo_info_name">
                  {data.map((user, index) => (
                    <div key={index}>{user.name}</div>
                  ))}
                </div>
                <div className="mypage_userinfo_info_email">email</div>
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
                거래 내역이 없습니다.
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
              <div className="mypage_sell_sale_all">거래 내역이 없습니다.</div>
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
            <div className="mypage_wish_all">거래 내역이 없습니다.</div>
          </div>
        </div>
      </div>
    </Main>
  );
}
