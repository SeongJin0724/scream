import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function PaymentApproval() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dealKey = queryParams.get("dealKey");
  const pg_token = queryParams.get("pg_token");
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState();

  useEffect(() => {
    if (dealKey && pg_token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${API_BASE}/api/payment/approval`,
            {
              params: {
                dealKey,
                pg_token,
              },
            }
          );
          setResult(response.data);
          setSuccess(true);
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [dealKey, pg_token]);

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  if (!success) {
    return null;
  }
  return (
    <Main>
      <div className="payment_wrap">
        <div className="success">
          <FontAwesomeIcon icon={faCircleCheck} className="icon" />
          <h1 className="success_content">주문완료</h1>
          <table className="order_detail">
            <tbody>
              <tr>
                <th>상품명</th>
                <td>{result.item_name}</td>
              </tr>
              <tr>
                <th>결제금액</th>
                <td>{formatPrice(result.amount.total)}원</td>
              </tr>
              <tr>
                <th>결제일시</th>
                <td>{result.approved_at}</td>
              </tr>
              <tr>
                <th>결제수단</th>
                <td>카카오페이</td>
              </tr>
            </tbody>
          </table>
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