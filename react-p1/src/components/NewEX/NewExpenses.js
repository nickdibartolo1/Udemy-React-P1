import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpenses(props) {

    const saveExpenseDataHandler = (newExpenseData) =>{
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)


    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
