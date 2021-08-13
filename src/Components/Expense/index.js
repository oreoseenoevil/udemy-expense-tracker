import { Card } from '../Card'
import './index.css'
import { ExpensesFilter } from '../ExpensesFilter'
import { useState } from 'react'
import { ExpensesList } from '../ExpensesList'
import { ExpensesChart } from '../ExpensesChart'

export const Expense = ({ data }) => {
  const [filterYear, setFilterYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear)
  }

  const filteredExpenses = data.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <Card classes="expenses">
      <ExpensesFilter
        selected={filterYear}
        filterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart data={filteredExpenses} />
      <ExpensesList
        data={filteredExpenses}
      />
    </Card>
  )
}

export default Expense