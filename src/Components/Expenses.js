import React, { useState, useEffect } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({
  currency,
  timespan,
  setTotalExpenses,
  totalExpenses,
  expensesList,
  setExpensesList,
  theme
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
        theme={theme}
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
              Expense <span className="indigo text-[1rem] text-[#4b0082] underline font-bold">({timespan})</span>:
            </label>
            <input
              type="text"
              id="expense-title"
              className={theme === 'dark' ? "w-full py-1 px-2 rounded-full expense-title-dark dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none" : "w-full py-1 px-2 rounded-full expense-title dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none"}
              value={expenseTitle}
              onChange={(e) => {
                setExpenseTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-3/6">
            <label htmlFor="expense-value" className="pl-1">
              Value in <span className="indigo text-[1rem] text-[#4b0082] underline font-bold">{currency}:</span>
            </label>
            <input
              type="text"
              id="expense-value"
              className={theme === 'dark' ? "w-full py-1 px-2 rounded-full expense-value-dark dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none" : "w-full py-1 px-2 rounded-full expense-value dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none"}
              value={expenseValue}
              onChange={(e) => {
                setExpenseValue(e.target.value);
              }}
            />
          </div>
        </div>
        <button className={theme === 'dark' ? "w-full rounded-full my-3 add-expense-dark py-2 px-4" : "w-full rounded-full my-3 add-expense py-2 px-4"}>
          Add expense <span className="plus text-[#4b0082]">+</span>
        </button>
      </form>
    </div>
  );
};

export default Expenses;
