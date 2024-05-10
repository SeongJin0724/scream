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
    { id: 5, name: "기업은행" },
    { id: 6, name: "농협은행" },
    { id: 7, name: "SC은행" },
    { id: 8, name: "우체국" },
    { id: 9, name: "한국씨티은행" },
    { id: 10, name: "산업은행" },
    { id: 11, name: "카카오뱅크" },
    { id: 12, name: "부산은행" },
    { id: 13, name: "대구은행" },
    { id: 14, name: "광주은행" },
    { id: 15, name: "케이뱅크" },
    { id: 16, name: "수협중앙회" },
    { id: 17, name: "제주은행" },
    { id: 18, name: "전북은행" },
    { id: 19, name: "지역농축협" },
    { id: 20, name: "경남은행" },
    { id: 21, name: "새마을금고연합회" },
    { id: 22, name: "신협" },
    { id: 23, name: "저축은행" },
    { id: 24, name: "HSBC은행" },
    { id: 25, name: "도이치은행" },
    { id: 26, name: "제이피모간체이스은행" },
    { id: 27, name: "BOA은행" },
    { id: 28, name: "비엔피파리바은행" },
    { id: 29, name: "중국공상은행" },
    { id: 30, name: "산림조합" },
    { id: 31, name: "중국건설은행" },
    { id: 32, name: "토스뱅크" },
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
