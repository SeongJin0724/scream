import Main from "./../components/section/Main";
import Carousel from "../components/contents/Carousel";
import TopBrand from "../components/contents/TopBrand";

export default function Home() {
  return (
    <Main>
      <Carousel />
      <div className="home_wrap">
        <TopBrand />
      </div>
    </Main>
  );
}
