import React, { useEffect, useState } from "react";
import Img from "../../assets/image/slide_img1.webp";
import { Link } from "react-router-dom";

export default function Review({ height }) {
  const [shape, setShape] = useState();

  useEffect(() => {
    height === "350px" ? setShape(350) : setShape(280);
  }, [height]);

  return (
    <Link
      to="/post"
      className={shape === 350 ? "review_wrap vertical" : "review_wrap square"}
    >
      <img src={Img} alt="asdsad" className="review_img" />
      <div className="review_detail">
        <p className="user">user</p>
        <p className="content">content</p>
      </div>
    </Link>
  );
}
