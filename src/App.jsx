import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Search from "./pages/Search";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item/>} />
          <Route path="/search" element={<Search keyword={"bag"} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
