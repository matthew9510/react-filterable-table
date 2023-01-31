import TableFilter from "./TableFilter";
import FilteredTable from "./FilteredTable";

export default function FilterableTable({ products }) {
  return (
    <div className="filterable-table">
      <TableFilter />
      <FilteredTable products={products} />
    </div>
  );
}
