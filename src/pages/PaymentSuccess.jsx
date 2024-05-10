import React from "react";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <Main>
      <div className="payment_wrap">
        <div className="success">
          <FontAwesomeIcon icon={faCircleCheck} className="icon" />
          <h1 className="success_content">주문완료</h1>
          <div className="goToBtn">
            <Link to="/mypage" className="toMypage">
              마이페이지
            </Link>
            <Link to="/" className="toHome">
              홈으로 가기
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}
