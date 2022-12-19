import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const practiceHandler = () => {
        setTitle('updated');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={practiceHandler}>Change Title</button>
        </Card>
    )
}
