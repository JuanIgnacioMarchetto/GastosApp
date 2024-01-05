import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const calculateTotal = () => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount) || 0, 0);
    return total.toFixed(2); 
  };

  return (
    <div className="app-container">
      <div id="viewport"></div>
      <div className="fixed">
        <div id="overlay"></div>
        <h1>Calculadora de Gastos</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <h2>Gastos:</h2>
        <ExpenseList expenses={expenses} />
        <h1>Total de Gastos: ${calculateTotal()}</h1>
      </div>
    </div>
  );
};

export default App;
