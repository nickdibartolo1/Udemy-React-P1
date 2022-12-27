import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')

    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value);
        console.log(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setNewAmount(e.target.value);
        console.log(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setNewDate(e.target.value);
        console.log(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }

        props.onSaveExpenseData(expenseData)
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={newAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        value={newDate}
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel} type="cancel">Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        </div >
    )
}
