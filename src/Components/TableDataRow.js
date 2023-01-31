export default function TableDataRow({ product }) {
  const productName = product.stocked ? (
    <td>{product.name}</td>
  ) : (
    <td>
      <span style={{ color: "red" }}>{product.name}</span>
    </td>
  );

  return (
    <tr>
      {productName}
      <td>{product.price}</td>
    </tr>
  );
}
