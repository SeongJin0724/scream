import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const Join = lazy(() => import("./pages/Join"));
const Login = lazy(() => import("./pages/Login"));
const Man = lazy(() => import("./pages/Man"));
const Woman = lazy(() => import("./pages/Woman"));
const SearchRes = lazy(() => import("./pages/SearchRes"));
const MyPage = lazy(() => import("./pages/MyPage"));
const FooterStandards = lazy(() => import("./pages/FooterStandards"));
const Policy = lazy(() => import("./pages/Policy"));
const Penalty = lazy(() => import("./pages/Penalty"));
const Guideline = lazy(() => import("./pages/Guideline"));
const FooterNotice = lazy(() => import("./pages/FooterNotice"));
const Service = lazy(() => import("./pages/Service"));
const Storeinfo = lazy(() => import("./pages/Storeinfo"));
const Acceptance = lazy(() => import("./pages/Acceptance"));
const Company = lazy(() => import("./pages/Company"));
const Talented = lazy(() => import("./pages/Talented"));
const Partnership = lazy(() => import("./pages/Partnership"));
const Terms = lazy(() => import("./pages/Terms"));
const Personal = lazy(() => import("./pages/Personal"));
const Question = lazy(() => import("./pages/Question"));
const Detail1 = lazy(() => import("./pages/Detail1"));
const Gather = lazy(() => import("./pages/Gather"));
const BrandProducts = lazy(() => import("./pages/BrandProducts"));
const Standards = lazy(() => import("./pages/Standards"));
const Notice = lazy(() => import("./pages/Notice"));
const Notice5 = lazy(() => import("./pages/Notice5"));
const Notice4 = lazy(() => import("./pages/Notice4"));
const Sell = lazy(() => import("./pages/Sell"));
const Notice3 = lazy(() => import("./pages/Notice3"));
const Test = lazy(() => import("./pages/Test"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/searchres" element={<SearchRes />} />
          <Route path="/footerstandards" element={<FooterStandards />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/penalty" element={<Penalty />} />
          <Route path="/guideline" element={<Guideline />} />
          <Route path="/footernotice" element={<FooterNotice />} />
          <Route path="/service" element={<Service />} />
          <Route path="/storeinfo" element={<Storeinfo />} />
          <Route path="/acceptance" element={<Acceptance />} />
          <Route path="/company" element={<Company />} />
          <Route path="/talented" element={<Talented />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/question" element={<Question />} />
          <Route path="/detail1" element={<Detail1 />} />
          <Route path="/gather" element={<Gather />} />
          <Route path="/brands/:brand" element={<BrandProducts />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/5" element={<Notice5 />} />
          <Route path="/notice/4" element={<Notice4 />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/notice/3" element={<Notice3 />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
