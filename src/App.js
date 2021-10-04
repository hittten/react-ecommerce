import './App.css';
import Header from "./header/Header";
import ProductList from "./product-list/ProductList";
import {list} from "./product-service";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList products={list()}/>
    </div>
  );
}

export default App;
