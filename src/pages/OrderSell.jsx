import React, { useEffect, useState } from "react";
import { useAuth } from "../components/contents/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Main from "../components/section/Main";
import ApplyResultModal from "../components/contents/ApplyResultModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const OrderSell = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { dealKey } = useParams();
  const [account, setAccount] = useState(false);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    if (user.bankName) {
      setAccount(true);
    }
  }, [token]);

  const [dealData, setDealData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/offerDeal/${dealKey}`
        );
        setDealData(response.data[0]);
        setTotalPrice(true);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [dealKey]);

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  const payAmount = () => {
    const total = dealData.price - dealData.fee - 3000;
    const result = formatPrice(total);
    return result;
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    const ordersellData = {
      user_id: dealData.user_id,
      itemKey: dealData.itemKey,
      dealKey: dealData.dealKey,
      price: dealData.totalPrice,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/sendOrdersell`,
        ordersellData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      setComplete(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (complete) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [complete]);

  return (
    <div>
      <Main>
        <div className="order_container">
          <div className="order_wrap">
            <h3 className="order_header">판매</h3>
            <div className="order_item">
              <img
                src={dealData.img}
                alt={dealData.title}
                className="item_img"
              />
              <div className="item_detail">
                <p className="brand">{dealData.brand}</p>
                <p className="title">{dealData.title}</p>
                <p className="size">{dealData.size}</p>
              </div>
            </div>

            <form onSubmit={sendOrder}>
              <div className="order_delivery">
                <div>
                  <h3 className="section_header">반송 주소</h3>
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
                        <th>반송주소</th>
                        <td>{user.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="section_header">발송 방법</h3>

                  <div className="section_delivery selected">
                    <div className="icon_box">
                      <FontAwesomeIcon icon={faTruck} />
                    </div>

                    <div className="delivery_type_wrap">
                      <p className="delivery_type">택배발송 3,000원</p>
                      <p className="type_desc">
                        판매자부담 ∙ 정산금액에서 차감
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order_account">
                <h3 className="section_header">판매정산계좌</h3>
                {account ? (
                  <table className="account_detail">
                    <tbody>
                      <tr>
                        <th>계좌</th>
                        <td>
                          {`${user.bankName}
                          ${user.accountNum}`}
                        </td>
                      </tr>
                      <tr>
                        <th>예금주</th>
                        <td>{user.accountOwner}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="no_account">
                    <p>계좌정보가 없습니다.</p>
                    <Link to="/mypage/infochange" className="accountAdd">
                      + 계좌등록
                    </Link>
                  </div>
                )}
              </div>

              <div className="order_info">
                <h3 className="section_header">최종 주문정보</h3>
                <table className="order_detail">
                  <tbody>
                    <tr>
                      <th>판매가</th>
                      <td>{formatPrice(dealData.price)}원</td>
                    </tr>
                    <tr>
                      <th>검수비</th>
                      <td>무료</td>
                    </tr>
                    <tr>
                      <th>수수료</th>
                      <td>{formatPrice(dealData.fee)}원</td>
                    </tr>
                    <tr>
                      <th>배송비</th>
                      <td>3,000원</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total_price">
                  <p>총 정산금액</p>
                  <p>{totalPrice ? payAmount() + "원" : "-"}</p>
                </div>
              </div>

              <div className="apply_order">
                <input
                  type="submit"
                  value="판매하기"
                  className={account ? "orderBtn show" : "orderBtn"}
                  disabled={!account}
                />
              </div>
            </form>
          </div>
        </div>
        {complete && <ApplyResultModal type="판매" />}
      </Main>
    </div>
  );
};

export default OrderSell;
