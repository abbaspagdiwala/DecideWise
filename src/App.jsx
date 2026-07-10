import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Career from "./pages/Career";
import Finance from "./pages/Finance";
import Startup from "./pages/Startup";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;