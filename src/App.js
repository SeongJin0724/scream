import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import Login from "./components/contents/Login";

const Home = lazy(() => import("./pages/Home"));
const PageTest = lazy(() => import("./pages/PageTest"));
const MyPage = lazy(() => import("./pages/MyPage"));
const Saved = lazy(() => import("./pages/Saved"));
const MenPage = lazy(() => import("./pages/MenPage"));
const WomenPage = lazy(() => import("./pages/WomenPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagestest" element={<PageTest />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
