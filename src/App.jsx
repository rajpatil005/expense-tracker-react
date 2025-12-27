import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <h1>Student Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
