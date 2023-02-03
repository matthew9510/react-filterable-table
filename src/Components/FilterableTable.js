import TableFilter from "./TableFilter";
import FilteredTable from "./FilteredTable";
import { useState } from "react";

export default function FilterableTable({ products }) {
    const [isInStockOnly, setIsInStockOnly] = useState(false);
    const [tableSearchTerm, setTableSearchTerm] = useState('')

    function onSearchTermChange(e){
        setTableSearchTerm(e.target.value)
    }

  return (
    <div className="filterable-table">
      <TableFilter isInStockOnly={isInStockOnly} setIsInStockOnly={setIsInStockOnly} tableSearchTerm={tableSearchTerm} onSearchTermChange={onSearchTermChange} />
      <FilteredTable products={products} isInStockOnly={isInStockOnly} tableSearchTerm={tableSearchTerm} />
    </div>
  );
}
