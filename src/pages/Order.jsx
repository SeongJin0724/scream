import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from "axios";
import { useAuth } from "../components/contents/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faWarehouse,
  faComment,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export default function Order() {
  const { user } = useAuth();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  const [selectPayment, setSelectPayment] = useState(false);
  const [payment, setPayment] = useState("결제방법");
  const [deliveryfee, setDeliveryfee] = useState(3000);

  const selectOption = (e) => {
    setSelectPayment(false);
    setPayment(e.target.value);
  };

  const sendOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/payment/kakao`,
        {
          partner_order_id: "1", // 예시 값 //dealKey넣기
          partner_user_id: "2", // 예시 값 //userid넣기
          item_name: "초코파이", // 예시 값
          item_code: "3", // itemKey넣기
          quantity: "1", // 예시 값
          total_amount: "2200", // 예시 값
          tax_free_amount: "0", // 예시 값
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      window.location.href = response.data.next_redirect_pc_url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Main>
      <div className="order_container">
        <div className="order_wrap">
          <h3 className="order_header">주문</h3>
          <div className="order_item">
            <img src="" alt="" className="item_img" />
            <p>상품정보</p>
          </div>

          <form onSubmit={sendOrder}>
            <div className="order_delivery">
              <div>
                <h3 className="section_header">배송 주소</h3>
                <table className="address_detail">
                  <tbody>
                    <tr>
                      <th>받는 분</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>연락처</th>
                      <td>{user.tel}</td>
                    </tr>
                    <tr>
                      <th>배송주소</th>
                      <td>{user.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="section_header">배송 방법</h3>

                <div
                  className={
                    deliveryfee === 3000
                      ? "section_delivery selected"
                      : "section_delivery"
                  }
                  onClick={() => setDeliveryfee(3000)}
                >
                  <div className="icon_box">
                    <FontAwesomeIcon icon={faTruck} />
                  </div>

                  <div className="delivery_type_wrap">
                    <p className="delivery_type">일반배송 3,000원</p>
                    <p className="type_desc">
                      검수 후 배송 · 5-7일 내 도착예정
                    </p>
                  </div>
                </div>

                <div
                  className={
                    deliveryfee === 0
                      ? "section_delivery selected"
                      : "section_delivery"
                  }
                  onClick={() => setDeliveryfee(0)}
                >
                  <div className="icon_box">
                    <FontAwesomeIcon icon={faWarehouse} />
                  </div>
                  <div className="delivery_type_wrap">
                    <p className="delivery_type">창고보관 첫 30일 무료</p>
                    <p className="type_desc">
                      배송 없이 창고에 보관 · 빠르게 판매 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order_pay">
              <h3 className="section_header">결제방법</h3>
              <div className="select_payment">
                <FontAwesomeIcon icon={faCreditCard} />
                <button
                  type="button"
                  className="payment_drop"
                  onClick={() => setSelectPayment(!selectPayment)}
                >
                  <span>{payment}</span>
                  {selectPayment ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </button>
                <ul
                  className={
                    selectPayment ? "payment_dropdown show" : "payment_dropdown"
                  }
                >
                  <li>
                    <button
                      type="button"
                      className="dropdown_option "
                      value="카카오페이"
                      onClick={selectOption}
                    >
                      <FontAwesomeIcon
                        icon={faComment}
                        className="option_icon"
                      />
                      카카오페이 KakaoPay
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order_info">
              <h3 className="section_header">최종 주문정보</h3>
              <table className="order_detail">
                <tbody>
                  <tr>
                    <th>구매 희망가</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>검수비</th>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <th>수수료</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>배송비</th>
                    <td>{deliveryfee === 0 ? "무료" : "3,000원"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="total_price">
                <p>총 결제금액</p>
                <p>-</p>
              </div>
            </div>

            <div className="apply_order">
              <input
                type="submit"
                value="결제하기"
                className={
                  payment === "카카오페이" ? "orderBtn show" : "orderBtn"
                }
                disabled={payment !== "카카오페이"}
              />
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
}
