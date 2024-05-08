import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import { AuthProvider } from "./components/contents/AuthContext";
import { ItemKeyProvider } from "./components/contents/ItemDetailContext";
import ItemDetail from "./pages/ItemDetail";

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
const AddressUpdate = lazy(() => import("./pages/AddressUpdate"));
const Talented = lazy(() => import("./pages/Talented"));
const Partnership = lazy(() => import("./pages/Partnership"));
const Terms = lazy(() => import("./pages/Terms"));
const Personal = lazy(() => import("./pages/Personal"));
const Question = lazy(() => import("./pages/Question"));
const Gather = lazy(() => import("./pages/Gather"));
const BrandProducts = lazy(() => import("./pages/BrandProducts"));
const Standards = lazy(() => import("./pages/Standards"));
const Notice = lazy(() => import("./pages/Notice"));
const Notice5 = lazy(() => import("./pages/Notice5"));
const Notice4 = lazy(() => import("./pages/Notice4"));
const Sell = lazy(() => import("./pages/Sell"));
const Buy = lazy(() => import("./pages/Buy"));
const Notice3 = lazy(() => import("./pages/Notice3"));
const Infochange = lazy(() => import("./pages/Infochange"));
const Profilechange = lazy(() => import("./pages/Profilechange"));
const ViewUserProfile = lazy(() => import("./pages/ViewUserProfile"));
const Style = lazy(() => import("./pages/Style"));
const Post = lazy(() => import("./pages/Post"));
const UploadReview = lazy(() => import("./pages/UploadReview"));
const AddressSearchPage = lazy(() => import("./pages/AddressSearchPage"));
const Order = lazy(() => import("./pages/Order"));
const Account = lazy(() => import("./pages/Account"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

function App() {
  return (
    <AuthProvider>
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
            <Route path="/mypage/address" element={<AddressUpdate />} />
            <Route path="/talented" element={<Talented />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/question" element={<Question />} />
            <Route path="/gather" element={<Gather />} />
            <Route path="/brands/:brand" element={<BrandProducts />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/notice/5" element={<Notice5 />} />
            <Route path="/notice/4" element={<Notice4 />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/notice/3" element={<Notice3 />} />
            <Route path="/mypage/infochange" element={<Infochange />} />
            <Route path="/mypage/profilechange" element={<Profilechange />} />
            <Route path="/viewuser" element={<ViewUserProfile />} />
            <Route path="/style" element={<Style />} />
            <Route path="/post" element={<Post />} />
            <Route path="/uploadReview" element={<UploadReview />} />
            <Route
              path="/items/:itemKey"
              element={
                <ItemKeyProvider>
                  <ItemDetail />
                </ItemKeyProvider>
              }
            />
            <Route
              path="/items/:itemKey/sell"
              element={
                <ItemKeyProvider>
                  <Sell />
                </ItemKeyProvider>
              }
            />
            <Route
              path="/address-search-page"
              element={<AddressSearchPage />}
            />
            <Route path="/order" element={<Order />} />
            <Route path="mypage/account" element={<Account />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
