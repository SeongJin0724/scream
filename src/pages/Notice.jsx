import React from "react";
import Main from "../components/section/Main";

import { Link } from "react-router-dom";
export default function Company() {
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
      <h2 className="accordionh2">공지사항</h2>
          </div>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/5"}>
              [안내] SURPRISE DRAW - 비스타 워커힐 코너 스위트룸 &amp; 해링턴 카
              시승권 응모
            </Link>
          </p>
        </div>
      </div>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/4"}>
              [안내] DRAW - 아모프레 X 벌스데이수트 응모
            </Link>
          </p>
        </div>
      </div>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/3"}>[안내] DRAW - 카카오페이 유로24 응모</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
    </Main>
  );
}
