import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";

function ProductsPage() {
  return (
      <ProductList
        title="Products"
        products={productService.list()}
        buttonText="add to shopping cart"
        handleButtonClick={productService.addToShoppingCart}
      />
  );
}

export default ProductsPage;
