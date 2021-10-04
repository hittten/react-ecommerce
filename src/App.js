import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products"/>
        </Route>
        <Route path="/products">
          <ProductsPage/>
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
