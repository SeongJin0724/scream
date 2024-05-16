import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

export default function Review({ data }) {
  const [shape, setShape] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    switch (data.height) {
      case "400px":
        setShape("level_0");
        break;
      case "450px":
        setShape("level_1");
        break;
      case "480px":
        setShape("level_2");
        break;
      case "500px":
        setShape("level_3");
        break;
      default:
    }
  }, [data.height]);

  const onLiked = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <>
      <Link to={`/post/${data.reviewKey}`} className={`review_wrap ${shape}`}>
        <img src={data.img} alt="img" className="review_img" />

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
      </Link>
    </>
  );
}
