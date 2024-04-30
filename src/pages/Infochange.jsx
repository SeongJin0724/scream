import React, { useState } from "react";
import axios from "axios";

const Infochange = ({ user_id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const updateUser = () => {
    axios
      .get(`http://localhost:3000/api/mypage/${user_id}`, {
        email,
        password,
        tel,
      })
      .then(() => {
        alert("회원 정보가 수정되었습니다.");
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <input
        type="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="전화번호"
      />
      <button onClick={updateUser}>수정하기</button>
    </div>
  );
};

export default Infochange;
