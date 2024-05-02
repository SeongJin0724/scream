import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (token && userData) {
      // 사용자 정보에 token 값을 포함시켜서 상태를 업데이트합니다.
      // 이렇게 하면 토큰과 사용자 정보를 쉽게 관리할 수 있습니다.
      setUser({ ...userData, token: token });
    } else {
      // 토큰이 없거나, userData가 없는 경우, 기본 유저 정보로 설정할 수 있습니다.
      // 아래는 예시로 기본값을 설정하는 방법입니다. 필요에 따라 조정하세요.
      setUser({
        name: "유저",
        profileImage: "https://via.placeholder.com/150x150",
        email: "None@naver.com",
        nickname: "닉네임",
        phoneNumber: "010-0000-0000",
      });
    }

    console.log(token);
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
