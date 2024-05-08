import axios from "axios";
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
      const token = localStorage.getItem("accessToken");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/updateUser`,
        {
          user_id: user.user_id,
          newUserInfo: updatedUserInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("유저 정보 업데이트 실패");
      }

      const { newUser, newAccessToken } = response.data;

      // 새로운 accessToken과 사용자 정보를 localStorage에 저장합니다.
      localStorage.setItem("accessToken", newAccessToken); // 새로운 accessToken 업데이트
      localStorage.setItem("user", JSON.stringify(newUser)); // 새로운 사용자 정보 업데이트

      setUser({ ...newUser, token: newAccessToken }); // 상태 업데이트
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
