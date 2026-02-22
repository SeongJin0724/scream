import React, { useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";
import { useNavigate } from "react-router-dom";

const API_BASE = process.env.REACT_APP_API_URL || "";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const sendVerificationCode = async () => {
    try {
      await axios.post(
        `${API_BASE}/api/send-verification-code`,
        { email }
      );
      alert("인증 코드가 이메일로 발송되었습니다.");
    } catch (error) {
      alert("인증 코드 발송에 실패하였습니다.");
    }
  };

  const verifyCode = async () => {
    try {
      await axios.post(`${API_BASE}/api/verify-code`, {
        email,
        verificationCode,
      });
      alert("이메일이 성공적으로 인증되었습니다.");
    } catch (error) {
      alert("유효하지 않거나 만료된 인증 코드입니다.");
    }
  };

  const register = async () => {
    try {
      await axios.post(`${API_BASE}/api/register`, {
        email,
        password,
        name,
        tel,
        address,
      });
      navigate("/login");
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <Main>
      <div className="join_wrap">
        <div className="join_wrap_inner">
          <h2 className="join_title">회원가입</h2>
          <div className="join_email_wrap">
            <div className="join_email_left">
              <input
                className="join_input"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="join_email_btn" onClick={sendVerificationCode}>
                인증 코드 발송
              </button>
            </div>
            <div className="join_email_right">
              <input
                className="join_input"
                type="text"
                placeholder="인증 코드"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button className="join_email_btn" onClick={verifyCode}>
                인증 코드 확인
              </button>
            </div>
          </div>

          <input
            className="join_input"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="join_input"
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="join_input"
            type="text"
            placeholder="전화번호"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            className="join_input"
            type="text"
            placeholder="주소"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="join_btn" onClick={register}>
            회원가입
          </button>
        </div>
      </div>
    </Main>
  );
}

export default Register;