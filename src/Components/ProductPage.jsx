import { useState } from "react"
import productData from "../data.json"

//import components
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

function ProductsPage() {
  const [products, setProducts] = useState(productData);
  const [productFiltered, setproductFiltered] = useState('');

  let filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(productFiltered);
  });

  function handleSearchChange(searchText) {
    setproductFiltered(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleSearchChange={handleSearchChange}
        setproductFiltered={setproductFiltered}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage