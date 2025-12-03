import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import ContactUs from "./component/contact"
import Career from "./component/career";
import Ourteam from "./component/ourteam"
import Pagenotfound from "./component/pagenotfound"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/careers" element={<Career />} />
        <Route exact path="/ourteam" element={<Ourteam />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
