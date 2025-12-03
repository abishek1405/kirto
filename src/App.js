import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import ContactUs from "./component/contact"
import Career from "./component/career";
import Ourteam from "./component/ourteam"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/ourteam" element={<Ourteam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
