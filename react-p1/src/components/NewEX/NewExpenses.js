import React, { useState } from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpenses(props) {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  };

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}
