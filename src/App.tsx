import Nav from "./components/Nav/Nav";
import Side from "./components/Side";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Nav />
      <Side />
      <div>
        <Home />
        <Product />
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
