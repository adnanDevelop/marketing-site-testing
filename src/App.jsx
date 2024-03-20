import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/global/Navbar";
import Footer from "./component/global/Footer";
import Home from "./pages/Home";
import ServiceSolution from "./pages/ServiceSolution";
import ServiceSoftware from "./pages/ServiceSoftware";
import ServiceAutomation from "./pages/ServiceAutomation";
import About from "./pages/About";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CareerSingle from "./pages/CareerSingle";
import WorkTogether from "./pages/WorkTogether";
import TopBtn from "./component/global/TopBtn";

function App() {
  useEffect(() => {
    // SCROLL ANIMATION
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <TopBtn />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesolution" element={<ServiceSolution />} />
          <Route path="/servicesoftware" element={<ServiceSoftware />} />
          <Route path="/serviceautomation" element={<ServiceAutomation />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:userId" element={<CareerSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worktogether" element={<WorkTogether />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
