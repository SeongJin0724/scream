import React, { useContext, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { ItemDetailContext } from "./ItemDetailContext";
import { useAuth } from "./AuthContext";

export default function Apply({ content, onGetData }) {
  const [size, setSize] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [fee, setFee] = useState("");
  const [deadline, setDeadline] = useState(30);
  const [totalPrice, setTotalPrice] = useState("");
  const [apply, setApply] = useState(false);
  const { item, itemKey } = useContext(ItemDetailContext);
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const changeDeadline = useMemo(() => {
    const today = new Date();
    today.setDate(today.getDate() + parseInt(deadline));
    return today.toISOString().split("T")[0];
  }, [deadline]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "size":
        setSize(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "price":
        setPrice(parseInt(value));
        setFee("");
        setTotalPrice("");
        break;
      default:
        break;
    }
  };

  const selectDeadline = (e) => {
    setDeadline(parseInt(e.target.value));
    if (price) {
      setFee(Math.trunc(parseInt(price) * content.fee));
    }
  };

  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price);
  }

  useEffect(() => {
    if (size && desc && price && deadline && fee) {
      if (content.type === "구매") {
        setTotalPrice(parseInt(price) + parseInt(fee));
        setApply(true);
      }
      if (content.type === "판매") {
        setTotalPrice(parseInt(price) - parseInt(fee));
        setApply(true);
      }
    } else {
      setApply(false);
    }
  }, [size, desc, price, deadline, fee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const deadLine = changeDeadline;

    onGetData({
      itemKey: itemKey,
      userId: user.user_id,
      dealItem: parseInt(itemKey),
      itemTitle: item[0].title,
      size: size,
      desc: desc,
      price: price,
      totalPrice: totalPrice,
      fee: fee,
      deadline: deadLine,
      totalPrice: totalPrice,
    });
  };

  return (
    <div className="apply_wrap">
      <div className="apply_content">
        <h3 className="content_header">{content.type}신청</h3>
        <div className="apply_item">
          <img
            src={item[0].img.split(",", 1)[0]}
            alt={item[0].title}
            className="item_img"
          />
          <div>
            <p className="brand">{item[0].brand}</p>
            <p className="title">{item[0].title}</p>
            <p className="price">
              발매가: {formatPrice(item[0].launchPrice)}원
            </p>
          </div>
        </div>

        <form className="apply_form" onSubmit={handleSubmit}>
          <div>
            <div className="item_size">
              <label htmlFor="size">사이즈</label>
              <input
                type="text"
                id="size"
                placeholder="사이즈 입력"
                className="apply_form_input"
                value={size}
                onChange={handleChange}
              />
            </div>
            <div className="item_desc">
              <label htmlFor="desc">{content.desc}</label>
              <textarea
                id="desc"
                value={desc}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="item_price">
              <label htmlFor="price">{content.type}희망가</label>
              <div>
                <input
                  type="number"
                  placeholder="희망가 입력"
                  id="price"
                  className="apply_form_input"
                  value={price}
                  onChange={handleChange}
                />
                <span className="input_unit">원</span>
              </div>
            </div>
          </div>

          <table className="item_fee">
            <tbody>
              <tr>
                <td className="fee_title">검수비</td>
                <td>무료</td>
              </tr>
              <tr>
                <td className="fee_title">
                  수수료
                  <span className="fee_icon">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </span>
                  <span className="fee_desc">
                    거래 중개 등 제반 서비스 이용료가 포함됩니다.
                  </span>
                </td>
                <td>{fee ? `${formatPrice(fee)}원` : "-"}</td>
              </tr>
              <tr>
                <td className="fee_title">배송비</td>
                <td>{content.deliveryFee}</td>
              </tr>
            </tbody>
          </table>

          <div className="deadline_wrap">
            <h3 className="deadline_header">입찰마감기한</h3>
            <p className="deadline_text">
              {deadline}일 ({changeDeadline} 마감)
            </p>
            <ul className="deadline_dates">
              <li>
                <button
                  type="button"
                  value="1"
                  onClick={selectDeadline}
                  className={deadline === 1 ? "selected" : ""}
                >
                  1일
                </button>
              </li>
              <li>
                <button
                  type="button"
                  value="3"
                  onClick={selectDeadline}
                  className={deadline === 3 ? "selected" : ""}
                >
                  3일
                </button>
              </li>
              <li>
                <button
                  type="button"
                  value="7"
                  onClick={selectDeadline}
                  className={deadline === 7 ? "selected" : ""}
                >
                  7일
                </button>
              </li>
              <li>
                <button
                  type="button"
                  value="30"
                  onClick={selectDeadline}
                  className={deadline === 30 ? "selected" : ""}
                >
                  30일
                </button>
              </li>
              <li>
                <button
                  type="button"
                  value="60"
                  onClick={selectDeadline}
                  className={deadline === 60 ? "selected" : ""}
                >
                  60일
                </button>
              </li>
            </ul>
          </div>

          <div className="totalPrice_wrap">
            <p className="totalPrice_title">{content.total}</p>
            <p
              className={
                totalPrice ? "totalPrice_amount ready" : "totalPrice_amount"
              }
            >
              {totalPrice ? formatPrice(totalPrice) + "원" : "-"}
            </p>
          </div>

          <button
            type="submit"
            className={apply ? "applyBtn showApplyBtn" : "applyBtn"}
            disabled={!apply}
          >
            {content.type}신청
          </button>
        </form>
      </div>
    </div>
  );
}
