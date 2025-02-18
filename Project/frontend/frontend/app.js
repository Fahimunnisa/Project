import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="app">
      <h1>Flipkart Clone</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;