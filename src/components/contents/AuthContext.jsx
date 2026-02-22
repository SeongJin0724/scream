import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const API_BASE = process.env.REACT_APP_API_URL || "";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const response = await axios.get(
            `${API_BASE}/api/user`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data && response.data.user) {
            // 현재 user 상태와 서버에서 받아온 데이터를 JSON 문자열로 변환하여 비교
            const currentUserString = JSON.stringify(user);
            const fetchedUserString = JSON.stringify(response.data.user);

            // 두 JSON 문자열이 다를 경우에만 상태 업데이트
            if (currentUserString !== fetchedUserString) {
              setUser(response.data.user);
            }
          }
        } catch (error) {
          console.error(
            "사용자 정보를 가져오는 중 오류가 발생했습니다:",
            error
          );
          // 오류 발생 시 기본 사용자 정보로 설정
          setUser({
            name: "유저",
            profileImage: "https://via.placeholder.com/150x150",
            email: "None@naver.com",
            nickname: "닉네임",
            phoneNumber: "010-0000-0000",
          });
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const updateUser = async (updatedUserInfo) => {
    const token = localStorage.getItem("accessToken");
    if (token && updatedUserInfo) {
      try {
        const response = await axios.post(
          `${API_BASE}/api/updateUser`,
          updatedUserInfo,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.newToken) {
          // 새로운 토큰을 로컬 스토리지에 저장
          localStorage.setItem("accessToken", response.data.newToken);

          // 새로운 사용자 정보와 토큰을 상태에 저장
          setUser({
            ...user,
            ...response.data.user,
          });
        }
      } catch (error) {
        console.error(
          "사용자 정보를 업데이트하는 중 오류가 발생했습니다.",
          error
        );
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};