import { useState } from 'react'
import './index.css'

const initialState = {
  title: '',
  amount: '',
  date: ''
}

export const ExpenseForm = ({ saveData, setOnEdit }) => {
  const [data, setData] = useState(initialState)

  const { title, amount, date } = data

  const handleChange = e => {
    const { name, value } = e.target
    setData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newData = {
      title,
      amount: +amount,
      date: new Date(date)
    }
    console.log(newData)
    saveData(newData)
    setData(initialState)
    setOnEdit(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" onChange={handleChange} value={date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setOnEdit(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
