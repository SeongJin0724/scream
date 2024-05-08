import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function ApplyResultModal({ type }) {
  return (
    <div className="ApplyResult_container">
      <h1 className="result_content">
        <FontAwesomeIcon icon={faCircleCheck} className="check" />
        {type}신청 완료
      </h1>
      <Link to="/" className="homeBtn">
        확인
      </Link>
    </div>
  );
}
