import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/contents/AuthContext";
import Main from "../components/section/Main";
import MyPageUi from "../components/contents/MyPageUi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const BuyDetail = () => {
  const { user } = useAuth();
  const [offerDealDetail, setOfferDealDetail] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [part, setPart] = useState("전체");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const fetchOfferDealData = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/offerDealDetail`,
        {
          user_id: user.user_id,
          deal: "구매",
        }
      );
      setOfferDealDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOfferDealData();
    const fetchOrderData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/orderDetail`,
          {
            user_id: user.user_id,
            deal: "구매",
          }
        );
        setOrderDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderData();
  }, [user]);

  const onDeleteList = async (e) => {
    const dealKey = e.target.value;
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/deleteOfferDeal/${dealKey}`
      );
      console.log("삭제 성공:", response.data);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);

      await fetchOfferDealData();
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  return (
    <Main>
      <MyPageUi>
        <div className="mypageDealDetail_wrap">
          {alert && (
            <div className="alertModal">
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className="check" />{" "}
                구매신청 취소 완료
              </p>
            </div>
          )}
          <h3 className="header_title">구매내역</h3>
          <div className="detail_main">
            <table className="detail_process">
              <tbody>
                <tr>
                  <button
                    className={
                      part === "전체"
                        ? "detail_section selected"
                        : "detail_section"
                    }
                    onClick={() => setPart("전체")}
                  >
                    <td className="totalBuy">
                      {offerDealDetail.length + orderDetail.length}
                    </td>
                    <th>전체</th>
                  </button>
                </tr>
                <tr>
                  <button
                    className={
                      part === "신청"
                        ? "detail_section selected"
                        : "detail_section"
                    }
                    onClick={() => setPart("신청")}
                  >
                    <td>{offerDealDetail.length}</td>
                    <th>구매신청</th>
                  </button>
                </tr>
                <tr>
                  <button
                    className={
                      part === "완료"
                        ? "detail_section selected"
                        : "detail_section"
                    }
                    onClick={() => setPart("완료")}
                  >
                    <td>{orderDetail.length}</td>
                    <th>구매완료</th>
                  </button>
                </tr>
              </tbody>
            </table>

            <ul className="detail_list_wrap">
              {part === "전체" || part === "신청"
                ? offerDealDetail.map((detail) => (
                    <li key={detail.dealKey} className="detail_list">
                      <Link to={`/items/${detail.itemKey}`}>
                        <div className="detail_type">
                          <p className="type_title">구매신청</p>
                          <p className="apply_date">
                            {new Date(detail.addDate)
                              .toISOString()
                              .slice(0, 10)}
                          </p>
                        </div>
                        <div className="detail_desc">
                          <p className="item_title">{detail.itemTitle}</p>
                          <p className="item_info">
                            <span className="size">size:</span> {detail.size} /
                            <span> {formatPrice(detail.totalPrice)}원</span>
                          </p>
                        </div>
                        <div className="deadline">
                          <p>
                            <span className="deadline_title">마감기한:</span>
                            {new Date(detail.deadline)
                              .toISOString()
                              .slice(0, 10)}
                          </p>
                          <p>승인: {detail.sign === 1 ? " 완료" : " 대기"}</p>
                        </div>
                        {detail.sign === 0 && (
                          <div className="option">
                            <button
                              value={detail.dealKey}
                              type="button"
                              className="cancelBtn"
                              onClick={onDeleteList}
                            >
                              신청취소
                            </button>
                          </div>
                        )}
                      </Link>
                    </li>
                  ))
                : null}

              {part === "전체" || part === "완료"
                ? orderDetail.map((detail) => (
                    <li key={detail.orderKey} className="detail_list">
                      <Link to={`/items/${detail.itemKey}`}>
                        <div className="detail_type">
                          <p className="type_title">구매완료</p>
                          <p className="apply_date">
                            {new Date(detail.orderDate)
                              .toISOString()
                              .slice(0, 10)}
                          </p>
                        </div>
                        <div className="detail_desc">
                          <div className="desc_section">
                            <Link
                              to={`/uploadReview/${detail.itemKey}`}
                              className="styleBtn"
                            >
                              STYLE 후기 작성
                            </Link>
                            <p className="item_title">{detail.itemTitle}</p>
                          </div>
                          <p className="item_info">
                            {formatPrice(detail.price)}원
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))
                : null}

              {offerDealDetail.length === 0 && orderDetail.length === 0 && (
                <div className="noDetail"> 거래 내역이 없습니다.</div>
              )}
            </ul>
          </div>
        </div>
      </MyPageUi>
    </Main>
  );
};

export default BuyDetail;
