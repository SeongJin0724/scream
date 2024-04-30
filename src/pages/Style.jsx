import React from "react";
import Main from "../components/section/Main";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Review from "../components/contents/Review";

export default function Style() {
  return (
    <Main>
      <div className="style_container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
            <Review height="250px" />
            <Review height="350px" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Main>
  );
}
