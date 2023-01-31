import TableHeadingRow from "./TableHeadingRow.js";
import TableDataRow from "./TableDataRow.js";

export default function FilteredTable({ products }) {
  const rows = [];
  let category = "";

  products.forEach((product) => {
    if (category !== product.category) {
      rows.push(
        <TableHeadingRow key={product.category} category={product.category} />
      );
    }

    rows.push(<TableDataRow key={product.name} product={product} />);

    category = product.category;
  });

  return (
    <table style={{ width: "100%", paddingTop: 10 }}>
      <thead>
        <tr className="center-content">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
