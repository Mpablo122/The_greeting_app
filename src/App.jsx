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

// The App component serves as the main entry point for the application, rendering a welcome message, a greeting for the user, and a list of products with their names and prices. It imports the Greetings and Products components to display personalized greetings and product information.
// The App component serves as the main entry point for the application, rendering a welcome message, a greeting for the user, and a list of products with their names and prices. It imports the Greetings and Products components to display personalized greetings and product information.