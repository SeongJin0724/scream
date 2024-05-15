import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DealDetail = ({ type, user }) => {
  const [offerDealDetail, setOfferDealDetail] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const fetchOfferDealData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/offerDealDetail`,
          {
            user_id: user,
            deal: type,
          }
        );
        setOfferDealDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchOrderData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/orderDetail`,
          {
            user_id: user,
            deal: type,
          }
        );
        setOrderDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOfferDealData();
    fetchOrderData();
  }, [type, user]);

  console.log(offerDealDetail);
  console.log(orderDetail);

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  return (
    <div className="dealDetail_wrap">
      <div className="detail_header">
        <h3 className="header_title">{type}내역</h3>
        <Link
          to={type === "구매" ? "/mypage/buyDetail" : "/mypage/sellDetail"}
          className="showMore_Btn"
        >
          더보기 <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>

      <div className="detail_main">
        <table className="detail_process">
          <thead>
            <tr>
              <th>전체</th>
              <th>{type}신청</th>
              <th>{type}완료</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={type === "구매" ? "totalBuy" : "total"}>
                {offerDealDetail.length + orderDetail.length}
              </td>
              <td>{offerDealDetail.length}</td>
              <td>{orderDetail.length}</td>
            </tr>
          </tbody>
        </table>

        <ul className="detail_list_wrap">
          {offerDealDetail.map((detail) => (
            <li key={detail.dealKey} className="detail_list">
              <div className="detail_type">
                <p className="type_title">{type}신청</p>
                <p className="apply_date">
                  {new Date(detail.addDate).toLocaleDateString("ko-KR")}
                </p>
              </div>
              <div className="detail_desc">
                <p className="item_title">{detail.itemTitle}</p>
                <p className="item_info">
                  {detail.size} /
                  <span> {formatPrice(detail.totalPrice)}원</span>
                </p>
              </div>
              <div className="deadline">
                <p>
                  <span className="deadline_title">마감기한:</span>
                  {new Date(detail.deadline).toLocaleDateString("ko-KR")}
                </p>
                <p>승인: {detail.sign === 1 ? "완료" : "대기"}</p>
              </div>
            </li>
          ))}

          {orderDetail.map((detail) => (
            <li key={detail.orderKey} className="detail_list">
              <div className="detail_type">
                <p className="type_title">{type}완료</p>
                <p className="apply_date">
                  {new Date(detail.orderDate).toLocaleDateString("ko-KR")}
                </p>
              </div>
              <div className="detail_desc">
                <p className="item_title">{detail.itemTitle}</p>
                <p className="item_info">
                  <span> {formatPrice(detail.price)}원</span>
                </p>
              </div>
            </li>
          ))}

          {offerDealDetail.length === 0 && orderDetail.length === 0 && (
            <div className="noDetail"> 거래 내역이 없습니다.</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DealDetail;
