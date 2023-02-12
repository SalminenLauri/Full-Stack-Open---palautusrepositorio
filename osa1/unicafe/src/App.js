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
    <div>
      <p>{props.text} {props.value} {props.unit}</p>
    </div>
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
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>        
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive} unit="%"/>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
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
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
