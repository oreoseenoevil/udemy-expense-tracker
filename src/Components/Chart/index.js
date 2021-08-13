import { ChartBar } from '../ChartBar'
import './index.css'

export const Chart = ({ dataPoints }) => {
  const dataPointValue = dataPoints.map(data => data.value)

  const totalMaximum = Math.max(...dataPointValue)
  
  return (
    <div className="chart">
      {
        dataPoints.map(data => (
          <ChartBar
            label={data.label}
            value={data.value}
            maxValue={totalMaximum}
            key={data.label}
          />
        ))
      }
    </div>
  )
}
