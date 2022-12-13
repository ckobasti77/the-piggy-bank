import React from "react";
import { BsBackspace } from "react-icons/bs";

const ExpensesList = ({ expensesList, setExpensesList, currency }) => {
  const deleteExpense = (index) => {
    let newList = expensesList;
    newList.splice(index, 1);
    setExpensesList([...newList]);
  };

  return (
    <div className="w-full py-3 px-1 max-h-[66.67%] overflow-y-scroll z-30">
      {expensesList.map((expense, index) => {
        return (
          <div
            className="w-full h-[20%] single-expense flex justify-between rounded-full p-2 my-3"
            key={index}
          >
            <div className="flex justify-between w-11/12">
              <span className="w-3/6 text-black rounded-full py-1 mr-5 text-center">
                {expense.title}
              </span>
              <span className="w-3/6 text-black rounded-full py-1 mr-5 text-center">
                {expense.value}
                {currency}
              </span>
            </div>
            <button
              className="w-1/12 rounded-full delete-expense pl-1 px-5"
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
