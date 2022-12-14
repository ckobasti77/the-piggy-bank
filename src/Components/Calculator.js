import React, { useState, useEffect } from "react";
import Expenses from "./Expenses";

const Calculator = ({
  salary,
  setSalary,
  setCurrency,
  setTimespan,
  currency,
  timespan,
  tax,
  setTotalExpenses,
  totalExpenses,
  setCalculated,
  calculated,
  netIncPercentage,
  expensesPercentage,
  finalIncPercentage,
  theme
}) => {
  const [expensesList, setExpensesList] = useState([]);

  const changeCurrency = (current) => {
    setCurrency(current);
  };

  const changeTimespan = (current) => {
    setTimespan(current);
  };

  useEffect(() => {
    console.log(`Tax%: ${tax},
    NetInc%: ${netIncPercentage}
    Expenses%: ${expensesPercentage},
    FinalInc%: ${finalIncPercentage}
    Salary: ${salary}
    TotalExpenses: ${totalExpenses}`);
  }, [salary, calculated, totalExpenses]);

  useEffect(() => {
    console.log(salary);
  }, [salary]);

  const [donutData, setDonutData] = useState([
    ["Money", "Money"][("Tax", 7500)],
    ["Expenses", 1500],
    ["Final Income", 16000],
  ]);

  const calculate = () => {
    if (salary.length > 0) {
      setCalculated(!calculated);
    }
  };

  const reset = () => {
    setCalculated(!calculated);
    setSalary("");
    setExpensesList([]);
    setTotalExpenses(0)
  };

  const [final, setFinal] = useState('')

  useEffect(() => {
    setFinal(netIncPercentage - 6)
  }, [netIncPercentage])

  return (
    <div className="flex flex-col justify-between items-center max-h-full w-5/6">
      <div className="w-full h-3/12 z-40">
        <div className={theme === 'dark' ? "w-full flex rounded-full my-3 currencies-dark py-2 px-4 text-center justify-between" : "w-full flex rounded-full my-3 currencies py-2 px-4 text-center justify-between"}>
          <button
            className={
              currency === "€"
                ? "active-button text-[#4b0082] rounded-full py-1 w-[30%]"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => changeCurrency("€")}
            title="Euro"
          >
            EUR
          </button>
          <button
            className={
              currency === "$"
                ? "active-button text-[hsl(275,100%,25%)] rounded-full py-1 w-[30%]"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => changeCurrency("$")}
            title="American dollar"
          >
            USD
          </button>
          <button
            className={
              currency === "£"
                ? "active-button text-[#4b0082] rounded-full py-1 w-[30%]"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => changeCurrency("£")}
            title="Australian dollar"
          >
            GBP
          </button>
        </div>
        <div className={theme === 'dark' ? "w-full flex rounded-full my-3 timespans-dark py-2 px-4 text-xs text-center justify-between" : "w-full flex rounded-full my-3 timespans py-2 px-4 text-xs text-center justify-between"}>
          <button
            className={
              timespan === "annual"
                ? "active-button text-[#4b0082] rounded-full py-1 w-[30%]"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => {
              changeTimespan("annual");
            }}
          >
            Annual
          </button>
          <button
            className={
              timespan === "monthly"
                ? "active-button text-[#4b0082] rounded-full py-1 w-[30%]"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => {
              changeTimespan("monthly");
            }}
          >
            Monthly
          </button>
          <button
            className={
              timespan === "weekly"
                ? "active-button text-[#4b0082] rounded-full py-1"
                : "rounded-full py-1 w-[30%]"
            }
            onClick={() => {
              changeTimespan("weekly");
            }}
          >
            Weekly
          </button>
        </div>
      </div>
      {calculated ? (
        <div className="h-full w-full flex flex-col justify-start items-between my-5 p-[1%]">
          <div
            className={theme === 'dark' ? `h-[17.5%] my-[2.5%] w-full rounded-full single-chart-dark flex items-center justify-center p-3` : `h-[17.5%] my-[2.5%] w-full rounded-full single-chart flex items-center justify-center p-3`}
          >
            100%
          </div>
          <div
            className={theme === 'dark' ? `h-[17.5%] my-[2.5%] w-[${tax}%] rounded-full single-chart-dark flex items-center justify-center p-3` : `h-[17.5%] my-[2.5%] w-[${tax}%] rounded-full single-chart flex items-center justify-center p-3`}
          >
            {tax}%
          </div>
          <div
            className={theme === 'dark' ? `h-[17.5%] my-[2.5%] w-[${netIncPercentage}%] rounded-full single-chart-dark flex items-center justify-center p-3` : `h-[17.5%] my-[2.5%] w-[${netIncPercentage}%] rounded-full single-chart flex items-center justify-center p-3`}
          >
            {netIncPercentage}%
          </div>
          <div
            className={theme === 'dark' ? `h-[17.5%] my-[2.5%] w-[5%] rounded-full single-chart-dark flex items-center justify-center p-3` : `h-[17.5%] my-[2.5%] w-[5%] rounded-full single-chart flex items-center justify-center p-3`}
          >
            {expensesPercentage}%
          </div>
          <div
            className={theme === 'dark' ? `h-[17.5%] my-[2.5%] w-[75%] rounded-full single-chart-dark flex items-center justify-center p-3` : `h-[17.5%] my-[2.5%] w-[75%] rounded-full single-chart flex items-center justify-center p-3`}
          >
            {finalIncPercentage}%
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-between">
          <div className="mt-2 pl-1 w-full">
            <label htmlFor="salary" className="pl-1">
              Enter your <span className="text-[#4b0082] underline font-bold">{timespan}</span> GROSS income
              in <span className="text-[#4b0082] underline font-bold">{currency}</span>:
            </label>
            <div className="w-full flex justify-between">
              <input
                type="text"
                name="salary"
                id="salary"
                className={theme === 'dark' ? "mt-1 w-full rounded-full salary-dark dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none" : "mt-1 w-full rounded-full salary dark:bg-[#131419] dark:text-white bg-[#f5f4f7] border-none"}
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-full">
            <Expenses
              currency={currency}
              timespan={timespan}
              setTotalExpenses={setTotalExpenses}
              totalExpenses={totalExpenses}
              expensesList={expensesList}
              setExpensesList={setExpensesList}
              theme={theme}
            />
          </div>
        </div>
      )}
      {!calculated ? (
        <button
          className={theme === 'dark' ? "w-full text-white rounded-full h-1/12 py-1 px-2 mt-2 calculate-button-dark translate-y-[-5px] hover:translate-y-[0px] border-[1px] border-none bg-[#4b0082]" : "w-full text-white rounded-full h-1/12 py-1 px-2 mt-2 calculate-button translate-y-[-5px] hover:translate-y-[0px] border-[1px] border-none bg-[#4b0082]"}
          onClick={() => {
            calculate();
          }}
        >
          Calculate
        </button>
      ) : (
        <button
          className={theme === 'dark' ? "w-full text-white rounded-full h-1/12 py-1 px-2 mt-2 calculate-button-dark translate-y-[-5px] hover:translate-y-[0px] border-[1px] border-none bg-[#4b0082]" : "w-full text-white rounded-full h-1/12 py-1 px-2 mt-2 calculate-button translate-y-[-5px] hover:translate-y-[0px] border-[1px] border-none bg-[#4b0082]"}
          onClick={() => reset()}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Calculator;
