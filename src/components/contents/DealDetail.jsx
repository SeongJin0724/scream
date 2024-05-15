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
        <Link className="showMore_Btn">
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
              <td className="total">
                {offerDealDetail.length + orderDetail.length}
              </td>
              <td>{offerDealDetail.length}</td>
              <td>{orderDetail.length}</td>
            </tr>
          </tbody>
        </table>

        <ul className="detail_list_wrap">
          {offerDealDetail.length > 0 ? (
            offerDealDetail.map((detail) => (
              <li key={detail.dealKey}>
                <div className="detail_type">
                  <p className="type_title">{type}신청</p>
                  <p className="apply_date">
                    {new Date(detail.addDate).toLocaleDateString("ko-KR")}
                  </p>
                </div>
                <div className="detail_desc">
                  <p>아이템 이름</p>
                  <p>
                    사이즈: {detail.size} /
                    <span> {formatPrice(detail.totalPrice)}원</span>
                  </p>
                </div>
                <p className="deadline">
                  <span className="deadline_title">마감기한:</span>
                  {new Date(detail.deadline).toLocaleDateString("ko-KR")}
                </p>
              </li>
            ))
          ) : orderDetail.length > 0 ? (
            orderDetail.map((detail, index) => <p key={index}>있음</p>)
          ) : (
            <div className="noDetail"> 거래 내역이 없습니다.</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DealDetail;
