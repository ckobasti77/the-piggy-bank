import React, { useState, useEffect } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({
  currency,
  timespan,
  setTotalExpenses,
  totalExpenses,
  expensesList,
  setExpensesList,
}) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseValue, setExpenseValue] = useState("");

  const addExpense = () => {
    if (expenseTitle.length > 0 && expenseValue.length > 0) {
      setExpensesList([
        ...expensesList,
        { title: expenseTitle, value: parseInt(expenseValue) },
      ]);
      setTotalExpenses(parseInt(totalExpenses) + parseInt(expenseValue));
      setExpenseTitle("");
      setExpenseValue("");
    } else {
      alert("Fill in the fields for the name and value of the expense.");
    }
  };

  return (
    <div className="w-full h-11/12">
      <ExpensesList
        expensesList={expensesList}
        setExpensesList={setExpensesList}
        currency={currency}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExpense();
        }}
        className="h-4/12 z-40"
      >
        <div className="flex w-full">
          <div className="flex flex-col w-3/6 mr-2">
            <label htmlFor="expense-title" className="pl-1">
              Expense <span className="indigo">({timespan})</span>:
            </label>
            <input
              type="text"
              id="expense-title"
              className="w-full py-1 px-2 rounded-full"
              value={expenseTitle}
              onChange={(e) => {
                setExpenseTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-3/6">
            <label htmlFor="expense-value" className="pl-1">
              Value in <span className="indigo">{currency}:</span>
            </label>
            <input
              type="text"
              id="expense-value"
              className="w-full py-1 px-2 rounded-full"
              value={expenseValue}
              onChange={(e) => {
                setExpenseValue(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="w-full rounded-full my-3 add-expense py-2 px-4">
          Add expense <span className="plus">+</span>
        </button>
      </form>
    </div>
  );
};

export default Expenses;
