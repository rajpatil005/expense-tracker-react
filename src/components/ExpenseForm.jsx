import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onAddExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
