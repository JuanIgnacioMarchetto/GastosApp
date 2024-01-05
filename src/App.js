import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <h1>Calculadora de Gastos</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h2>Gastos:</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
