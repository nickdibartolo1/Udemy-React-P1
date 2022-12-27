import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {
    const [year, setYear] = useState('2020');

    const filterChangeHandler = (newYear) => {
        console.log('expenses.js');
        console.log(newYear);
        setYear(newYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={year}
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}
