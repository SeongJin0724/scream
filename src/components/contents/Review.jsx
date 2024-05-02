import React, { useEffect, useState } from "react";
import Img from "../../assets/image/slide_img3.webp";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

export default function Review({ height }) {
  const [shape, setShape] = useState();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    height === "350px" ? setShape(350) : setShape(280);
  }, [height]);

  const navigate = useNavigate();

  const goToPost = () => {
    navigate("/post");
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
            <p className="user">user</p>
            <button
              onClick={onLiked}
              className={liked ? "likeBtn liked" : "likeBtn"}
            >
              <FontAwesomeIcon icon={liked ? faSolidHeart : faRegularHeart} />
            </button>
          </div>
          <p className="content">content</p>
        </div>
      </div>
    </>
  );
}
