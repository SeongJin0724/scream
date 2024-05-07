import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (token && userData) {
      setUser({ ...userData, token: token });
    } else {
      setUser({
        name: "유저",
        profileImage: "https://via.placeholder.com/150x150",
        email: "None@naver.com",
        nickname: "닉네임",
        phoneNumber: "010-0000-0000",
      });
    }
  }, []);

  const updateUser = async (updatedUserInfo) => {
    try {
      const token = localStorage.getItem("accessToken"); // 기존 토큰 가져오기
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/updateUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // 토큰을 `Authorization` 헤더에 추가합니다.
          },
          body: JSON.stringify(updatedUserInfo),
        }
      );

      if (!response.ok) {
        throw new Error("유저 정보 업데이트 실패");
      }

      const data = await response.json();
      const newToken = data.newToken; // 응답으로 받은 새로운 토큰
      localStorage.setItem("accessToken", newToken); // 새 토큰 저장
      localStorage.setItem("user", JSON.stringify(data.user)); // 업데이트된 사용자 정보 저장

      setUser(data.user); // 상태 업데이트
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
