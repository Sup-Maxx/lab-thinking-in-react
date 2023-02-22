function ProductRow(props) {
    const { name, inStock, price } = props.product;
  
    return (
      <tr>
        {inStock ? <td>{name}</td> : <td style={{color:"red"}}>{name}</td>}
        <td>{price}</td>
      </tr>
    );
}

export default ProductRow