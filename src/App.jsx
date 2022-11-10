import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:title" element={<Item />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
