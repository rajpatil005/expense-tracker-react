import ExpenseItem from "./ExpenseItem";

function ExpenseList({ items, onDeleteExpense }) {
  if (items.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <ul>
      {items.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDeleteExpense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
