import React, { useState } from "react";
import axios from "axios";
import { banks } from "../data/bankData";
import { useAuth } from "./AuthContext";
import { getToken } from "../../service/authToken";

const API_BASE = process.env.REACT_APP_API_URL || "";

const AccountForm = () => {
  const [accountNum, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [bankName, setSelectedBank] = useState("");
  const { user, updateUser } = useAuth();

  const handleSelectBank = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      const updatedUserInfo = {
        user_id: user.user_id,
        bankName,
        accountNum,
        accountOwner,
      };
      const response = await axios.post(
        `${API_BASE}/api/mypage/account`,
        updatedUserInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      updateUser(updatedUserInfo);
      alert(response.data.message);
    } catch (error) {
      console.error("계좌 정보 등록에 실패했습니다.", error);
    }
  };

  return (
    <div className="account_container">
      <div className="account_title_wrap">
        <h3 className="account_title">계좌 정보</h3>
      </div>
      <h3 className="account_sub_title">결제수단 </h3>
      <form onSubmit={handleSubmit}>
        <div className="account_wrap_inner">
          <label className="account_form_title">
            <span className="marginBottom10"> 은행명 : {user.bankName}</span>
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
          <label className="account_form_title">
            계좌 번호 : {user.accountNum}
            <input
              type="number"
              value={accountNum}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="ex)159785312400"
            />
          </label>
        </div>
        <div className="account_wrap_inner">
          <label className="account_form_title">
            예금주 : {user.accountOwner}
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
            결제정보 변경
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
