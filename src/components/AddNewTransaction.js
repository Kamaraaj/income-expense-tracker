import React, { useContext, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext';
const initialForm = {
    note: '',
    amount: '',
    type: ''
}
const AddNewTransaction = () => {
    const [formValues, setFormValues] = useState(initialForm);
    const [formValuesError, setFormValuesError] = useState({});
    const [notValidExpense,setNotValidExpense] = useState(false);
    const {expenseList,setExpenseList,totalIncome} = useContext(ExpenseContext);

    const handleTransaction = (event) => {
        const { name, value } = event.target
        setFormValues((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const validateForm = () => {
        const errors = {};
        if (!formValues.note) errors.note = "Enter valid Note";
        if (!formValues.amount) errors.amount = "Enter valid Amout";
        if (!formValues.type) errors.type = "Enter Valid Type";

        return errors;
    }
    const handleTransactionSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setFormValuesError(formErrors);
        if (Object.keys(formErrors).length === 0) {
            const newTransaction = {
                ...formValues,
                id: Math.floor(Math.random() * 100000000)
              }
              const updatedList = [...expenseList,newTransaction];
              let tempIncome = 0;
              let tempExpense = 0;
              updatedList.forEach((item)=>{
                if (item.type === 'income') tempIncome+=parseInt(item.amount);
                else if (item.type === 'expense') tempExpense+=parseInt(item.amount);
              })
              if (tempIncome > tempExpense || tempIncome === tempExpense){
                setExpenseList(updatedList);
                setFormValues(initialForm);
                setNotValidExpense(false);
              }
              else setNotValidExpense(true);
        }
    }
    
    return (
        <div>
            <p className="pb-1 border-b mb-4 text-[16px] font-medium">Add new transaction</p>
            <form onSubmit={handleTransactionSubmit}>
                <div className="input-fields mb-2">
                    <label htmlFor="note" className="block mb-1" >Note</label>
                    <input type="text" name='note' value={formValues.note} id="note" placeholder="Enter a note" onChange={handleTransaction} className="block w-full border border-blue-300 rounded-[6px] h-[44px] p-2 focus:border focus:ring-0" />
                    <small className='text-red-500 py-1'>{formValuesError.note}</small>
                </div>
                <div className="input-fields mb-2">
                    <label htmlFor="amount" className="block mb-1" >Amount</label>
                    <input type="number" name='amount' value={formValues.amount} id="amount" placeholder="Enter Amount" onChange={handleTransaction} className="block w-full border border-blue-300 rounded-[6px] h-[44px] p-2 focus:border focus:ring-0" />
                    <small className='text-red-500 py-1'>{formValuesError.amount}</small>
                </div>
                <div className="input-fields mb-6">
                    <label htmlFor="type" className="block mb-1" >Type</label>
                    <select name='type' value={formValues.type} id="type" onChange={handleTransaction} className="block w-full p-2 border border-blue-300 rounded-[6px]">
                        <option value='' className="p-2">Select Type</option>
                        {totalIncome > 0 && <option value='expense' className="p-2">Expense</option> }
                        <option value='income' className="p-2">Income</option>
                    </select>
                    <small className='text-red-500 py-1'>{formValuesError.type}</small>

                </div>
                {
                    notValidExpense && <small className= ' block mb-3 text-red-500 py-1'> Expense should not be greater than Income</small>
                }
                
            
                <button type="submit" className="bg-[#864df0] block w-full text-center py-[6px] text-white rounded-[6px]">Add</button>
            </form>
        </div>
    )
}
export default AddNewTransaction;