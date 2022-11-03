import Home from "./pages/Home";
import Product from "./pages/Item";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Home />
      <Product item={1} />
      <Search keyword={"bag"}/>
    </div>
  );
}

export default App;
