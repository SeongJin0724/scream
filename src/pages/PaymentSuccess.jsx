import React from "react";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function PaymentSuccess() {
  return (
    <Main>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} />
        <div>주문이 완료되었습니다.</div>
      </div>
    </Main>
  );
}
