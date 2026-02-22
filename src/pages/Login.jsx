import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import Logo from "../assets/image/screamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../service/authService";
import ModalContent from "../components/contents/ModalContent";
import { setGuestSession, setToken } from "../service/authToken";

const GUEST_EMAIL = "demo@scream.kr";
const GUEST_PASSWORD = "1234";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showGuestModal, setShowGuestModal] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setShowGuestModal(true);
  }, []);

  const fillGuestCredentials = () => {
    setEmail(GUEST_EMAIL);
    setPassword(GUEST_PASSWORD);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await logIn(email, password); // authService의 logIn 함수를 사용
      if (data.token) {
        const isGuest =
          email.trim().toLowerCase() === GUEST_EMAIL.toLowerCase() &&
          password === GUEST_PASSWORD;
        setGuestSession(isGuest);
        setToken(data.token, { persist: !isGuest });
        console.log("★로그인성공★");
        navigate("/"); // 사용자를 홈으로 리다이렉트
        window.location.reload();
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
      <ModalContent
        isOpen={showGuestModal}
        onClose={() => setShowGuestModal(false)}
      >
        <h3 className="modal-title">게스트 계정 안내</h3>
        <div className="modal-content-inner">
          <p>아래 계정으로 바로 로그인할 수 있습니다.</p>
          <p>
            아이디: <strong>{GUEST_EMAIL}</strong>
          </p>
          <p>
            비밀번호: <strong>{GUEST_PASSWORD}</strong>
          </p>
          <button
            className="modal-button"
            type="button"
            onClick={() => {
              fillGuestCredentials();
              setShowGuestModal(false);
            }}
          >
            자동 입력
          </button>
        </div>
      </ModalContent>
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
