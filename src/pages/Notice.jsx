import React from "react";
import Main from "../components/section/Main";

import { Link } from "react-router-dom";
export default function Company() {
  return (
    <Main>
      <h2 className="accordionh2">공지사항</h2>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/5"}>
              [안내] SURPRISE DRAW - 비스타 워커힐 코너 스위트룸 &amp; 해링턴 카
              시승권 응모
            </Link>
          </p>
        </div>
      </div>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/4"}>
              [안내] DRAW - 아모프레 X 벌스데이수트 응모
            </Link>
          </p>
        </div>
      </div>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            <Link to={"/notice/3"}>[안내] DRAW - 카카오페이 유로24 응모</Link>
          </p>
        </div>
      </div>
    </Main>
  );
}
