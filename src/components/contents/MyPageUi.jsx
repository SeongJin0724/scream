import React from "react";
import Main from "../section/Main";
import { Link } from "react-router-dom";

export default function MyPageUi({ children }) {
  return (
    <Main>
      <div className="mypage_container">
        <nav className="mypage_nav">
          <h3 className="mypage_nav_title">
            <Link to="/mypage">마이페이지</Link>
          </h3>
          <ul className="mypage_shopinfo">
            <li className="mypage_shopinfo_li">
              <h3 className="mypage_shopinfo_title">쇼핑 정보</h3>
              <ul className="mypage_shopinfo_sub_ul">
                <li className="mypage_shopinfo_sub_li">
                  <Link to="/mypage/buyDetail">구매내역</Link>
                </li>
                <li className="mypage_shopinfo_sub_li">
                  <Link to="/mypage/sellDetail">판매내역</Link>
                </li>
                <li className="mypage_shopinfo_sub_li">
                  <Link to="/company">관심</Link>
                </li>
                <li className="mypage_shopinfo_sub_li">
                  <Link to="/mypage/mystyle">내 스타일</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="mypage_myinfo">
            <li className="mypage_myinfo_li">
              <h3 className="mypage_myinfo_title">내 정보</h3>
              <ul className="mypage_myinfo_sub_ul">
                <li className="mypage_myinfo_sub_li">
                  <Link to="/mypage/infochange">개인정보 수정</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </Main>
  );
}
