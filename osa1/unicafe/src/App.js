import { useState } from 'react'

const Button =({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
      <tr><td>{props.text} {props.value} {props.unit}</td></tr>
  )
  }

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral 
  const total = good+bad+neutral
  const average = (good * 1 + bad * -1) / total
  const positive = good * (100/total)
  
  if (total===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="total" value={total}/>        
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive} unit="%"/>
      </tbody>
    </table>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [feedbacks, setFeedbacks] = useState({
    good: 0, neutral: 0, bad:0
  })
  
  const handleGoodClick = () => {
    setFeedbacks({ ...feedbacks, good: feedbacks.good + 1 })
  }

  const handleNeutralClick = () => {
    setFeedbacks({ ...feedbacks, neutral: feedbacks.neutral + 1 })
  }

  const handleBadClick = () => {
    setFeedbacks({ ...feedbacks, bad: feedbacks.bad + 1 })
  }

  return (
    <div>
      <Header text="give feedback"/>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div>
      <Header text="statistics"/>
      <Statistics good={feedbacks.good} bad={feedbacks.bad} neutral={feedbacks.neutral}/>
    </div>
  )
}

export default App
