export default function TableFilter({
  isInStockOnly,
  setIsInStockOnly,
  tableSearchTerm,
  onSearchTermChange,
}) {
  return (
    <div className="column-container">
      <input
        type="text"
        placeholder="Search..."
        style={{ marginBottom: 10 }}
        value={tableSearchTerm}
        onChange={onSearchTermChange}
      />
      <label>
        <input
          type="checkbox"
          value={isInStockOnly}
          onChange={() => {
            setIsInStockOnly((prevIsInStockOnly) => !prevIsInStockOnly);
          }}
        />
        {" "}
        Only show products in stock
      </label>
    </div>
  );
}
