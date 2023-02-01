import TableFilter from "./TableFilter";
import FilteredTable from "./FilteredTable";
import { useState } from "react";

export default function FilterableTable({ products }) {
    const [isInStockOnly, setIsInStockOnly] = useState(false);
    const [tableSearchTerm, setTableSearchTerm] = useState('')
    const filteredProducts = products.filter((product)=>{
        if(product.name.toLowerCase().indexOf(tableSearchTerm.toLowerCase())!==-1){
            if((isInStockOnly && product.stocked) || !isInStockOnly){
                return true
            }
        }
        return false
    })

    function onSearchTermChange(e){
        setTableSearchTerm(e.target.value)
    }

  return (
    <div className="filterable-table">
      <TableFilter isInStockOnly={isInStockOnly} setIsInStockOnly={setIsInStockOnly} tableSearchTerm={tableSearchTerm} onSearchTermChange={onSearchTermChange} />
      <FilteredTable products={filteredProducts} />
    </div>
  );
}
