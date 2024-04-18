import React, { useState } from "react";
import Main from "../components/section/Main";
import Logo from "../assets/image/screamlogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const response = await fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   const data = await response.json();
  //   if (response.ok) {
  //     navigate("/");
  //   } else {
  //     alert(data.message);
  //   }
  // };
  return (
    <Main>
      <div className="login_wrap">
        <h2 className="login_logo">
          <img src={Logo} alt="LSJ LOGO" />
        </h2>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <div className="form_inner">
            <label className="form_title">이메일 주소</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
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
        <button className="join_btn">
          <Link to="/join">이메일 회원가입</Link>
        </button>
      </div>
    </Main>
  );
}
