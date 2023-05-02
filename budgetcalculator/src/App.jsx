import {React, useState} from 'react'
import './App.css'
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import {v4 as uuidv4} from 'uuid';

const initialExpenses = [
  {id: uuidv4(), charge:"rent", amount:1600},
  {id: uuidv4(), charge:"car payment", amount:400},
  {id: uuidv4(), charge:"credit card bill", amount:1200}
];

console.log(initialExpenses);

function App() {
  // **** state values
  // all expenses, add expense
    const [expenses, setExpenses] = useState(initialExpenses);
    // ** single expense

    const [charge, setCharge] = useState('');
    // *** functionallity
    const [amount, setAmount] = useState('');

    const handleCharge = e => {
      setCharge(e.target.value)
    }

    const handleAmount = e => {
      setAmount(e.target.value)
    }


    const handleSubmit = e => {
      e.preventDefault();
      if(charge !=='' && amount > 0) {
        const singleExpense = {id:uuidv4(),charge, amount };
        setExpenses([...expenses, singleExpense])
        setCharge('');
        setAmount('');
      } else {
        // handle alert called
      }
    }

  return <>
  <Alert />
  <h1>budget calculator</h1>
  <main className="App">
  <ExpenseForm 
  charge={charge} 
  amount={amount} 
  handleAmount={handleAmount} 
  handleCharge={handleCharge} 
  handleSubmit={handleSubmit}
  />
  <ExpenseList  expenses={expenses}/>
  </main>
  <h1>
    
      Total Spending : <span className='total'>
        $ {expenses.reduce((acc, curr)=>{
          return (acc += parseInt (curr.amount));
        }, 0)}
      </span>
    </h1>
  
  </>
  
  }
export default App
