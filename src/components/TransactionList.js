import React ,{useContext} from 'react'
import ExpenseContext from '../context/ExpenseContext';
const TransactionList = () => {
    const {expenseList,setExpenseList} = useContext(ExpenseContext);
    const handleRemove = (selectedID)=>{
        const filteredArr = expenseList.filter((ele)=> ele.id !== selectedID);
        setExpenseList(filteredArr);
    }

    return (
        <div className="mb-4">
            <p className="pb-1 border-b mb-4 text-[16px] font-medium">History</p>
            <ul className='flex flex-col space-y-3'>
                {   
                    (expenseList?.length > 0) ? 
                     (expenseList.map((transaction)=>(
                        <li key={transaction.id} className=" group flex justify-start items-center  ">
                        <button className="hidden mr-2 group-hover:block text-center w-[24px] h-[24px] rounded-[6px] bg-red-500 text-white" type="button" onClick={()=>handleRemove(transaction.id)}>x</button>
    
                        <div className=" w-full flex justify-between items-center p-2 border shadow-sm rounded-[8px] ">
                            <p>{transaction.note}</p>
                            <p className={`border-r-[4px] pr-4  ${(transaction.type === 'expense')? 'border-[#eb4688]' : 'border-[#38cf8d]' }`}>Rs.{transaction.amount}</p>

                        </div>
                    </li>
                    ))) : (<li className='text-center py-8 rounded-[8px] bg-slate-200'>No data found</li>)
                }
            </ul>
        </div>
    )
}
export default TransactionList