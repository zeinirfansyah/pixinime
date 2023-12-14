import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimeDetail } from "./components/pages/AnimeDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
