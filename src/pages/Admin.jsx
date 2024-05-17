import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from "axios";

export default function Admin() {
  const [data, setData] = useState([]);

  const getOffDealData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin`
      );
      setData(response.data);
    } catch (error) {
      console.error(error, "error");
    }
  };

  const postAdminSign = async (dealKey) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/adminSign`,
        {
          dealKey,
        }
      );
    } catch (error) {
      console.error(error, "error");
    }
  };
  const deleteAdminSign = async (dealKey) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/delete/adminSign`,
        {
          dealKey,
        }
      );
    } catch (error) {
      console.error(error, "error");
    }
  };
  useEffect(() => {
    getOffDealData();
  }, [deleteAdminSign(), postAdminSign()]);

  return (
    <Main>
      <div className="admin_wrap">
        <h1 className="admin_title">관리자 페이지</h1>
        <div className="admin_content">
          <div className="sell_list">
            <h2 className="sell_list_title">판매요청 게시글</h2>
            {data
              .filter((item) => item.deal === "판매")
              .map((item) => (
                <div key={item.dealKey} className="sell_content">
                  <div>상품명: {item.itemTitle}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div>사이즈: {item.size}</div>
                      <div>가격: {item.totalPrice}</div>
                    </div>
                    <div className="admin_btn_wrap">
                      <button
                        className="approval_btn"
                        onClick={() => {
                          postAdminSign(item.dealKey);
                          window.location.reload();
                        }}
                      >
                        승인
                      </button>
                      <button
                        className="unrecognised_btn"
                        onClick={() => {
                          deleteAdminSign(item.dealKey);
                          window.location.reload();
                        }}
                      >
                        미승인
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="buy_list">
            <h2 className="buy_list_title">구매요청 게시글</h2>
            {data
              .filter((item) => item.deal !== "판매")
              .map((item) => (
                <div key={item.dealKey} className="buy_content">
                  <div>상품명: {item.itemTitle}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div>사이즈: {item.size}</div>
                      <div>가격: {item.totalPrice}</div>
                    </div>
                    <div className="admin_btn_wrap">
                      <button
                        className="approval_btn"
                        onClick={() => {
                          postAdminSign(item.dealKey);
                          //   window.location.reload();
                        }}
                      >
                        승인
                      </button>
                      <button
                        className="unrecognised_btn"
                        onClick={() => {
                          deleteAdminSign(item.dealKey);
                          //   window.location.reload();
                        }}
                      >
                        미승인
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Main>
  );
}
