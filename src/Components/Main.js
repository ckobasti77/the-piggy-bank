import React, { useState, useEffect } from "react";
import euro from "../public/euro.png";
import dollar from "../public/dollar.png";
import pound from "../public/pound.png";
import Calculator from "./Calculator";
import Table from "./Table";

const Main = () => {
  const [salary, setSalary] = useState("");
  const [calculate, setCalculate] = useState(false);
  const [currency, setCurrency] = useState("€");
  const [timespan, setTimespan] = useState("annual");

  const [annualGross, setAnnualGross] = useState("");
  const [monthlyGross, setMonthlyGross] = useState("");
  const [weeklyGross, setWeeklyGross] = useState("");
  const [dialyGross, setDialyGross] = useState("");

  const [totalExpenses, setTotalExpenses] = useState(0);

  const [annualExpenses, setAnnualExpenses] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [weeklyExpenses, setWeeklyExpenses] = useState(0);
  const [dialyExpenses, setDialyExpenses] = useState(0);

  const [taxPercentage, setTaxPercentage] = useState(0);
  const [netIncPercentage, setNetIncPercentage] = useState(0);
  const [expensesPercentage, setExpensesPercentage] = useState(0);
  const [finalIncPercentage, setFinalIncPercentage] = useState(0);

  const [tax, setTax] = useState(0);

  useEffect(() => {
    if (timespan === "annual") {
      setAnnualGross(salary);
      setMonthlyGross(salary / 12);
      setWeeklyGross(salary / 12 / 4);
      setDialyGross(salary / 12 / 4 / 7);

      setAnnualExpenses(totalExpenses);
      setMonthlyExpenses(totalExpenses / 12);
      setWeeklyExpenses(totalExpenses / 12 / 4);
      setDialyExpenses(totalExpenses / 12 / 4 / 7);

    } else if (timespan === "monthly") {
      setMonthlyGross(salary);
      setAnnualGross(salary * 12);
      setWeeklyGross(salary / 4);
      setDialyGross(salary / 4 / 7);

      setMonthlyExpenses(totalExpenses);
      setAnnualExpenses(totalExpenses * 12);
      setWeeklyExpenses(totalExpenses / 4);
      setDialyExpenses(totalExpenses / 4 / 7);
      
    } else if (timespan === "weekly") {
      setWeeklyGross(salary);
      setMonthlyGross(salary * 4);
      setAnnualGross(salary * 4 * 12);
      setDialyGross(salary / 7);

      setWeeklyExpenses(totalExpenses);
      setMonthlyExpenses(totalExpenses * 4);
      setAnnualExpenses(totalExpenses * 4 * 12);
      setDialyExpenses(totalExpenses / 7);

    }
  }, [timespan, salary, totalExpenses]);

  useEffect(() => {
    if (timespan === "annual") {
      if (parseInt(annualGross) < 5000) {
        setTax("10");
      } else if (
        parseInt(annualGross) >= 5000 &&
        parseInt(annualGross) < 15000
      ) {
        setTax("20");
      } else if (parseInt(annualGross) >= 15000) {
        setTax("30");
      }

    } else if (timespan === "monthly") {
      if (parseInt(monthlyGross) * 12 < 5000) {
        setTax("10");
      } else if (
        parseInt(monthlyGross) * 12 >= 5000 &&
        parseInt(monthlyGross) * 12 < 15000
      ) {
        setTax("20");
      } else if (parseInt(monthlyGross) * 12 >= 15000) {
        setTax("30");
      }
    } else if (timespan === "weekly") {
      if (parseInt(weeklyGross * 12 * 4) < 5000) {
        setTax("10");
      } else if (
        parseInt(weeklyGross * 12 * 4) >= 5000 &&
        parseInt(weeklyGross * 12 * 4) < 15000
      ) {
        setTax("20");
      } else if (parseInt(weeklyGross * 12 * 4) >= 15000) {
        setTax("30");
      }
    }
  }, [annualGross, timespan, totalExpenses, salary]);

  
  useEffect(() => {
    if (timespan === "annual") {
      setNetIncPercentage(
        parseInt(
          ((annualGross - (tax / 100) * annualGross) / annualGross) * 100
        )
      );
    } else if (timespan === "monthly") {
      setNetIncPercentage(
        parseInt(
          ((monthlyGross - (tax / 100) * monthlyGross) / monthlyGross) * 100
        )
      );
    } else if (timespan === "weekly") {
      setNetIncPercentage(
        parseInt(
          ((weeklyGross - (tax / 100) * weeklyGross) / weeklyGross) * 100
        )
      );
    }
  }, [tax]);
  
  useEffect(() => {
    if (timespan === "annual") {
      setExpensesPercentage((annualExpenses / annualGross) * 100);
    } else if (timespan === "monthly") {
      setExpensesPercentage((monthlyExpenses / monthlyGross) * 100);
    } else if (timespan === "weekly") {
      setExpensesPercentage((weeklyExpenses / weeklyGross) * 100);
    }
  }, [annualExpenses, annualGross, monthlyExpenses, monthlyGross, weeklyExpenses, weeklyGross, calculated]);

  useEffect(() => {
    if (timespan === "annual") {
      setFinalIncPercentage(
        parseInt(100 - (expensesPercentage + parseInt(tax)))
      );
    } else if (timespan === "monthly") {
      setFinalIncPercentage(
        parseInt(100 - (expensesPercentage + parseInt(tax)))
      );
    } else if (timespan === "weekly") {
      setFinalIncPercentage(
        parseInt(100 - (expensesPercentage + parseInt(tax)))
      );
    }
  }, [expensesPercentage]);

  const calculatePercentage = () => {
    setTaxPercentage(tax);
    setNetIncPercentage(
      parseInt(((salary - (tax / 100) * salary) / salary) * 100)
    );
    setExpensesPercentage(parseInt((totalExpenses / salary) * 100));
    setFinalIncPercentage(parseInt(100 - (expensesPercentage + taxPercentage)));
    console.log(`${tax}, ${expensesPercentage}, ${finalIncPercentage}`);
  };

  const [calculated, setCalculated] = useState(false);

  return (
    <div className="container m-auto h-5/6 w-4/6 rounded-3xl p-3 main-div tracking-wide">
      <div className="flex h-full">
        {!calculated ? (
          <div className="h-full main-left p-3">
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={euro}
                alt="piggy-bank"
                className={
                  currency === "€"
                    ? "w-4/6 h-4/6 logo"
                    : "w-4/6 h-4/6 logo hidden"
                }
              />
              <img
                src={dollar}
                alt="piggy-bank"
                className={
                  currency === "$"
                    ? "w-4/6 h-4/6 logo"
                    : "w-4/6 h-4/6 logo hidden"
                }
              />
              <img
                src={pound}
                alt="piggy-bank"
                className={
                  currency === "£"
                    ? "w-4/6 h-4/6 logo"
                    : "w-4/6 h-4/6 logo hidden"
                }
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between items-center w-[59.5%] p-6">
            <Table
              currency={currency}
              annualGross={annualGross}
              monthlyGross={monthlyGross}
              weeklyGross={weeklyGross}
              dialyGross={dialyGross}
              tax={tax}
              annualExpenses={annualExpenses}
              monthlyExpenses={monthlyExpenses}
              weeklyExpenses={weeklyExpenses}
              dialyExpenses={dialyExpenses}
            />
            <div className="h-[30%] w-full rounded-2xl flex justify-between mt-1">
              <div
                className={
                  tax === "10"
                    ? "h-[100%] w-[30%] active-tax rounded-xl flex flex-col justify-between items-center p-5"
                    : "h-[100%] w-[30%] inactive-tax rounded-xl flex flex-col justify-between items-center p-5"
                }
              >
                <span className="text-center text-l">Salary:</span>
                <span className="text-center text-l underline">
                  0{currency} to 4999{currency}
                </span>
                <span className="font-bold">
                  <span className="text-center text-2xl indigo-table">10%</span>
                  TAX
                </span>
              </div>
              <div
                className={
                  tax === "20"
                    ? "h-[100%] w-[30%] active-tax rounded-xl flex flex-col justify-between items-center p-5"
                    : "h-[100%] w-[30%] inactive-tax rounded-xl flex flex-col justify-between items-center p-5"
                }
              >
                <span className="text-center text-l">Salary:</span>
                <span className="text-center text-l underline">
                  5000{currency} to 14999{currency}
                </span>
                <span className="font-bold">
                  <span className="text-center text-2xl indigo-table">20%</span>
                  TAX
                </span>
              </div>
              <div
                className={
                  tax === "30"
                    ? "h-[100%] w-[30%] active-tax rounded-xl flex flex-col justify-between items-center p-5"
                    : "h-[100%] w-[30%] inactive-tax rounded-xl flex flex-col justify-between items-center p-5"
                }
              >
                <span className="text-center text-l">Salary:</span>
                <span className="text-center text-l underline">
                  15000{currency} and higher
                </span>
                <span className="font-bold">
                  <span className="text-center text-2xl indigo-table">30%</span>
                  TAX
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="main-center h-[90%] my-auto rounded-full bg-white"></div>
        <div className="h-full main-right p-6 flex justify-center">
          <Calculator
            currency={currency}
            timespan={timespan}
            salary={salary}
            setSalary={setSalary}
            setCurrency={setCurrency}
            setTimespan={setTimespan}
            tax={tax}
            setTotalExpenses={setTotalExpenses}
            totalExpenses={totalExpenses}
            setCalculated={setCalculated}
            calculated={calculated}
            netIncPercentage={netIncPercentage}
            expensesPercentage={expensesPercentage}
            finalIncPercentage={finalIncPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
