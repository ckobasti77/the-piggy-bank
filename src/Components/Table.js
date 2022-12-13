import React, { useState } from "react";
import logo from "./../public/logo.png";

const Table = ({
  currency,
  annualGross,
  monthlyGross,
  weeklyGross,
  dialyGross,
  tax,
  annualExpenses,
  monthlyExpenses,
  weeklyExpenses,
  dialyExpenses
}) => {
  return (
    <div className="w-full h-[68%] mt-2 mb-4 mx-4 text-[0.7rem] rounded-2xl table">
      <div className="w-full h-[16%] pb-[3%] px-[2%] my-[2%] bg-transparent flex rounded-full text-center">
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-bold rounded-full table-timespan">
          <img src={logo} alt="logo" className="w-[40px]" />
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Gross <br />
          income
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Tax
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Net <br />
          income
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Expenses
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Final income
        </span>
      </div>
      <div className="w-full h-[16%] pb-[3%] px-[2%] my-[2%] bg-transparent flex rounded-full text-center">
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Annual
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${(parseInt(annualGross)).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${((parseInt(tax) / 100) * annualGross).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${
            (annualGross - ((parseInt(tax) / 100) * annualGross)).toFixed(2)
          }${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${(annualExpenses).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${((annualGross - ((parseInt(tax) / 100) * annualGross)).toFixed(2)) - ((annualExpenses).toFixed(2))}${currency}`}
        </span>
      </div>
      <div className="w-full h-[16%] pb-[3%] px-[2%] my-[2%] bg-transparent flex rounded-full text-center">
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Monthly
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${(parseInt(monthlyGross)).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${((parseInt(tax) / 100) * monthlyGross).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${
             (monthlyGross - ((parseInt(tax) / 100) * monthlyGross)).toFixed(2)
          }${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${(monthlyExpenses).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${((monthlyGross - ((parseInt(tax) / 100) * monthlyGross)).toFixed(2)) - ((monthlyExpenses).toFixed(2))}${currency}`}
        </span>
      </div>
      <div className="w-full h-[16%] pb-[3%] px-[2%] my-[2%] bg-transparent flex rounded-full text-center">
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Weekly
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${(parseInt(weeklyGross)).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${((parseInt(tax) / 100) * weeklyGross).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${
            (weeklyGross - ((parseInt(tax) / 100) * weeklyGross)).toFixed(2)
          }${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${(weeklyExpenses).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${((weeklyGross - ((parseInt(tax) / 100) * weeklyGross)).toFixed(2)) - ((weeklyExpenses).toFixed(2))}${currency}`}
        </span>
      </div>
      <div className="w-full h-[16%] pb-[3%] px-[2%] my-[2%] bg-transparent flex rounded-full text-center">
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-medium t-side-head rounded-full">
          Dialy
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${(parseInt(dialyGross)).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${((parseInt(tax) / 100) * dialyGross).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
          {`${
             (dialyGross - ((parseInt(tax) / 100) * dialyGross)).toFixed(2)
          }${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${(dialyExpenses).toFixed(2)}${currency}`}
        </span>
        <span className="w-[16%] mx-[2%] h-full flex justify-center items-center font-thin">
        {`${((dialyGross - ((parseInt(tax) / 100) * dialyGross)).toFixed(2)) - ((dialyExpenses).toFixed(2))}${currency}`}
        </span>
      </div>
    </div>
  );
};

export default Table;
