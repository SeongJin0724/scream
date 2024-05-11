import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function ApplyResultModal({ type }) {
  return (
    <div className="ApplyResult_container">
      <h1 className="result_content">
        <FontAwesomeIcon icon={faCircleCheck} className="check" />
        {type}완료
      </h1>
      <div className="goToBtn">
        <Link to="/mypage" className="toMypage">
          마이페이지
        </Link>
        <Link to="/" className="toHome">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}
