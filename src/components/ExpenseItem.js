import React from 'react';

const ExpenseItem = ({ expense }) => (
  <div>
    <p>{expense.category}</p>
    <p>${expense.amount}</p>
  </div>
);

export default ExpenseItem;
