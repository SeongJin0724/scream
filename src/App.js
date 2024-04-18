import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const PageTest = lazy(() => import("./pages/PageTest"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagestest" element={<PageTest />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
