import './index.css'
import { ExpenseDate } from '../ExpenseDate'
import { Card } from '../Card'
import { useState } from 'react'

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const handleClick = () => setTitle('Updated')

  return (
    <Card classes="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Edit</button>
    </Card>
  )
}

export default ExpenseItem