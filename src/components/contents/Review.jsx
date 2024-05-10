import React, { useEffect, useState } from "react";
import Img from "../../assets/image/slide_img3.webp";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

export default function Review({ data }) {
  const [shape, setShape] = useState();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    data.height === "350px" ? setShape(350) : setShape(280);
  }, [data.height]);

  const goToPost = () => {
    navigate(`/post/${data.reviewKey}`);
  };

  const onLiked = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <>
      <div
        onClick={goToPost}
        className={
          shape === 350 ? "review_wrap vertical" : "review_wrap square"
        }
      >
        <img src={Img} alt="asdsad" className="review_img" />

        <div className="review_detail">
          <div className="detail_user">
            <p className="user">{data.user}</p>
            <button
              onClick={onLiked}
              className={liked ? "likeBtn liked" : "likeBtn"}
            >
              <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
            </button>
          </div>
          <p className="content">{data.content}</p>
        </div>
      </div>
    </>
  );
}
