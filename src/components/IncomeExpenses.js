import { useContext, useEffect, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

const IncomeExpenses = ()=>{
  const {expenseList,totalIncome,setTotalIncome,totalExpense,setTotalExpense} = useContext(ExpenseContext);
  let tempIncome = 0;
  let tempExpense = 0;
  expenseList.forEach((item)=>{
    if (item.type === 'income') tempIncome+=parseInt(item.amount);
    else if (item.type === 'expense') tempExpense+=parseInt(item.amount);
  })
  useEffect(()=>{
    setTotalIncome(tempIncome);
    setTotalExpense(tempExpense);
  },[expenseList])
  return(
    <section className="mb-4 py-2 flex justify-center items-center space-x-10 bg-white border shadow-sm rounded-[6px] text-black">
    <div>
        <p >Income</p>
        <p className="text-[#38cf8d]">Rs,{totalIncome}</p>
    </div>
    <div className="border h-10"></div>
    <div>
        <p >Expense</p>
        <p className="text-[#eb4688]">Rs,{totalExpense}</p>
    </div>
</section>
  ) 
}
export default IncomeExpenses