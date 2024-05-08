import React from "react";
import Main from "../components/section/Main";

export default function Profilechange() {
  return (
    <Main>
      <div className="profilechange_container">
        <nav className="profilechange_nav">
          <h3 className="profilechange_nav_title">마이 페이지</h3>
          <ul className="profilechange_shopinfo">
            <li className="profilechange_shopinfo_li">
              <h3 className="profilechange_shopinfo_title">쇼핑 정보</h3>
              <ul className="profilechange_shopinfo_sub_ul">
                <li className="profilechange_shopinfo_sub_li">
                  <a href="/company">구매내역</a>
                </li>
                <li className="profilechange_shopinfo_sub_li">
                  <a href="/company">판매내역</a>
                </li>
                <li className="profilechange_shopinfo_sub_li">
                  <a href="/company">관심</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="profilechange_myinfo">
            <li className="profilechange_myinfo_li">
              <h3 className="profilechange_myinfo_title">내 정보</h3>
              <ul className="profilechange_myinfo_sub_ul">
                <li className="profilechange_myinfo_sub_li">
                  <a href="/mypage/infochange">로그인 정보</a>
                </li>
                <li className="profilechange_myinfo_sub_li">
                  <a href="/mypage/profilechange">프로필 관리</a>
                </li>
                <li className="profilechange_myinfo_sub_li">
                  <a href="/mypage/address">주소록</a>
                </li>
                <li className="profilechange_myinfo_sub_li">
                  <a href="/company">결제 정보</a>
                </li>
                <li className="profilechange_myinfo_sub_li">
                  <a href="/mypage/account">판매 정산 계좌</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="profilechange_wrap">
          <div className="profilechange_wrap_border">
            <h1 className="profilechange_wrap_h1">로그인 정보</h1>
          </div>
          <button className="profilechange_wrap_changebtn">버튼</button>
        </div>
      </div>
    </Main>
  );
}
