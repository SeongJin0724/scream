import React, { useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";

const AccountForm = () => {
  const [accountNum, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");

  const [bankName, setSelectedBank] = useState("");
  const banks = [
    { id: 1, name: "국민은행" },
    { id: 2, name: "신한은행" },
    { id: 3, name: "하나은행" },
    { id: 4, name: "우리은행" },
    { id: 5, name: "SC은행" },
  ];

  const handleSelectBank = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/mypage/account`,
        { bankName, accountNum, accountOwner }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("계좌 정보 등록에 실패했습니다.", error);
    }
  };

  return (
    <Main>
      <div className="account_container">
        <nav className="account_nav">
          <h3 className="account_nav_title">마이 페이지</h3>
          <ul className="account_shopinfo">
            <li className="account_shopinfo_li">
              <h3 className="account_shopinfo_title">쇼핑 정보</h3>
              <ul className="account_shopinfo_sub_ul">
                <li className="account_shopinfo_sub_li">
                  <a href="/company">구매내역</a>
                </li>
                <li className="account_shopinfo_sub_li">
                  <a href="/company">판매내역</a>
                </li>
                <li className="account_shopinfo_sub_li">
                  <a href="/company">관심</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="account_myinfo">
            <li className="account_myinfo_li">
              <h3 className="account_myinfo_title">내 정보</h3>
              <ul className="account_myinfo_sub_ul">
                <li className="account_myinfo_sub_li">
                  <a href="/mypage/infochange">로그인 정보</a>
                </li>
                <li className="account_myinfo_sub_li">
                  <a href="/mypage/profilechange">프로필 관리</a>
                </li>
                <li className="account_myinfo_sub_li">
                  <a href="/mypage/address">주소록</a>
                </li>
                <li className="account_myinfo_sub_li">
                  <a href="/company">결제 정보</a>
                </li>
                <li className="account_myinfo_sub_li">
                  <a href="/mypage/account">판매 정산 계좌</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="account_wrap">
          <h2 className="account_wrap_h2">정산계좌변경</h2>
          <form onSubmit={handleSubmit}>
            <div className="account_wrap_inner">
              <label className="account_title">
                은행명
                {/* <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  placeholder="선택하세요"
                    readOnly
                /> */}
                <select
                  onChange={handleSelectBank}
                  defaultValue=""
                  className="account_select"
                >
                  <option value="" disabled>
                    선택하세요
                  </option>
                  {banks.map((bank) => (
                    <option
                      key={bank.id}
                      value={bank.name}
                      onChange={(e) => setSelectedBank(e.target.value)}
                    >
                      {bank.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="account_wrap_inner">
              <label className="account_title">
                계좌 번호
                <input
                  type="number"
                  value={accountNum}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="-없이 입력하세요"
                />
              </label>
            </div>
            <div className="account_wrap_inner">
              <label className="account_title">
                예금주
                <input
                  type="text"
                  value={accountOwner}
                  onChange={(e) => setAccountOwner(e.target.value)}
                  placeholder="예금주명을 정확히 입력하세요"
                />
              </label>
            </div>
            <div className="account_btn_box">
              <button type="submit" className="account_btn">
                변경하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
};

export default AccountForm;
