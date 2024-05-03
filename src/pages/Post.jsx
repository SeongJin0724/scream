import React from "react";
import Main from "../components/section/Main";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <Main>
      <div className="post_container">
        <div className="user_info">
          <p className="user_name">user</p>
        </div>
        <img src="" alt="" className="post_img" />
        <div className="post_tag_wrap">
          <h3 className="tag_header">상품태그</h3>
          <Link className="tag_item">
            <img src="" alt="" className="item_img" />
            <div className="item_info">
              <p className="item_title">상품이름</p>
              <p className="item_price">가격</p>
            </div>
          </Link>
        </div>
        <div className="post_content">리뷰내용</div>
      </div>
    </Main>
  );
}
