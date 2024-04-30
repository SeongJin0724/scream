import React from "react";
import Main from "../components/section/Main";

export default function Post() {
  return (
    <Main>
      <div className="post_container">
        <div className="user_info">
          <p className="user_name">user</p>
        </div>
        <img src="" alt="" className="post_img" />
        <div>상품태그</div>
      </div>
    </Main>
  );
}
