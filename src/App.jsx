import React from "react";
import Greetings from "./components/Greetings";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Greetings name="Jaquarius Fondingle" />
      <h2>Products</h2>
        <Products name="IPhone 15" price="$999" />
        <Products name="Sony headphones" price="$499" />
        <Products name="Mechanical keyboard" price="$199" />
    </div>
  );
}

export default App;