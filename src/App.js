import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(data);
  const clickHandler = (e) => {
    const category = e.target.innerHTML;
    if (category === "Home") {
      setProducts(data);
    } else {
      const selectedItem = data.filter(
        (product) => product.category === category
      );
      setProducts(selectedItem);
    }
  };

  return (
    <div className="App">
      <Navbar clickHandler={clickHandler} />
      <List products={products} />
    </div>
  );
}

export default App;
