import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimeDetail } from "./components/pages/AnimeDetail";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
