import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Review from "../components/contents/Review";
import { Link } from "react-router-dom";

export default function Style() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/reviews`
        );
        setReviews(response.data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Main>
      <div className="style_container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {reviews.map((review) => (
              <Review
                key={review.reviewKey}
                data={{
                  user: `${review.user_id}`,
                  img: `${review.img}`,
                  content: `${review.content}`,
                  height: "250px",
                  itemKey: `${review.itemKey}`,
                  reviewKey: `${review.reviewKey}`,
                }}
              />
            ))}
            {/* <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" /> */}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Main>
  );
}
