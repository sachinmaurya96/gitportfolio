import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repository from "./components/pages/Repository";
import Home from "./components/Home";
import Projects from "./components/pages/Projects";
import Frontend from "./components/pages/Frontend";
import Backend from "./components/pages/Backend";
import Resume from "./components/pages/Resume";
import Compleate from "./components/pages/Compleate";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Projects />} />
            <Route path="/front" element={<Frontend />} />
            <Route path="/back" element={<Backend />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/compleate" element={<Compleate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ripo" element={<Repository />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
