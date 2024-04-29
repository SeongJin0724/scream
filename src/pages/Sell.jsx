import React, { useState } from "react";
import Main from "../components/section/Main";

export default function Sell() {
  const [formData, setFormData] = useState({
    size: "",
    desc: "",
    price: "",
    deadline: "30",
    totalPrice: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const selectDeadline = (e) => {
    setFormData((prev) => ({
      ...prev,
      deadline: e.target.value,
    }));
  };

  const today = new Date();
  today.setDate(today.getDate() + parseInt(formData.deadline));
  const deadlineDate = today.toISOString().split("T")[0];

  return (
    <Main>
      <div className="sell_wrap">
        <div className="sell_apply">
          <h3 className="sell_header">판매신청</h3>
          <div className="sell_item">
            <img src="" alt="" className="item_img" />
            <p>상품정보</p>
          </div>

          <form className="sell_form">
            <div>
              <div className="sell_size">
                <label htmlFor="size">사이즈</label>
                <input
                  type="text"
                  id="size"
                  placeholder="사이즈 입력"
                  className="sell_form_input"
                  value={formData.size}
                  onChange={handleChange}
                />
              </div>
              <div className="sell_desc">
                <label htmlFor="desc">상품상태 및 설명</label>
                <textarea
                  id="desc"
                  value={formData.desc}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="sell_price">
                <label htmlFor="price">판매희망가</label>
                <div>
                  <input
                    type="number"
                    placeholder="희망가 입력"
                    id="price"
                    className="sell_form_input"
                    value={formData.price}
                    onChange={handleChange}
                  />
                  <span className="input_unit">원</span>
                </div>
              </div>
            </div>

            <table className="sell_fee">
              <tbody>
                <tr>
                  <td className="fee_title">검수비</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td className="fee_title">수수료</td>
                  <td>
                    {formData.price && formData.deadline
                      ? Math.trunc(parseInt(formData.price) * 0.07)
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="fee_title">배송비</td>
                  <td>선불 · 판매자부담</td>
                </tr>
              </tbody>
            </table>

            <div className="deadline_wrap">
              <h3 className="deadline_header">입찰마감기한</h3>
              <p className="deadline_text">
                {formData.deadline}일 ({deadlineDate} 마감)
              </p>
              <ul className="deadline_dates">
                <li>
                  <button
                    type="button"
                    value="1"
                    onClick={selectDeadline}
                    className={formData.deadline === "1" ? "selected" : ""}
                  >
                    1일
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="3"
                    onClick={selectDeadline}
                    className={formData.deadline === "3" ? "selected" : ""}
                  >
                    3일
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="7"
                    onClick={selectDeadline}
                    className={formData.deadline === "7" ? "selected" : ""}
                  >
                    7일
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="30"
                    onClick={selectDeadline}
                    className={formData.deadline === "30" ? "selected" : ""}
                  >
                    30일
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    value="60"
                    onClick={selectDeadline}
                    className={formData.deadline === "60" ? "selected" : ""}
                  >
                    60일
                  </button>
                </li>
              </ul>
            </div>

            <div className="totalPrice_wrap">
              <p className="totalPrice_title">정산금액</p>
              <p className="totalPrice_amount">
                <span>-</span>
              </p>
            </div>

            <button className="applyBtn" type="submit">
              판매입찰 신청
            </button>
          </form>
        </div>
      </div>
    </Main>
  );
}
