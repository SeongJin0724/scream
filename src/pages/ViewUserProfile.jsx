import React from "react";
import { useAuth } from "../components/contents/AuthContext"; // AuthProvider 및 useAuth가 정의된 파일의 경로를 정확히 입력해주세요

function ViewUserProfile() {
  const { user } = useAuth(); // 사용자 정보를 불러옴

  if (!user) {
    return <p>로그인한 사용자 정보가 없습니다.</p>;
  }

  return (
    <div>
      <h2>사용자 정보</h2>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 이메일: {user.email}</p>
      <p>사용자 전화번호: {user.tel}</p>
      <p>사용자 주소: {user.address}</p>
    </div>
  );
}

export default ViewUserProfile;
