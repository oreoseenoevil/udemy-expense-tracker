import './index.css'

export const Card = ({ classes, children }) => {
  const className = `card ${classes}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}
