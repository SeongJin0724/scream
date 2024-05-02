import React, { useState } from "react";
import Main from "../components/section/Main";
import Logo from "../assets/image/screamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // 쿠키를 포함시키기 위해 설정
        }
      );
      const data = response.data;

      if (data.token) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // localStorage.setItem("email", data.email);
      }
      console.log("sadsad", data);
      if (response.status === 200) {
        navigate("/");
        console.log("★로그인성공★");
      } else {
        alert(response.data.message);
        console.log("로그인실패");
      }
    } catch (error) {
      // axios는 네트워크 에러 또는 2xx 범위를 벗어난 상태 코드를 받을 때 예외를 발생시킵니다.
      alert(
        error.response
          ? error.response.data.message
          : "로그인 처리 중 에러 발생"
      );
      console.log("로그인실패");
    }
  };
  return (
    <Main>
      <div className="login_wrap">
        <h2 className="login_logo">
          <img src={Logo} alt="LSJ LOGO" />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form_inner">
            <label className="form_title">이메일 주소</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="예) abc@abc.com"
            />
          </div>
          <div className="form_inner">
            <label className="form_title">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login_btn" type="submit">
            로그인
          </button>
        </form>
        <Link to="/gather" className="join_btn">
          이메일 회원가입
        </Link>
      </div>
    </Main>
  );
}
