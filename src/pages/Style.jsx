import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/section/Main";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Review from "../components/contents/Review";
import { style } from "../components/data/style";

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
                  img: style[11].img,
                  content: `${review.content}`,
                  height: "500px",
                  itemKey: `${review.itemKey}`,
                  reviewKey: `${review.reviewKey}`,
                }}
              />
            ))}
            <Review
              data={{
                user: "windBreeze432",
                img: style[0].img,
                content: "#선풍기",
                height: "450px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "snowFlake321",
                img: style[1].img,
                content: "선글라스🕶",
                height: "480px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: " riverFlow678",
                img: style[2].img,
                content: "NIKE",
                height: "400px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "desertSun015",
                img: style[3].img,
                content: "#모자#가방#스니커즈",
                height: "450px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "greenForest213",
                img: style[4].img,
                content: "🥤🥤🥤",
                height: "500px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "mountainPeak876",
                img: style[5].img,
                content: "#패딩",
                height: "480px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "oceanDepth024",
                img: style[6].img,
                content: "🕶",
                height: "500px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "starShine032",
                img: style[7].img,
                content: "C A R H A R T T",
                height: "400px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "moonLight456",
                img: style[8].img,
                content: "🌴",
                height: "450px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "sunBright789",
                img: style[9].img,
                content: "#사다리",
                height: "500px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
            <Review
              data={{
                user: "blueSky123",
                img: style[10].img,
                content: "블루스카이✈",
                height: "500px",
                itemKey: 3,
                reviewKey: 5,
              }}
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Main>
  );
}
