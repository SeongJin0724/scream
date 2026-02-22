import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Review from "../components/contents/Review";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function Style() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/reviews`);
        setReviews(response.data[0] || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const heights = ["400px", "450px", "480px", "500px"];

  return (
    <Main>
      <div className="style_container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {reviews.map((review, index) => (
              <Review
                key={review.reviewKey}
                data={{
                  user: `${review.user_id}`,
                  img: review.img,
                  content: `${review.content}`,
                  height: heights[index % heights.length],
                  itemKey: `${review.itemKey}`,
                  reviewKey: `${review.reviewKey}`,
                }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Main>
  );
}
