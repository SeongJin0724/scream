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

    console.log(token);
  }, []);

  const updateUser = async (updatedUserInfo) => {
    try {
      const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰을 가져옵니다.
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
      const updatedUser = await response.json();

      // 로컬 스토리지와 상태 업데이트
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      // 새로운 토큰도 업데이트가 필요하다면 이곳에서 로컬 스토리지에 저장
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
