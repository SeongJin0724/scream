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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/updateUser`,
        {
          method: "POST", // 또는 'PUT'
          headers: {
            "Content-Type": "application/json",
            // 토큰이 필요한 경우 여기에 추가
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
