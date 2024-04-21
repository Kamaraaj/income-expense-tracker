import { useContext} from "react";
import ExpenseContext from "../context/ExpenseContext";

const Balance = ()=> {
    const {totalIncome,totalExpense} = useContext(ExpenseContext)

    
    return(
        <div className="mb-4 ">
            <p className="mb-1">Your Balance</p>
            <p className="text-[20px]">Rs {totalIncome - totalExpense} /-</p>
        </div>
    )
}
export default Balance;