import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({ category: '', amount: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense(expense);
        setExpense({ category: '', amount: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <input type="text" name="category" value={expense.category} onChange={handleChange} />
            </label>
            <label>
                Amount:
                <input type="number" name="amount" value={expense.amount} onChange={handleChange} />
            </label>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
