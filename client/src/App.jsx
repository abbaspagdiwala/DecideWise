import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DecisionPage from "./pages/DecisionPage";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision/:type" element={<DecisionPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;