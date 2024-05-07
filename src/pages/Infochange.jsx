import React, { useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";
import { useAuth } from "../components/contents/AuthContext";

const EditUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const { user } = useAuth();

  const updateUser = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/infochange/${user.user_id}`,
        {
          email,
          password,
          tel,
        }
      );
      alert("회원정보가 수정되었습니다.");
    } catch (error) {
      console.error("회원 정보 수정 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <Main>
      <div className="infochange_container">
        <nav className="infochange_nav">
          <h3 className="infochange_nav_title">마이 페이지</h3>
          <ul className="infochange_shopinfo">
            <li className="infochange_shopinfo_li">
              <h3 className="infochange_shopinfo_title">쇼핑 정보</h3>
              <ul className="infochange_shopinfo_sub_ul">
                <li className="infochange_shopinfo_sub_li">
                  <a href="/company">구매내역</a>
                </li>
                <li className="infochange_shopinfo_sub_li">
                  <a href="/company">판매내역</a>
                </li>
                <li className="infochange_shopinfo_sub_li">
                  <a href="/company">관심</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="infochange_myinfo">
            <li className="infochange_myinfo_li">
              <h3 className="infochange_myinfo_title">내 정보</h3>
              <ul className="infochange_myinfo_sub_ul">
                <li className="infochange_myinfo_sub_li">
                  <a href="/company">로그인 정보</a>
                </li>
                <li className="infochange_myinfo_sub_li">
                  <a href="/company">프로필 관리</a>
                </li>
                <li className="infochange_myinfo_sub_li">
                  <a href="/mypage/address">주소록</a>
                </li>
                <li className="infochange_myinfo_sub_li">
                  <a href="/company">결제 정보</a>
                </li>
                <li className="infochange_myinfo_sub_li">
                  <a href="/company">판매 정산 계좌</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="infochange_wrap">
          <div className="infochange_wrap_border">
            <h1 className="infochange_wrap_h1">로그인 정보</h1>
          </div>
          <h3 className="infochange_wrap_myaccount_h3">내 계정</h3>
          <div className="infochange_wrap_myaccount">
            <label className="infochange_title">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
            />
          </div>
          <div className="infochange_wrap_myaccount">
            <label className="infochange_title">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <h3 className="infochange_wrap_myprivate_h3">개인정보</h3>
          <div className="infochange_wrap_myprivate">
            <label className="infochange_title">전화번호</label>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="전화번호"
            />
          </div>
          <button onClick={updateUser} className="infochange_btn">
            수정하기
          </button>
        </div>
      </div>
    </Main>
  );
};

export default EditUser;
