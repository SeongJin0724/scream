import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/contents/AuthContext";
import Main from "../components/section/Main";
import MyPageUi from "../components/contents/MyPageUi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const MyStyle = () => {
  const { user } = useAuth();
  const [part, setPart] = useState("post");
  const [post, setPost] = useState([]);
  const [review, setReview] = useState([]);
  const [alert, setAlert] = useState(false);

  async function fetchPost() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/posts`,
        {
          user_id: user.user_id,
        }
      );
      setPost(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchReview() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/reviews`,
        {
          user_id: user.user_id,
          review: false,
        }
      );
      setReview(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPost();
    fetchReview();
  }, [part, user.user_id]);

  const onDeleteReview = async (e) => {
    const reviewKey = e.target.value;
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/deleteReview/${reviewKey}`
      );
      console.log("삭제 성공:", response.data);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      await fetchPost();
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
        <div className="myStyle_container">
          {alert && (
            <div className="alertModal">
              <p>
                <FontAwesomeIcon icon={faCircleCheck} className="check" />{" "}
                게시글 삭제 완료
              </p>
            </div>
          )}
          <h1 className="myStyle_header">내 스타일</h1>
          <ul className="myStyle_list">
            <li>
              <button
                type="button"
                className={
                  part === "post" ? "list_section post" : "list_section"
                }
                onClick={() => setPart("post")}
              >
                <p className="totalList">{post.length}</p>
                <p className="totalList_title">내 게시글</p>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={
                  part === "review" ? "list_section review" : "list_section"
                }
                onClick={() => setPart("review")}
              >
                <p className="totalList">{review.length}</p>
                <p className="totalList_title"> 작성 가능한 후기 </p>
              </button>
            </li>
          </ul>

          <ul className="myPost_wrap">
            {part === "post" &&
              post.map((post) => (
                <li key={post.reviewKey} className="post_list">
                  <Link to={`/post/${post.reviewKey}`}>
                    <img
                      src={post.img}
                      alt={post.itemKey}
                      className="post_img"
                    />
                  </Link>
                  <button
                    onClick={onDeleteReview}
                    value={post.reviewKey}
                    type="button"
                    className="deleteBtn"
                  >
                    ×
                  </button>
                </li>
              ))}
          </ul>

          <ul className="detail_list_wrap">
            {part === "review" &&
              review.map((review) => (
                <li key={review.orderKey} className="detail_list">
                  <div className="detail_type">
                    <p className="type_title">구매완료</p>
                    <p className="apply_date">
                      {new Date(review.orderDate).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                  <div className="detail_desc">
                    <div className="desc_section">
                      <Link
                        to={`/uploadReview/${review.itemKey}`}
                        className="styleBtn"
                      >
                        STYLE 후기 작성
                      </Link>
                      <p className="item_title">{review.itemTitle}</p>
                    </div>
                    <p className="item_info">{formatPrice(review.price)}원</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </MyPageUi>
    </Main>
  );
};

export default MyStyle;
