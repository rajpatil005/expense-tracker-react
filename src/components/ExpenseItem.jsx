function ExpenseItem({ expense, onDelete }) {
  return (
    <li>
      {expense.title} - ₹{expense.amount}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
