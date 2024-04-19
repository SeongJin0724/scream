import React, { useState } from "react";
import Main from "../components/section/Main";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [userDetails, setUserDetails] = useState({
    password: "",
    name: "",
    tel: "", // phoneNumber을 tel로 변경
    address: "",
    bankName: "", // 은행 이름
    accountNum: "", // 계좌 번호
    accountOwner: "", // 계좌 소유주 이름
    // verification_code, code_expires_at, verified는 서버 측에서 처리할 정보이므로 여기에 포함시킬 필요는 없음
  });

  // 이메일 코드 보내기
  const handleSendEmailCode = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/send-verification-code`,
        {
          email,
          withCredentials: true,
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error sending email code:", error);
      alert("Failed to send email code");
    }
  };

  // 이메일 코드 확인하기
  const handleVerifyEmailCode = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/verify`,
        {
          email,
          code: verificationCode,
          withCredentials: true,
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error verifying email code:", error);
      alert("Failed to verify email code");
    }
  };

  // 사용자 정보 입력 핸들링
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // 회원가입 최종 확인
  const handleFinalizeRegistration = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/signup`,
        {
          ...userDetails,
          email,
          verificationCode,
          withCredentials: true,
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error finalizing registration:", error);
      alert("Failed to finalize registration");
    }
  };

  return (
    <Main>
      <div className="join_wrap">
        <h2 className="join_title">회원가입</h2>
        <div className="join_form">
          <div className="form_inner">
            <label className="form_title">이메일</label>
            <label id="form_position">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSendEmailCode}>인증</button>
            </label>
            <label id="form_position">
              <input
                type="text"
                placeholder="인증 코드"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button onClick={handleVerifyEmailCode}>인증 완료</button>
            </label>
          </div>

          <div className="form_inner">
            <label className="form_title">비밀번호</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">이름</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">전화번호</label>
            <input
              type="tel"
              placeholder="Phone Number"
              name="tel"
              value={userDetails.tel}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">주소</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">은행</label>
            <input
              type="text"
              placeholder="은행 이름"
              name="bankName"
              value={userDetails.bankName}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">계좌번호</label>
            <input
              type="text"
              placeholder="계좌 번호"
              name="accountNum"
              value={userDetails.accountNum}
              onChange={handleChange}
            />
          </div>
          <div className="form_inner">
            <label className="form_title">예금주</label>
            <input
              type="text"
              placeholder="예금주명"
              name="accountOwner"
              value={userDetails.accountOwner}
              onChange={handleChange}
            />
          </div>
          <button className="join_btn" onClick={handleFinalizeRegistration}>
            회원가입 최종 확인
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Register;
