import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

function App() {
  return <>
  <Alert></Alert>
  <ExpenseForm/>
  <ExpenseList />
  </>
  
  }
export default App
