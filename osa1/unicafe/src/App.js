import { useState } from 'react'

const Button =({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Counter = (props) => {
  return (
    <div>
      <p>{props.name} {props.clicks} {props.unit}</p>
    </div>
  )
  }



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+bad+neutral
  const average = (good * 1 + bad * -1) / total
  const positive = good * (100/total)

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
      <Header name="give feedback"/>
      <div>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
      </div>
      <Header name="statistics"/>
      <div>
        <Counter name="good" clicks={good}/>
        <Counter name="neutral" clicks={neutral}/>
        <Counter name="bad" clicks={bad}/>
        <Counter name="total" clicks={total}/>
        <Counter name="average" clicks={average}/>
        <Counter name="positive" clicks={positive} unit="%"/>
      </div>
    </div>
  )
}

export default App
