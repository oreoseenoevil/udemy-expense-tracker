import { useState } from 'react'
import { ExpenseForm } from '../ExpenseForm/index'
import './index.css'

export const NewExpense = ({ newExpenseData }) => {
  const [onEdit, setOnEdit] = useState(false)

  const saveExpenseData = data => {
    const newData = {
      ...data,
      id: Math.random().toString()
    }

    newExpenseData(newData)
  }

  return (
    <div className="new-expense">
      {
        onEdit ?
          <ExpenseForm saveData={saveExpenseData} setOnEdit={setOnEdit} /> :
          <button onClick={() => setOnEdit(!onEdit)}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense
