import Main from "./../components/section/Main";
import Carousel from "../components/contents/Carousel";
import TopBrand from "../components/contents/TopBrand";
import NewIn from "../components/contents/NewIn";

export default function Home() {
  return (
    <Main>
      <Carousel />
      <div className="home_wrap">
        <TopBrand />
        {/* <NewIn /> */}
      </div>
    </Main>
  );
}
