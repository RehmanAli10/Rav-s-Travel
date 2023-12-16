function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((currItem) => currItem.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <span>You got everything! Ready to go ✈ </span>
      ) : (
        <span>
          You have {numItems} items on your list, and you already
          <em>
            packed {packedItems} ({percentage}%)
          </em>
        </span>
      )}
    </footer>
  );
}
export default Stats;
