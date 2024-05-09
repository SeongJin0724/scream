import React, { useState } from "react";
import Main from "../components/section/Main";
import Logo from "../assets/image/screamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../service/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await logIn(email, password); // authService의 logIn 함수를 사용
      if (data.token) {
        localStorage.setItem("accessToken", data.token);
        console.log("★로그인성공★");
        navigate("/"); // 사용자를 홈으로 리다이렉트
        // window.location.reload();
        console.log(data.token);
      } else {
        alert(data.message);
        console.log("로그인실패");
      }
    } catch (error) {
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
