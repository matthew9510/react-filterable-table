export default function TableFilter() {
  return (
    <div className="column-container">
      <input type="text" placeholder="Search..." style={{marginBottom: 10}} />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </div>
  );
}
