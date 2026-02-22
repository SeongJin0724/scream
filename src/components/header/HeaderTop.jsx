import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../service/authService";
import { clearToken, getToken } from "../../service/authToken";

export default function HeaderTop() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      clearToken();
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      window.location.reload(); // 여기에 추가
      navigate("/");
    } catch (error) {
      console.error("로그아웃 에러:", error.response || error);
    }
  };
  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false
  }, []);
  const headerTopMenus = [
    {
      title: "고객센터",
      src: "/notice",
    },
    {
      title: "마이페이지",
      src: "/mypage",
    },
    {
      title: "관심",
      src: "/mypage/wishlist",
    },
    // {
    //   title: "알림",
    //   src: "/notify",
    // },
    isLoggedIn
      ? {
          title: "로그아웃",
          action: handleLogout, // 로그아웃 함수를 호출
        }
      : {
          title: "로그인",
          src: "/login",
        },
  ];

  return (
    <nav className="header_info">
      <ul className="info_ul">
        {headerTopMenus.map((info, key) => (
          <li key={key} className="info_li">
            {info.src ? (
              <Link className="info_text" key={info.title} to={info.src}>
                {info.title}
              </Link>
            ) : (
              <Link
                className="info_text"
                key={info.title}
                onClick={info.action}
              >
                {info.title}
              </Link>
            )}
            {/* <Link to={info.src} className="info_text">
              {info.title}
            </Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}
