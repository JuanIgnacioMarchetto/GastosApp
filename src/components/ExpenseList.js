import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => (
  <div>
    {expenses.map((expense, index) => (
      <ExpenseItem key={index} expense={expense} />
    ))}
  </div>
);

export default ExpenseList;
