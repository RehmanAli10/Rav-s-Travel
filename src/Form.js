import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItems(newItem);

    //SETTING BACK THE FORM AND QUANTITY TO ITS INITIAL STATE
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😍 trip?</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((currEle) => (
          <option value={currEle} key={currEle}>
            {currEle}
          </option>
        ))}
      </select>
      <input
        id="1"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Item..."
        name="description"
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
