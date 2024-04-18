import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const Join = lazy(() => import("./pages/Join"));
const Login = lazy(() => import("./pages/Login"));
const Man = lazy(() => import("./pages/Man"));
const Woman = lazy(() => import("./pages/Woman"));
const MyPage = lazy(() => import("./pages/MyPage"));

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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
