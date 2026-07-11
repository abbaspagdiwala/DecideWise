import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DecisionPage from "./pages/DecisionPage";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import Analysis from "./pages/Analysis";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision/:type" element={<DecisionPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
