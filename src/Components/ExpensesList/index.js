import ExpenseItem from '../ExpenseItem'
import './index.css'

export const ExpensesList = ({ data }) => {
  return (
    data.length === 0 ?
      <h2 className="expenses-list__fallback">No expense's found.</h2> :
      <ul className="expenses-list">
        {
          data.map(item => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))
        }
      </ul>
  )
}
