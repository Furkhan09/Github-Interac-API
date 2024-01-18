import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import SearchPage from "./pages/Search";
import NotFound from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
