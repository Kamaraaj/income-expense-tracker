
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddNewTransaction from './components/AddNewTransaction';
import ExpneseContextProvider from './context/ExpneseContextProvider';
function App() {
  return (
    <div className='bg-blue-300 py-6 flex justify-center items-center'>
      <div className='w-[500px] py-6 px-10 rounded-lg shadow-lg bg-white'>
        <ExpneseContextProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
        </ExpneseContextProvider>
      </div>
    </div>

  );
}

export default App;
