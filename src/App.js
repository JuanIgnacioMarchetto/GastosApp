import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
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
      </div>
    </div>
  );
};

export default App;
