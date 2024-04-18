import React, { useState } from "react";
import Main from "../components/section/Main";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert("회원가입 성공!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <Main>
      <div className="join_wrap">
        <h2 className="join_title">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_inner">
            <label className="form_title">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="예) abc@abc.com"
            />
          </div>
          <div className="form_inner">
            <label className="form_title">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="join_btn" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </Main>
  );
}

export default Register;
