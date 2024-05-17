import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { style } from "../components/data/style";

export default function Post() {
  const [styleItem, setStyleItem] = useState();
  const { reviewKey } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/styleItem/${reviewKey}`
        );
        setStyleItem(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Main>
      <div className="post_container_wrap">
        <div className="post_container">
          {/* <div className="user_info">
          <p className="user_name">{styleItem?.user_id}</p>
        </div> */}
          <img src={style ? style[11].img : ""} alt="" className="post_img" />
          <div className="post_tag_wrap">
            <h3 className="tag_header">상품태그</h3>
            <Link to={`/items/${styleItem?.itemKey}`} className="tag_item">
              <img
                src={styleItem ? styleItem.img.split(",", 1)[0] : ""}
                alt={styleItem ? styleItem.title : ""}
                className="item_img"
              />
              <div className="item_info">
                <p className="item_title">{styleItem?.brand}</p>
                <p className="item_title">{styleItem?.title}</p>
                <p className="item_price">{styleItem?.launchPrice}원</p>
              </div>
            </Link>
          </div>
          <p className="post_content">{styleItem?.content}</p>
        </div>
      </div>
    </Main>
  );
}
