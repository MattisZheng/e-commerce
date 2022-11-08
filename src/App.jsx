import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Item from "./pages/Item";
import Search from "./pages/Search";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/search/:keyword" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
