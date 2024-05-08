import React from "react";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <Main>
      <div>
        <div>
          <FontAwesomeIcon icon={faCircleCheck} />
          <h1>주문완료</h1>
        </div>
        <div>
          <h3>거래 내역</h3>
        </div>
        <Link to="/"> 홈으로</Link>
      </div>
    </Main>
  );
}
