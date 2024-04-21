import React, { useState } from 'react'
import ExpenseContext from './ExpenseContext'
const ExpneseContextProvider = ({children}) => {
    const [expenseList,setExpenseList] = useState([]);
    const [totalIncome,setTotalIncome] = useState(0);
    const [totalExpense,setTotalExpense] = useState(0);

  return (
    <ExpenseContext.Provider value={{expenseList,setExpenseList,totalIncome,setTotalIncome,totalExpense,setTotalExpense}}>
        {children}
    </ExpenseContext.Provider>
  )
}

export default ExpneseContextProvider
