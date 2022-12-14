import React from "react";
import { BsBackspace } from "react-icons/bs";

const ExpensesList = ({ expensesList, setExpensesList, currency, theme }) => {
  const deleteExpense = (index) => {
    let newList = expensesList;
    newList.splice(index, 1);
    setExpensesList([...newList]);
  };

  return (
    <div className="w-full py-3 px-1 h-8/4 lista z-30 overflow-y-scroll dark:text-white">
      {expensesList.map((expense, index) => {
        return (
          <div
            className={
              theme === "dark"
                ? "w-full h-[20%] single-expense-dark flex justify-between rounded-full p-2 my-3 dark:text-white"
                : "w-full h-[20%] single-expense flex justify-between rounded-full p-2 my-3 dark:text-white"
            }
            key={index}
          >
            <div className="flex justify-between w-11/12">
              <span className="w-3/6 text-black dark:text-white rounded-full py-1 mr-5 text-center">
                {expense.title}
              </span>
              <span className="w-3/6 text-black dark:text-white rounded-full py-1 mr-5 text-center">
                {expense.value}
                {currency}
              </span>
            </div>
            <button
              className={
                theme === "dark"
                  ? "w-1/12 rounded-full delete-expense-dark pl-1 px-5 hover:text-[#4b0082]"
                  : "w-1/12 rounded-full delete-expense pl-1 px-5 hover:text-[#4b0082]"
              }
              title={`Remove '${expense.title}' expense.`}
              onClick={() => deleteExpense(index)}
            >
              <BsBackspace />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpensesList;
