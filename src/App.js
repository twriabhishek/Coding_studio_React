import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import IndexFile from "./components/indexFile.js";
import AboutFile from "./components/aboutFile.js";
import Blogfile from "./components/blogFile.js";
import ContactFile from "./components/contactFile.js";
import ServiceFile from "./components/serviceFile.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexFile />}></Route>
        <Route path="/about" element={<AboutFile />}></Route>
        <Route path="/blog" element={<Blogfile />}></Route>
        <Route path="/contact" element={<ContactFile />}></Route>
        <Route path="/services" element={<ServiceFile />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
