import { useState } from "react";
import "./App.css";
import Products from "./components/Products.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="products">
        <div className="container">
          <h3 className="products-title">Каталог</h3>
          <Products />
        </div>
      </section>
    </>
  );
}

export default App;
