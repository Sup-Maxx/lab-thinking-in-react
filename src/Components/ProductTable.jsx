import ProductsPage from "./ProductPage";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {products.map((product) => {
            return (
              <ProductRow
                product={product}
                key={product.id}
                inStock={product.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable